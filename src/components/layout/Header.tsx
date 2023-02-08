import CircleIcon from "@mui/icons-material/Circle";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Switch from "@mui/material/Switch";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Preferences } from "@capacitor/preferences";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setAuthenticated } from "../../store/auth-slice";
type Anchor = "top" | "left" | "bottom" | "right";
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    const onLogoutHandler = async () => {
      console.log('connected')
      await Preferences.remove({key:"verifyToken"})
      dispatch(setAuthenticated(false))
      navigate('/signin')
    }
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="Dashboard" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
         <ListItem key="Logout" disablePadding>
            <ListItemButton onClick={onLogoutHandler}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#F3F5F7" }}>
        <Toolbar>
          <div>
            <React.Fragment key={"left"}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ padding: 0 }}
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon sx={{ color: "#000000" }} />
              </IconButton>
              <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
              >
                {list("left")}
              </SwipeableDrawer>
            </React.Fragment>
          </div>

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
              component={Link}
              to={"/"}
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
                  {t("header.title")}
                </Typography>
              </Box>
            </IconButton>
            <Box display={"flex"} alignItems="center">
              <Switch checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
              <CircleIcon
                sx={{
                  width: "10px",
                  height: "10px",
                  marginRight: "10px",
                }}
                {...(isOpen ? { color: "success" } : { color: "warning" })}
              />
              <Typography color={"#000000"} fontSize="12px" lineHeight="16px">
                Restaurant{" "}
                {isOpen
                  ? t("restaurantStatus.open")
                  : t("restaurantStatus.close")}
              </Typography>
            </Box>
            {/* <Box display={"flex"} alignItems="center">
              <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => i18n.changeLanguage("en")}>en</Button>
                <Button onClick={() => i18n.changeLanguage("fi")}>fi</Button>
              </ButtonGroup>
            </Box> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
