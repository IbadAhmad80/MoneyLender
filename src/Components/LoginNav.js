import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
const LoginNav = () => {
  const small = useMediaQuery("(max-width:756px)");
  return (
    <Grid
      container
      sx={{ padding: small ? "1em" : "1em 3em" }}
      item
      xs={12}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Grid item xs={6}>
        <Typography
          variant="h4"
          sx={{ cursor: "pointer" }}
          color={small ? "black" : "white"}
        >
          LOGO
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginNav;
