import Image from "next/image";
import LogoCoophumana from "../public/logo-web.png";
import styles from "./page.module.css";
import { Button, TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Home() {
  return (
    <>
      <div className={styles.main__content}>
        <div className={styles.login}>
          <div className={styles.logo}>
            <Image src={LogoCoophumana} alt="LogoCoophumana" />
            <h1>Bienvenid@</h1>
            <p>
              Por favor, ingresa tu correo electrónico y contraseña para
              continuar
            </p>
          </div>

          <div className={styles.form}>
            <TextField
              label="Correo electrónico"
              id="outlined-size-small"
              size="small"
              sx={{ width: "100%" }}
            />

            <TextField
              label="Contraseña"
              id="outlined-size-small"
              size="small"
              sx={{ width: "100%" }}
            />
          </div>

          <div className={styles.button}>
            <Button
              size="small"
              sx={{
                display: 'flex', alignItems: 'center', padding: '0.4rem 1rem',
                backgroundColor: "#4caf50", // Color de fondo personalizado
                color: "#fff", // Color del texto
                "&:hover": {
                  backgroundColor: "#388e3c", // Color de fondo al pasar el mouse
                },
                fontSize: '.80rem'
              }}
            >
              Iniciar sesión 
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
