"use client";
import {
  Grid,
  FormControl,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";

// Define tu esquema de validación con Yup
const schema = yup
  .object({
    nit: yup.string().required("El NIT es requerido"),
    dv: yup.string().required("El DV es requerido"),
    razonSocial: yup.string().required("La razón social es requerida"),
    nombreFacturacion: yup
      .string()
      .required("El nombre de facturación es requerido"),
    representanteLegal: yup
      .string()
      .required("El representante legal es requerido"),
    fechaIngreso: yup.date().required("La fecha de ingreso es requerida"),
    fechaRetiro: yup.date().required("La fecha de retiro es requerida"),
    fechaConstitucion: yup
      .date()
      .required("La fecha de constitución es requerida"),
    sectorEconomico: yup.string().required("El sector económico es requerido"),
    enviarAInfinto: yup.string().required("Enviar a infinito es requerido"),
  })
  .required();

export function AgreementBasicInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]} children />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="NIT"
                  size="small"
                  {...register("nit")}
                  error={!!errors.nit}
                  helperText={errors.nit?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={1}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="DV"
                  size="small"
                  {...register("dv")}
                  error={!!errors.dv}
                  helperText={errors.dv?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Razón social"
                  size="small"
                  {...register("razonSocial")}
                  error={!!errors.razonSocial}
                  helperText={errors.razonSocial?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Nombre de facturación"
                  size="small"
                  {...register("nombreFacturacion")}
                  error={!!errors.nombreFacturacion}
                  helperText={errors.nombreFacturacion?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Representante legal"
                  size="small"
                  {...register("representanteLegal")}
                  error={!!errors.representanteLegal}
                  helperText={errors.representanteLegal?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <DatePicker
                slotProps={{
                  textField: {
                    variant: "outlined",
                    label: "Fecha de ingreso",
                    size: "small",
                    InputLabelProps: { shrink: true },
                  },
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <DatePicker
                slotProps={{
                  textField: {
                    variant: "outlined",
                    label: "Fecha de retiro",
                    size: "small",
                    InputLabelProps: { shrink: true },
                  },
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="enviarAInfinto-label" shrink>
                  Sector económico
                </InputLabel>
                <Select
                  labelId="enviarAInfinto-label"
                  label="Sector económico"
                  size="small"
                  defaultValue="Sector económico"
                  {...register("enviarAInfinto")}
                  error={!!errors.enviarAInfinto}
                >
                  <MenuItem value="opcion1">Opción 1</MenuItem>
                  <MenuItem value="opcion2">Opción 2</MenuItem>
                  <MenuItem value="opcion3">Opción 3</MenuItem>
                </Select>
                {errors.enviarAInfinto && (
                  <p>{errors.enviarAInfinto.message}</p>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="enviarAInfinto-label" shrink>
                  Enviar a infinito
                </InputLabel>
                <Select
                  labelId="enviarAInfinto-label"
                  label="Enviar a infinito"
                  size="small"
                  defaultValue="Enviar a infinito"
                  {...register("enviarAInfinto")}
                  error={!!errors.enviarAInfinto}
                >
                  <MenuItem value="opcion1">Opción 1</MenuItem>
                  <MenuItem value="opcion2">Opción 2</MenuItem>
                  <MenuItem value="opcion3">Opción 3</MenuItem>
                </Select>
                {errors.enviarAInfinto && (
                  <p>{errors.enviarAInfinto.message}</p>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </LocalizationProvider>
    </>
  );
}

export function AgreementResidenceAndContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]} children />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="enviarAInfinto-label" shrink>
                  Departamento
                </InputLabel>
                <Select
                  labelId="enviarAInfinto-label"
                  label="Departamento"
                  size="small"
                  defaultValue="Departamento"
                  {...register("enviarAInfinto")}
                  error={!!errors.enviarAInfinto}
                >
                  <MenuItem value="opcion1">Opción 1</MenuItem>
                  <MenuItem value="opcion2">Opción 2</MenuItem>
                  <MenuItem value="opcion3">Opción 3</MenuItem>
                </Select>
                {errors.enviarAInfinto && (
                  <p>{errors.enviarAInfinto.message}</p>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="enviarAInfinto-label" shrink>
                  Ciudad
                </InputLabel>
                <Select
                  labelId="enviarAInfinto-label"
                  label="Ciudad"
                  size="small"
                  defaultValue="Ciudad"
                  {...register("enviarAInfinto")}
                  error={!!errors.enviarAInfinto}
                >
                  <MenuItem value="opcion1">Opción 1</MenuItem>
                  <MenuItem value="opcion2">Opción 2</MenuItem>
                  <MenuItem value="opcion3">Opción 3</MenuItem>
                </Select>
                {errors.enviarAInfinto && (
                  <p>{errors.enviarAInfinto.message}</p>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Barrio"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="enviarAInfinto-label" shrink>
                  Tipo de dirección 1
                </InputLabel>
                <Select
                  labelId="enviarAInfinto-label"
                  label="Tipo de dirección 1"
                  size="small"
                  defaultValue="Tipo de dirección 1"
                  {...register("enviarAInfinto")}
                  error={!!errors.enviarAInfinto}
                >
                  <MenuItem value="opcion1">Opción 1</MenuItem>
                  <MenuItem value="opcion2">Opción 2</MenuItem>
                  <MenuItem value="opcion3">Opción 3</MenuItem>
                </Select>
                {errors.enviarAInfinto && (
                  <p>{errors.enviarAInfinto.message}</p>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Numero 1"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="enviarAInfinto-label" shrink>
                  Tipo de dirección 2
                </InputLabel>
                <Select
                  labelId="enviarAInfinto-label"
                  label="Tipo de dirección 2"
                  size="small"
                  defaultValue="Tipo de dirección 2"
                  {...register("enviarAInfinto")}
                  error={!!errors.enviarAInfinto}
                >
                  <MenuItem value="opcion1">Opción 1</MenuItem>
                  <MenuItem value="opcion2">Opción 2</MenuItem>
                  <MenuItem value="opcion3">Opción 3</MenuItem>
                </Select>
                {errors.enviarAInfinto && (
                  <p>{errors.enviarAInfinto.message}</p>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Numero 2"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Numero 3"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Detalle"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Teléfono"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Correo eléctronico"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </LocalizationProvider>
    </>
  );
}
