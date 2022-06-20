import React from "react";
import { Grid, Typography, Button } from "@mui/material";
const LoginNav = () => {
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
        <Typography variant="h4" sx={{ cursor: "pointer" }} color="white">
          LOGO
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginNav;
