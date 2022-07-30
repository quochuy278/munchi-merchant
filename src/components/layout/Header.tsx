import {  IconButton, Toolbar, Typography } from '@mui/material'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import FactCheckIcon from "@mui/icons-material/FactCheck";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FactCheckIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
