import React from "react";
import { useForm, Controller } from "react-hook-form";
import "../Form.css";
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

const defaultValues = { firstName: "", email: "", selectSex: "" };

export default function FinalUserReactForms() {
  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br></br>

      <Controller
        name="firstName"
        control={control}
        rules={{ required: true, maxLength: 11, minLength: 2 }}
        render={({ field }) => (
          <TextField
            {...field}
            className="TextFieldForm"
            type="text"
            label="First Name"
            variant="outlined"
          />
        )}
      />
      {errors.firstName?.type === "required" && <p>This is required</p>}
      {errors.firstName?.type === "maxLength" && <p>"Max name is 11"</p>}
      {errors.firstName?.type === "minLength" && <p>"Min name is 2"</p>}
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="TextFieldForm"
            type="email"
            label="Email"
            variant="outlined"
          />
        )}
      />
      <br></br>
      <br></br>

      <Controller
        name="selectSex"
        control={control}
        render={({ field }) => (
          <Select
            className="TextFieldForm"
            {...field}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sex"
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        )}
      />
      <br></br>
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
      <button type="button" onClick={() => reset({ defaultValues })}>
        Reset
      </button>
    </form>
  );
}
