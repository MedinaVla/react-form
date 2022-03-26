import { useForm, Controller } from "react-hook-form";
import "../Form.css";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

const defaultValues = { name: "" };

export default function DeleteFlagForm(props) {
  const { updateLeaderboardArray, catalogs } = props;

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
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const url = `https://localhost:5001/api/Flags/${data.name}`;
    console.log(url);
    fetch(url, requestOptions).then((response) => console.log(response));
    reset(defaultValues);
  };
  const getSelect = (data) => `${data.id} , ${data.name}`;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ minWidth: 500 }}>
          <CardHeader title="Delete Flag"></CardHeader>
          <CardContent>
            <Stack spacing={2}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Select
                    className="TextFieldForm"
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Flag"
                  >
                    {catalogs.map((catalog) => (
                      <MenuItem key={catalog.id} value={catalog.id}>
                        {catalog.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />

              <Button variant="contained" color="warning" type="submit">
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
