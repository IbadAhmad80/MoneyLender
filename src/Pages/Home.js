import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import HomeNav from "../Components/HomeNav";
import home from "../assets/homepage.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Grid container>
      <HomeNav />
      <Grid container item style={{ padding: "3em" }} xs={12}>
        <Grid
          sx={{ padding: "4.65em" }}
          item
          xs={6}
          container
          alignItems="center"
        >
          <Grid container spacing={3} item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h3">
                Be of help to others by lending them some money
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body" fontSize={"1.2em"}>
                Cras ultricies ligula sed magna dictum porta. Cras ultricies
                ligula sed magna dictum porta. Vivamus suscipit tortor eget
                felis porttitor volutpat. Donec sollicitudin molestie malesuada
              </Typography>
            </Grid>
            <Grid item xs={12}>
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
        <Grid item xs={6}>
          <img style={{ height: "80vh" }} src={home} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
