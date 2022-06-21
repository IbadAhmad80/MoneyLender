import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Cards from "./Cards";
import { styled } from "@mui/material/styles";
const CssButton = styled(Button)({
  backgroundColor: "#4267b2",
  color: "white",
  borderRadius: "5px",
});

const Request = () => {
  return (
    <Grid item container xs={12} padding={"2em"}>
      <Grid
        container
        item
        xs={12}
        justifyContent={"space-evenly"}
        sx={{ height: "3em" }}
      >
        <Typography xs={6} fontSize={"40px"} fontWeight={400}>
          Loan Board
        </Typography>
        <Grid container item justifyContent="flex-end" xs={6}>
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
              Request a Loan
            </p>
          </CssButton>
        </Grid>{" "}
      </Grid>

      <Grid container item xs={12} style={{ padding: "2.5em" }}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Grid>
    </Grid>
  );
};

export default Request;
