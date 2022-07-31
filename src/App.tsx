import { Card, Container, Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import "./App.css";
import AcceptedList from "./components/accepteditem/AcceptedList";
import Header from "./components/layout/Header";
import PendingList from "./components/pendingitem/PendingList";
import MainContent from "./container/MainContent";
import Paper from "@mui/material/Paper";
import Pickup from "./components/readytopickup/Pickup";
const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  height: "25px",
  width: "25px",
  textAlign: "center",
  fontWeight: 700,
  color: "#909090",
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function App() {
  return (
    <MainContent>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        sx={{ width: "100%", backgroundColor: "black", padding: "20px" }}
      >
        <Box gridColumn="span 7" sx={{ backgroundColor: "green" }}>
          <Box
            gridColumn="span 12"
            sx={{
              backgroundColor: "red",
              height: "calc(50% -20px)",
              padding: "10px",
            }}
            className="boxCard"
          >
            <Typography variant="h5">Incoming</Typography>
            <PendingList />
          </Box>
          <Box
            gridColumn="span 12"
            sx={{
              backgroundColor: "yellow",
              height: "calc(50% -20px)",
              padding: "10px",
            }}
            className="boxCard"
          >
            <Typography variant="h5"> Ready to pick up</Typography>
          <Pickup/>
          </Box>
        </Box>
        <Box
          gridColumn="span 5"
          sx={{ backgroundColor: "blue" }}
          className="right"
        >
          <Typography variant="h5">In progress</Typography>
          <AcceptedList />
          {/* <PendingList /> */}
        </Box>
        {/* <Box gridColumn="span 6" gap={2}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <Box gridColumn="span 3">
              <Box sx={{ height: "50%", backgroundColor: "red" }}>Hello</Box>
            </Box>
            <Box gridColumn="span 3">
              <Box>Hello</Box>
            </Box>
          </Box>
        </Box>
        <Box gridColumn="span 6">
          <Item>xs=6</Item>
        </Box> */}
      </Box>
    </MainContent>
  );
}
export default App;
