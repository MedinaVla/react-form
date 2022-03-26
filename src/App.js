import React, { useState } from "react";

import { Stack, AppBar, Toolbar, Typography } from "@mui/material";
import Form from "./componets/Forms";
import BasicTable from "./componets/BasicTable";
import Catalog from "./componets/Catalog";
function App() {
  // const [leaderboard, setLeaderboard] = useState([]);
  // const updateLeaderboardArray = (eachEntry) => {
  //   setLeaderboard([...leaderboard, eachEntry]);
  // };

  return (
    <Stack justifyContent="center" alignItems="center" spacing={2}>
      {/* <Form updateLeaderboardArray={updateLeaderboardArray} />
      <BasicTable leaderboard={leaderboard} /> */}

      <Catalog />
    </Stack>
  );
}
export default App;
