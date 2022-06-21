import React from "react";
import { styled } from "@mui/material/styles";
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

function PersonalInformation() {
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

  const WhiteCssButton = styled(Button)({
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px",
  });
  return (
    <>
      {/* <Grid
        item
        container
        justifyContent={"center"}
        alignItems="center"
        style={{ marginBottom: "1vh" }}
      >
        <Paper
          className="fade-in-slow"
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "1em",
            width: "60vw",
          }}
          elevation={6}
          style={{
            backgroundColor: "rgb(250, 250, 250, 0.5)",
            border: "1px solid rgb(250, 250, 250, 0.5)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Grid container item xs={12}>
            <Grid container item xs={6} justifyContent="center">
              <p style={{ fontWeight: "500" }}>Personal Information</p>
            </Grid>
            <Grid container item justifyContent="center" xs={6}>
              <p>ID verification</p>
            </Grid>{" "}
          </Grid>{" "}
        </Paper>
      </Grid> */}
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
              Personal Information
            </p>
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
          >
            <p style={{ fontWeight: "500" }}>Full Name</p>
            <CssTextField
              required
              fullWidth
              placeholder="John Doe"
              id="name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <p style={{ fontWeight: "500" }}>User name</p>
            <CssTextField
              required
              fullWidth
              placeholder="Username"
              id="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <p style={{ fontWeight: "500" }}>Email address</p>
            <CssTextField
              required
              fullWidth
              placeholder="name@placeholder.com"
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <p style={{ fontWeight: "500" }}>Password</p>
            <CssTextField
              required
              fullWidth
              name="password"
              placeholder="Placeholder"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox checked={true} name="Remember Information" />}
              label="Remember Information"
            />
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <WhiteCssButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  backgroundColor="white"
                  onClick={() => {}}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "black",
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
                    Cancel
                  </p>
                </WhiteCssButton>
              </Grid>
              <Grid container item justifyItems="flex-end" xs={6}>
                <CssButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {}}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "white",
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
                    Continue
                  </p>
                </CssButton>
              </Grid>{" "}
            </Grid>{" "}
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default PersonalInformation;
