import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable(props) {
  const { leaderboard } = props;

  const RenderTableData = (props) => {
    const { leaderboard } = props;
    // const finalArray = leaderboard.sort((a, b) => b.firstName == a.firstName);
    return leaderboard.map((row, index) => (
      <TableRow key={index}>
        <TableCell>{row.firstName}</TableCell>
        <TableCell align="center">{row.spellName}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
      </TableRow>
    ));
  };

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <TableContainer>
        <Table
          sx={{ minHeight: 200, marginTop: "50px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="center">Spell Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <RenderTableData leaderboard={leaderboard} />
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" /> */}
    </Paper>
  );
}
