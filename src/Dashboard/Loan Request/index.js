import React from "react";
import { Grid, Paper, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255,255,255,0.6)",
    height: "3em",
    borderRadius: "10px",
  },
});
const Request = () => {
  return (
    <Grid item container xs={12}>
      <Paper
        style={{ width: "100%", minHeight: "70vh", padding: "1em" }}
        elevation={1}
      >
        <Grid item xs={12}>
          <Typography fontSize={"24px"} fontWeight={700}>
            Loan Request
          </Typography>
        </Grid>

        <div>
          <Grid container item xs={12} sx={{ height: "2.6em" }}>
            <p style={{ fontWeight: 400, fontSize: "14px" }}>
              Loan Description
            </p>
          </Grid>

          <CssTextField
            // margin="normal"
            required
            fullWidth
            // label="Email Id"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </div>
        <div>
          <Grid container item xs={12} sx={{ height: "2.6em" }}>
            <p style={{ fontWeight: 400, fontSize: "14px" }}>Amount</p>
          </Grid>

          <CssTextField
            // margin="normal"
            required
            fullWidth
            // label="Email Id"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </div>
        <div>
          <Grid container item xs={12} sx={{ height: "2.6em" }}>
            <p style={{ fontWeight: 400, fontSize: "14px" }}>Payback Date</p>
          </Grid>

          <CssTextField
            // margin="normal"
            required
            fullWidth
            type="date"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </div>
        <div>
          <Grid container item xs={12} sx={{ height: "2.6em" }}>
            <p style={{ fontWeight: 400, fontSize: "14px" }}>Collateral</p>
          </Grid>

          <CssTextField
            // margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </div>
        <div>
          <Grid container item xs={12} sx={{ height: "2.6em" }}>
            <p style={{ fontWeight: 400, fontSize: "14px" }}>
              Collateral Images
            </p>
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};

export default Request;
