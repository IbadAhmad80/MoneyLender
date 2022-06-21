import React from "react";
import { Grid, Typography } from "@mui/material";
const Cards = () => {
  return (
    <Grid
      item
      xs={11}
      alignItems="center"
      style={{
        marginBottom: "1em",
        backgroundColor: "white",
        border: "1px solid rgba(66, 103, 178,0.3)",
        boxShadow: "0px 1px 6px 0px #7C9AEA",
        borderRadius: "6px",
        padding: "2em",
      }}
      container
    >
      <Grid item xs={1}>
        <Typography fontSize={"20px"}>Jul</Typography>
        <Typography fontSize={"20px"}>02</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography fontSize={"24px"}>Loan Request Granted</Typography>
        <Typography style={{ marginTop: "0.5em" }} fontSize={"16px"}>
          Your request for loan has been granted by @templest345
        </Typography>
      </Grid>
      <Grid item container justifyContent={"center"} xs={6}>
        <div>
          <Typography textAlign={"center"} fontSize={"18px"}>
            Loan Status
          </Typography>
          <Typography
            style={{ marginTop: "1em" }}
            textAlign={"center"}
            fontSize={"15px"}
          >
            Active
          </Typography>
        </div>
      </Grid>
      <Grid item xs={1}>
        <Typography fontSize={"20px"}>$500</Typography>
      </Grid>
    </Grid>
  );
};

export default Cards;
