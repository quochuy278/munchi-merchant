import { IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import CircleIcon from "@mui/icons-material/Circle";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#F3F5F7" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ padding: 0 }}
          >
            <MenuIcon sx={{ color: "#000000" }} />
          </IconButton>
          <Box sx={{ flex: 1 }} display="flex" justifyContent="space-between">
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{
                mr: 2,
                backgroundColor: "#FFFFFF",
                width: "125px",
                height: "32px",
                borderRadius: 5,
                marginLeft: 2,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FactCheckIcon
                  color="primary"
                  sx={{ height: "15px", width: "15px", marginRight: "5px" }}
                />
                <Typography color={"#5191D9"} fontSize="10px" lineHeight="13px">
                  Orders manager
                </Typography>
              </Box>
            </IconButton>
            <Box display={"flex"} alignItems="center">
              <CircleIcon
                sx={{ color: "green", width: "10px", height: "10px",marginRight: "10px" }}
              />
              <Typography color={"#000000"} fontSize="12px" lineHeight="16px">
                Restaurant open
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
