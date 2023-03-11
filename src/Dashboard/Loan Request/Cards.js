import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
const CssButton = styled(Button)({
  backgroundColor: "#4267b2",
  color: "white",
  borderRadius: "5px",
});

const Cards = () => {
  return (
    <Grid
      item
      xs={11}
      alignItems="center"
      justifyContent={"center"}
      style={{
        marginBottom: "1em",
        backgroundColor: "white",
        border: "1px solid rgba(66, 103, 178,0.3)",
        boxShadow: "0px 1px 6px 0px #7C9AEA",
        borderRadius: "6px",
        padding: "1em",
      }}
      container
    >
      <Grid item xs={7} justifyContent={"flex-start"}>
        <Typography fontSize={"24px"}>Loan Request Granted</Typography>
        <Grid container item>
          <Grid
            item
            justifyContent={"flex-start"}
            style={{ marginRight: "1em" }}
          >
            <Typography fontSize={"15px"}>
              Payback Date: 35th June 2018
            </Typography>
          </Grid>
          <Grid item justifyContent={"flex-start"}>
            <Typography fontSize={"15px"}>
              Collateral: Room/House Rent on Airbnb
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid> */}
      <Typography fontSize={"30px"}>$500</Typography>
      <Grid xs={2} container item justifyContent={"flex-end"}>
        <CssButton
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {}}
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "white",
            fontSize: "1em",
            textTransform: "none",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              margin: "0",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Grant a loan
          </p>
        </CssButton>
      </Grid>
    </Grid>
  );
};

export default Cards;
