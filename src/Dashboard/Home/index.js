import React from "react";
import { Grid, Typography } from "@mui/material";
import Cards from "./Cards";
const Home = () => {
  return (
    <Grid item container xs={12}>
      <Grid item xs={12}>
        <Typography fontSize={"20px"} fontWeight={400}>
          Recent Activity
        </Typography>
        <Grid item xs={12} style={{ padding: "2em" }}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
