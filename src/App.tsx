import { Card, Container, Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import "./App.css";

import Header from "./components/layout/Header";

import MainContent from "./container/MainContent";
import Paper from "@mui/material/Paper";

import BaseActionCard from "./components/actioncard/BaseActionCard";
import {
  AcceptedButton,
  PendingButton,
  ReadyButton,
} from "./components/actioncard/ActionButton";
const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  height: "25px",
  width: "25px",
  textAlign: "center",
  fontWeight: 700,
  color: "#909090",
}));

const CustomeTypography = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "16px",
  fontWeight: 600,
}));

const CustomeBox = styled(Box)(({ theme }) => ({
  height: "26px",
  width: "26px",
  backgroundColor: "white",
  textAlign: "center",
  marginLeft: "10px",
}));

function App() {
  return (
    <MainContent>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        sx={{ width: "100%", padding: "10px" }}
      >
        <Box gridColumn="span 4" className="section__container">
          <Box gridColumn="span 2" className="section__header" display="flex">
            <CustomeTypography variant="h5">Pending</CustomeTypography>
            <CustomeBox>2</CustomeBox>
          </Box>
          <Box
            display="grid"
            className="card__container"
            gridTemplateColumns="repeat(1, 1fr)"
            gap={2}
            paddingX={2}
          >
            <BaseActionCard>
              <PendingButton />
            </BaseActionCard>
          </Box>
        </Box>
        <Box gridColumn="span 4" className="section__container">
          <Box gridColumn="span 2" className="section__header" display="flex">
            <CustomeTypography variant="h5">Accepted</CustomeTypography>
            <CustomeBox>2</CustomeBox>
          </Box>
          <Box
            display="grid"
            className="card__container"
            gridTemplateColumns="repeat(1, 1fr)"
            gap={2}
            paddingX={2}
          >
            <BaseActionCard>
              <AcceptedButton />
            </BaseActionCard>
          </Box>
        </Box>

        <Box gridColumn="span 4" className="section__container">
          <Box gridColumn="span 2" className="section__header" display="flex">
            <CustomeTypography variant="h5">Ready</CustomeTypography>
            <CustomeBox>2</CustomeBox>
          </Box>
          <Box
            display="grid"
            className="card__container"
            gridTemplateColumns="repeat(1, 1fr)"
            gap={2}
            paddingX={2}
          >
            <BaseActionCard>
              <ReadyButton />
            </BaseActionCard>
          </Box>
        </Box>
      </Box>
    </MainContent>
  );
}
export default App;
