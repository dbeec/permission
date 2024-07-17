"use client";
import Image from "next/image";
import LogoCoophumana from "../public/logo-web.png";
import styles from "./page.module.css";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <div className={styles.main__content}>
        <div className={styles.login}>
          <div className={styles.logo}>
            <Image
              src={LogoCoophumana}
              alt="LogoCoophumana"
              width={500}
              height={200}
              priority={true}
            />

            <h1>Bienvenid@</h1>
            <p>
              Por favor, ingresa tu correo electrónico y contraseña para
              continuar
            </p>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <TextField
              label="Correo electrónico"
              id="outlined-size-small"
              size="small"
              sx={{ width: "100%" }}
              {...register("Correo electrónico")}
            />

            <TextField
              label="Contraseña"
              id="outlined-size-small"
              size="small"
              sx={{ width: "100%" }}
              {...register("Contraseña")}
            />

            <button className={styles.button} type="submit">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
