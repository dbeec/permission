"use client";
import { Grid, FormControl, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./agreementRegisterForm.css";

// Define tu esquema de validación con Yup
const schema = yup
  .object({
    nit1: yup.string().required("El NIT es requerido"),
    nit2: yup.string().required("El NIT es requerido"),
    nit3: yup.string().required("El NIT es requerido"),
    nit4: yup.string().required("El NIT es requerido"),
    nit5: yup.string().required("El NIT es requerido"),
  })
  .required();

export default function AgreementRegisterForm() {
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
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={2.1}>
            <FormControl variant="outlined">
              <TextField
                label="NIT 1"
                size="small"
                {...register("nit1")}
                error={!!errors.nit1}
                helperText={errors.nit1?.message}
                sx={{
                  width: "100%",
                  "& .MuiInputLabel-root": {
                    color: "#259780",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#259780",
                  },
                  "& .MuiInputBase-input:focus": {
                    borderColor: "#259780",
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
