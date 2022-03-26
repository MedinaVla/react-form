import { useForm, Controller } from "react-hook-form";
import "../Form.css";
import React, { useState } from "react";

import {
  TextField,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Button,
} from "@mui/material";

const defaultValues = { firstName: "", spellName: "", email: "" };

export default function Form(props) {
  const { updateLeaderboardArray } = props;

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => {
    updateLeaderboardArray(data);
    console.log(data);
    reset(defaultValues);
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ minWidth: 500 }}>
          <CardHeader title="User Registration"></CardHeader>
          <CardContent>
            <Stack spacing={2}>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: true, maxLength: 11, minLength: 2 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="First Name"
                    variant="outlined"
                    className="TextFieldForm"
                  />
                )}
              />
              {errors.firstName?.type === "required" && (
                <p>The first name is required</p>
              )}
              {errors.firstName?.type === "maxLength" && (
                <p>"The max length of name is 20"</p>
              )}
              {errors.firstName?.type === "minLength" && (
                <p>"The min length of the name is 3"</p>
              )}

              <Controller
                name="spellName"
                control={control}
                rules={{ required: true, maxLength: 20, minLength: 3 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="TextFieldForm"
                    type="text"
                    label="Spell Name"
                    variant="outlined"
                  />
                )}
              />
              {errors.spellName?.type === "required" && (
                <p>The spell name is required</p>
              )}
              {errors.spellName?.type === "maxLength" && (
                <p>"The max length of name is 20"</p>
              )}
              {errors.spellName?.type === "minLength" && (
                <p>"The min length of the spell name is 3 "</p>
              )}

              <Controller
                name="email"
                control={control}
                rules={{ required: true, maxLength: 50, minLength: 6 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="TextFieldForm"
                    type="text"
                    label="Email"
                    variant="outlined"
                  />
                )}
              />
              {errors.email?.type === "required" && (
                <p>The email name is required</p>
              )}
              {errors.email?.type === "maxLength" && (
                <p>"The max length of name is 50"</p>
              )}
              {errors.email?.type === "minLength" && (
                <p>"The min length of the email is 3 "</p>
              )}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => reset(defaultValues)}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
