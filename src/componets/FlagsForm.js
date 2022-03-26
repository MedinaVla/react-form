import { useForm, Controller } from "react-hook-form";
import "../Form.css";
import React, { useState, useEffect } from "react";
import AllFlags from "./flags";
import {
  TextField,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

const defaultValues = { name: "", flagCode: "" };

export default function FlagForms(props) {
  const { updateLeaderboardArray, catalogs } = props;
  const [allFlags, setAllFlags] = useState(null);

  useEffect(() => {
    setAllFlags("");
    // console.log(AllFlags);
  }, []);

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => {
    const idFlag = data.name.split(",")[0];
    const nameFlag = data.name.split(",")[1];
    console.log(nameFlag);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nameFlag, code: data.flagCode }),
    };
    const url = `https://localhost:5001/api/Flags/ ${idFlag}`;
    fetch(url, requestOptions).then((response) => console.log(response));
    reset(defaultValues);
  };
  const getSelect = (data) => `${data.id} , ${data.name}`;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ minWidth: 500 }}>
          <CardHeader title="Update Flags"></CardHeader>
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
                      <MenuItem key={catalog.id} value={getSelect(catalog)}>
                        {catalog.name}
                      </MenuItem>
                    ))}

                    {/* <MenuItem value={"male"}>male</MenuItem> */}
                  </Select>
                )}
              />
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
                Update
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
