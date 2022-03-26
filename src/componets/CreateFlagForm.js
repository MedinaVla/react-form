import { useForm, Controller } from "react-hook-form";
import "../Form.css";
import React from "react";
import {
  TextField,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Button,
} from "@mui/material";

const defaultValues = { name: "", flagCode: "" };

export default function CreateFlagForm() {
  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, code: data.flagCode }),
    };
    console.log(data);
    const url = `https://localhost:5001/api/Flags`;
    fetch(url, requestOptions).then((response) => console.log(response));
    reset(defaultValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ minWidth: 500 }}>
          <CardHeader title="Create Flag"></CardHeader>
          <CardContent>
            <Stack spacing={2}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true, maxLength: 11, minLength: 2 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="Flag Name"
                    variant="outlined"
                    className="TextFieldForm"
                  />
                )}
              />
              {errors.name?.type === "required" && <p>The name is required</p>}
              {errors.name?.type === "maxLength" && (
                <p>"The max length of name is 20"</p>
              )}
              {errors.name?.type === "minLength" && (
                <p>"The min length of the name is 3"</p>
              )}
              <Controller
                name="flagCode"
                control={control}
                rules={{ required: true, maxLength: 11, minLength: 2 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="Flag Code"
                    variant="outlined"
                    className="TextFieldForm"
                  />
                )}
              />
              {errors.name?.type === "required" && <p>The name is required</p>}
              {errors.name?.type === "maxLength" && (
                <p>"The max length of name is 20"</p>
              )}
              {errors.name?.type === "minLength" && (
                <p>"The min length of the name is 3"</p>
              )}

              <Button variant="contained" color="primary" type="submit">
                Create
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
