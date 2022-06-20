import React from "react";
import {
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import LoginNav from "../Components/LoginNav";
import login from "../assets/login.svg";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255,255,255,0.6)",
    height: "3em",
    borderRadius: "10px",
  },
});

const CssButton = styled(Button)({
  backgroundColor: "#4267b2",
  color: "white",
  borderRadius: "5px",
});

function Login() {
  return (
    <div
      style={{
        padding: "1em",
        boxSizing: "border-box",
        height: "100vh",
        backgroundImage: `url(${login})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container>
        <LoginNav />

        <Grid item container justifyContent={"center"} alignItems="center">
          <Paper
            className="fade-in-slow"
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1.5em 2em",
              borderRadius: "1em",
              width: "25vw",
            }}
            elevation={6}
            style={{
              backgroundColor: "rgb(250, 250, 250, 0.2)",
              border: "1px solid rgb(250, 250, 250, 0.5)",
              backdropFilter: "blur(2px)",
            }}
          >
            <Typography component="h1" variant="h5">
              <p
                style={{
                  fontWeight: "500",
                }}
              >
                Sign in
              </p>
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
            >
              <p style={{ fontWeight: "500" }}>Email address</p>
              <CssTextField
                // margin="normal"
                required
                fullWidth
                placeholder="name@placeholder.com"
                // label="Email Id"
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <div style={{ marginTop: "1.5em" }}>
                <Grid container item xs={12}>
                  <Grid item xs={6}>
                    <p style={{ fontWeight: "500" }}>Password</p>
                  </Grid>
                  <Grid container item justifyContent="flex-end" xs={6}>
                    <p>Forgot Password?</p>
                  </Grid>{" "}
                </Grid>{" "}
                <CssTextField
                  required
                  fullWidth
                  name="password"
                  placeholder="Placeholder"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </div>
              <FormControlLabel
                control={
                  <Checkbox checked={true} name="Remember Information" />
                }
                label="Remember Information"
              />
              <Grid container style={{ color: "#3F51B5" }}>
                <CssButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {}}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#081a30",
                    fontSize: "1em",
                    borderRadius: "1em",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Sign In
                  </p>
                </CssButton>
              </Grid>
              <Grid container>
                <Grid item>
                  Not a member?{" "}
                  <Link
                    to="/sign-up"
                    variant="body2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      textDecoration: "none",
                      color: "#3F51B5",
                    }}
                  >
                    {"Sign Up Now"}{" "}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  {
    /* 
background: rgba( 210, 210, 210, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3px );
-webkit-backdrop-filter: blur( 3px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */
  }
}

export default Login;
