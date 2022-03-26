import React, { useState } from "react";
import { useFormik } from "formik";

import {
  TextField,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import "../Form.css";
const FormUserFormikApi = () => {
  // const [values, setValues] = useState({
  //   fullName: "",
  //   email: "",
  //   sex: "",
  // });
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      sex: "",
    },
    onSubmit: async function (values) {
      // Aquí puedes usar values para enviar la información

      console.log(values.fullName);
    },
  });

  // function handleSubmit(evt) {
  //   /*
  //     Previene el comportamiento default de los
  //     formularios el cual recarga el sitio
  //   */
  //   evt.preventDefault();
  //   console.log(
  //     `Fullname: ${values.fullName} email: ${values.email} sex:${values.sex}`
  //   );

  //   // Aquí puedes usar values para enviar la información
  // }
  // function handleChange(evt) {
  //   /*
  //     evt.target es el elemento que ejecuto el evento
  //     name identifica el input y value describe el valor actual
  //   */
  //   const { target } = evt;
  //   const { name, value } = target;
  //   /*
  //     Este snippet:
  //     1. Clona el estado actual
  //     2. Reemplaza solo el valor del
  //        input que ejecutó el evento
  //   */
  //   const newValues = {
  //     ...values,
  //     [name]: value,
  //   };
  //   // Sincroniza el estado de nuevo
  //   setValues(newValues);
  // }
  // // const handleSubmit = (event) => {
  // //   //Previene recargar la pagina
  // //   event.preventDefault();
  // //   console.log(`Fullname: ${fullName} email: ${email} sex:${sex}`);
  // // };

  // // const handleChange = (event) => {
  // //   const { target } = event;
  // //   const { name, value } = target;
  // //   /*
  // //     Este snippet:
  // //     1. Clona el estado actual
  // //     2. Reemplaza solo el valor del
  // //        input que ejecutó el evento
  // //   */
  // //   const newValues = {
  // //     ...fullName,
  // //     [name]: value,
  // //   };
  // //   // Sincroniza el estado de nuevo
  // //   setFullName(newValues);
  // // };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <Card sx={{ maxWidth: 800 }}>
          <CardHeader title="User Registration"></CardHeader>
          <CardContent>
            <Stack spacing={2}>
              <TextField
                className="TextFieldForm"
                type="text"
                name="fullName"
                label="Full name"
                variant="outlined"
                value={values.fullName}
                onChange={handleChange}
                // onChange={(e) => setFullName(e.target.value)}
              />

              <TextField
                className="TextFieldForm"
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.sex}
                  label="Sex"
                  name="sex"
                  onChange={handleChange}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default FormUserFormikApi;
