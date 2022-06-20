import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const HomeNav = () => {
  return (
    <Grid
      container
      sx={{ padding: "1em 3em" }}
      item
      xs={12}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Grid item xs={6}>
        <Typography sx={{ cursor: "pointer" }} variant="h4">
          LOGO
        </Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems={"center"} item xs={5}>
        <Grid item xs={3}>
          <Typography variant="h5">About us</Typography>
        </Grid>
        <Grid item xs={5}>
          <Button
            as={Link}
            to="/login"
            size="large"
            sx={{
              bg: "#4267B2",
              color: "white",
              textTransform: "none",
              fontSize: "1.2em",
              borderRadius: "none",
              textDecoration: "none",
            }}
            variant="contained"
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeNav;
