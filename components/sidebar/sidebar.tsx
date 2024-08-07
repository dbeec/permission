"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import "./sidebar.css";

interface Route {
  id: number;
  module: string;
  submodule: string;
  path: string;
  routeOption: string;
}

interface GroupedRoutes {
  [module: string]: Route[] | { [submodule: string]: Route[] };
}

const moduleIcons: { [key: string]: React.ElementType } = {
  ADMINISTRACIÓN: AdminPanelSettingsIcon,
  TERCEROS: RecentActorsIcon,
  // Añade más módulos y sus iconos correspondientes aquí
};

const fetchRoutes = async (): Promise<Route[]> => {
  try {
    const response = await axios.get("http://localhost:4000/v1/routes");
    return response.data;
  } catch (error) {
    console.error("Error fetching routes:", error);
    return [];
  }
};

const groupRoutes = (routes: Route[]): GroupedRoutes => {
  const grouped: GroupedRoutes = {};

  routes.forEach((route) => {
    if (!grouped[route.module]) {
      grouped[route.module] = {};
    }

    const moduleContent = grouped[route.module];

    // Verificar si moduleContent es un objeto
    if (typeof moduleContent === "object" && !Array.isArray(moduleContent)) {
      // Si es un objeto, gestionar los submódulos
      if (!moduleContent[route.submodule]) {
        moduleContent[route.submodule] = [];
      }
      (moduleContent as { [submodule: string]: Route[] })[route.submodule].push(
        route
      );

      // Verificar si el módulo tiene submódulos o solo rutas
      const hasSubmodules = Object.keys(moduleContent).some(
        (submodule) => submodule !== ""
      );
      if (!hasSubmodules) {
        grouped[route.module] = Object.values(moduleContent).flat();
      }
    } else {
      // Si es un array, convertir el módulo a una lista de rutas
      grouped[route.module] = [route];
    }
  });

  return grouped;
};

export default function Sidebar() {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    const storedRoutes = sessionStorage.getItem("routes");
    if (storedRoutes) {
      setRoutes(JSON.parse(storedRoutes));
    } else {
      fetchRoutes().then((data) => {
        setRoutes(data);
        sessionStorage.setItem("routes", JSON.stringify(data));
      });
    }
  }, []);

  const groupedRoutes = groupRoutes(routes);

  return (
    <div className="sidebar">
      {Object.keys(groupedRoutes).map((module) => {
        const IconComponent = moduleIcons[module] || null;
        const moduleContent = groupedRoutes[module];

        // Renderiza solo si hay contenido para el módulo
        if (
          !moduleContent ||
          (Array.isArray(moduleContent) && moduleContent.length === 0)
        ) {
          return null;
        }

        return (
          <Accordion
            key={module}
            square
            disableGutters
            sx={{
              bgcolor: "transparent",
              color: "#fff",
              boxShadow: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <AccordionSummary
              sx={{
                fontSize: ".8rem",
                fontWeight: "400",
                padding: "0 4px",
                minHeight: "unset",
                "& .MuiAccordionSummary-content": {
                  margin: "6px 0",
                },
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <span className="span">
                {IconComponent && <IconComponent />}
                <span className="span">{module}</span>
              </span>
            </AccordionSummary>

            {Array.isArray(moduleContent)
              ? // Si el contenido del módulo es una lista de rutas
                moduleContent.map((route) => (
                  <Link href={route.path} key={route.id}>
                    <AccordionDetails
                      sx={{
                        bgcolor: "#fff",
                        color: "#444",
                        fontSize: ".80rem",
                        fontWeight: "400",
                        borderRadius: "2px",
                        padding: ".4rem .8rem",
                        "&:hover": {
                          bgcolor: "#eee",
                        },
                      }}
                    >
                      {route.routeOption}
                    </AccordionDetails>
                  </Link>
                ))
              : // Si el contenido del módulo contiene submódulos
                Object.keys(moduleContent).map((submodule) => {
                  const submoduleContent = moduleContent[submodule];

                  return (
                    <Accordion
                      key={submodule}
                      square
                      disableGutters
                      sx={{
                        bgcolor: "#d9fcf5",
                      }}
                    >
                      <AccordionSummary
                        sx={{
                          fontSize: ".80rem",
                          fontWeight: "400",
                          padding: "0 4px",
                          marginLeft: ".5rem",
                          color: "#1a7563",
                          minHeight: "unset",
                          "& .MuiAccordionSummary-content": {
                            margin: "6px 0",
                          },
                        }}
                        expandIcon={<ExpandMoreIcon sx={{ color: "#555" }} />}
                      >
                        <span className="span">{submodule}</span>
                      </AccordionSummary>

                      {submoduleContent.map((route) => (
                        <Link href={route.path} key={route.id}>
                          <AccordionDetails
                            sx={{
                              bgcolor: "#fff",
                              color: "#444",
                              fontSize: ".80rem",
                              fontWeight: "400",
                              borderRadius: "2px",
                              padding: ".4rem .8rem",
                              "&:hover": {
                                bgcolor: "#eee",
                              },
                            }}
                          >
                            {route.routeOption}
                          </AccordionDetails>
                        </Link>
                      ))}
                    </Accordion>
                  );
                })}
          </Accordion>
        );
      })}
    </div>
  );
}
