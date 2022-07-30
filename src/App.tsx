import { Card, Container, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import "./App.css";
import Header from "./components/layout/Header";
import PendingList from "./components/pendingitem/PendingList";
import MainContent from "./container/MainContent";


const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  height: "25px",
  width: "25px",
  textAlign: "center",
  fontWeight: 700,
  color: "#909090",
}));

function App() {
  return (
    <MainContent>
      <Box component="div" className="box" draggable={'false'}>
        <Box className="wrapper">
          <Box component="div" className="title__container">
            <Typography
              variant="h4"
              className="title"
              sx={{ marginRight: "10px" }}
            >
              Incoming
            </Typography>
            {/* card number */}
            <CustomCard className="card">2</CustomCard>
          </Box>
          <Box component="div" className="main__content">
            {/* main box content */}
          </Box>
          <Box component={"div"} draggable={false}>
            <Container maxWidth={'lg'} sx={{marginTop: "10px"}}>
              <PendingList/>
            </Container>
          </Box>
        </Box>
      </Box>
      <Box component="div" className="box">
        <Box className="wrapper">
          <Box component="div" className="title__container">
            <Typography variant="h4" sx={{ marginRight: "10px" }}>
              Accepted
            </Typography>
            {/* card number */}
            <CustomCard>2</CustomCard>
          </Box>
          <Box component="div" className="main__content">
            {/* main box content */}
          </Box>
          dadasda
        </Box>
      </Box>
    </MainContent>
  );
}

export default App;
