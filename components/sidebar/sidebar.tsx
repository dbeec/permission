"use client";
import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import Link from "next/link";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export default function Sidebar() {
  const [routes, setRoutes] = useState<Route[]>([]);
  console.log("Routes data:", routes);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/v1/routes");
        setRoutes(response.data);
      } catch (error) {
        console.log("Error fetching routes...");
      }
    };
    fetchRoutes();
  }, []);

  // Agrupa las rutas por módulo y luego por submódulo
  const groupedRoutes = routes.reduce((acc: GroupedRoutes, route) => {
    if (!acc[route.module]) {
      acc[route.module] = {};
    }
    if (!acc[route.module][route.submodule]) {
      acc[route.module][route.submodule] = [];
    }
    acc[route.module][route.submodule].push(route);
    return acc;
  }, {});

  return (
    <>
      <div className="sidebar">
        {/* Este es el mapeo para el modulo del sidebar */}
        {Object.keys(groupedRoutes).map((module) => (
          <Accordion
            key={module}
            square
            disableGutters
            sx={{
              bgcolor: "transparent",
              color: "#fff",
              boxShadow: "none",
              padding: "0",
            }}
          >
            <AccordionSummary
              sx={{
                fontSize: ".9rem",
                fontWeight: "400",
                padding: "0 4px",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <span className="span">{module}</span>
            </AccordionSummary>

            {/* Este es el mapeo para el sub-modulo del sidebar */}
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
                    fontSize: ".85rem",
                    fontWeight: "400",
                    padding: "0 4px",
                    marginLeft: "1rem",
                    color: "#222",
                  }}
                  expandIcon={<ExpandMoreIcon sx={{ color: "#222" }} />}
                >
                  <span className="span">{submodule}</span>
                </AccordionSummary>

                {/* Aqui se ven las opciones agrupadas por los modulos y submodulos */}
                {groupedRoutes[module][submodule].map((route) => (
                  <Link href={route.path} key={route.id}>
                    <AccordionDetails
                      sx={{
                        bgcolor: "#fff",
                        color: "#222",
                        fontSize: ".85rem",
                        fontWeight: "400",
                        borderRadius: "3px",
                        padding: ".4rem 1rem",
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
        ))}
      </div>
    </>
  );
}
