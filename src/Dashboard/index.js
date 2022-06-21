import {
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  Box,
  Drawer,
  ListItemText,
  ListItemButton,
  Grid,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function Dashboard() {
  const small = useMediaQuery("(max-width:756px)");
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        open={open}
        sx={{ backgroundColor: "#e7efff", boxShadow: "none" }}
        position="absolute"
      >
        <Toolbar>
          <Grid item container alignItems={"center"}>
            {" "}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon style={{ color: "black", fontSize: "1.1em" }} />
            </IconButton>
          </Grid>

          <Box
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              padding: small ? "0" : "0 2em",
              justifyContent: "flex-end",
            }}
          >
            <IconButton color="inherit" style={{ marginRight: "1em" }}>
              <NotificationsNoneOutlinedIcon
                style={{ color: "black", fontSize: "1.1em" }}
              />
            </IconButton>
            <IconButton color="inherit">
              {" "}
              <PermIdentityOutlinedIcon
                style={{ color: "black", fontSize: "1.2em" }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        sx={{
          width: small ? "40vw" : "20vw",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: small ? "65vw" : "20vw",
            boxSizing: "border-box",
          },
        }}
        variant={!small ? "permanent" : "temporary"}
        anchor="left"
      >
        <Typography
          variant="h4"
          sx={{ marginLeft: "0.5em", marginTop: "1em", cursor: "pointer" }}
          color={"black"}
        >
          LOGO
        </Typography>
        <Toolbar />

        <List>
          <Grid item container spacing={2} xs={12}>
            <Grid item xs={12}>
              <ListItem key={"Dashboard"} selected={true} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardOutlinedIcon style={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.7em"}>Dashboard</Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem key={"Messages"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MessageOutlinedIcon style={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.7em"}>Messages</Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem key={"Loanboard"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PieChartOutlinedIcon style={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.7em"}>LoanBoard</Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem key={"Settings"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsOutlinedIcon style={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.7em"}>Settings</Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </Drawer>
      <main
        style={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          backgroundColor: "#e7efff",
          padding: "1em 2em",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
