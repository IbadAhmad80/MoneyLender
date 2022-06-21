import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import LoginNav from "../../Components/LoginNav";
import login from "../../assets/login.svg";
import SignUpForm from ".";

function Login() {
  const small = useMediaQuery("(max-width:756px)");
  return (
    <div
      style={
        small
          ? {}
          : {
              padding: "1em",
              boxSizing: "border-box",
              backgroundImage: `url(${login})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
      }
    >
      <Grid container>
        <LoginNav />
        <SignUpForm />
      </Grid>
    </div>
  );
}

export default Login;
