"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
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
  [module: string]: {
    [submodule: string]: Route[];
  };
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

const groupRoutes = (routes: Route[]): GroupedRoutes =>
  routes.reduce((acc: GroupedRoutes, route) => {
    if (!acc[route.module]) {
      acc[route.module] = {};
    }
    if (!acc[route.module][route.submodule]) {
      acc[route.module][route.submodule] = [];
    }
    acc[route.module][route.submodule].push(route);
    return acc;
  }, {});

export default function Sidebar() {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    const storedRoutes = sessionStorage.getItem("routes");
    if (storedRoutes) {
      // Si hay rutas almacenadas, cargarlas
      setRoutes(JSON.parse(storedRoutes));
    } else {
      // Si no hay rutas almacenadas, hacer la solicitud
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
                {module}
              </span>
            </AccordionSummary>

            {Object.keys(groupedRoutes[module]).map((submodule) => (
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
                    fontSize: ".82rem",
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

                {groupedRoutes[module][submodule].map((route) => (
                  <Link href={route.path} key={route.id}>
                    <AccordionDetails
                      sx={{
                        bgcolor: "#fff",
                        color: "#444",
                        fontSize: ".80rem",
                        fontWeight: "400",
                        borderRadius: '4px',
                        padding: ".4rem .8rem",
                        "&:hover": {
                          bgcolor: "#ffc0a7",
                        },
                      }}
                    >
                      {route.routeOption}
                    </AccordionDetails>
                  </Link>
                ))}
              </Accordion>
            ))}
          </Accordion>
        );
      })}
    </div>
  );
}
