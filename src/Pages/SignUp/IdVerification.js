import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Button,
  Fab,
  Paper,
  Box,
  FormControlLabel,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddIcon from "@mui/icons-material/Add";

import MenuItem from "@mui/material/MenuItem";

const countries = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "AndorrA",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic of the",
  "Cook Islands",
  "Costa Rica",
  "Cote D'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and Mcdonald Islands",
  "Holy See (Vatican City State)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran, Islamic Republic Of",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People'S Republic of",
  "Korea, Republic of",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People'S Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia, The Former Yugoslav Republic of",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory, Occupied",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "RWANDA",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan, Province of China",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

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

function IdVerification({ data, setData }) {
  const small = useMediaQuery("(max-width:756px)");

  return (
    <>
      <Grid item container justifyContent={"center"} alignItems="center">
        <Paper
          className="fade-in-slow"
          sx={{
            marginTop: "1em",
            display: "flex",
            flexDirection: "column",
            padding: "1.5em 2em",
            borderRadius: "1em",
            width: small ? "100vw" : "25vw",
          }}
          elevation={small ? 0 : 6}
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
              Identity verification
            </p>
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
          >
            <FormControl sx={{ width: "100%" }}>
              <FormLabel>Choose your identity type</FormLabel>
              <Paper
                className="fade-in-slow"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                elevation={1}
                style={{
                  width: "100%",
                  backgroundColor: "rgb(250, 250, 250, 0.3)",
                  backdropFilter: "blur(2px)",
                  alignItems: "center",
                }}
              >
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="ID Card"
                    control={<Radio />}
                    label="ID Card"
                  />
                  <FormControlLabel
                    value="Passport"
                    control={<Radio />}
                    label="Passport"
                  />
                </RadioGroup>
              </Paper>
            </FormControl>
            <p style={{ fontWeight: "500" }}>Passport</p>
            <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
              />
              <Fab
                size="small"
                sx={{
                  width: "100%",
                  borderRadius: "2px",
                  height: "6em",
                  backgroundColor: "rgb(250, 250, 250, 0.5)",
                  backdropFilter: "blur(2px)",
                }}
                component="span"
                aria-label="add"
                variant="extended"
              >
                <Grid item xs={12} container>
                  <Grid item xs={12} container justifyContent={"center"}>
                    <AddIcon />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    justifyContent={"center"}
                    sx={{ textTransform: "none", fontSize: "1.5em" }}
                  >
                    Upload
                  </Grid>
                </Grid>
              </Fab>
              <br />
            </label>
            <p style={{ fontWeight: "500" }}>Issuing Country</p>
            <CssTextField
              select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              placeholder="Country"
              sx={{
                width: "100%",
                borderRadius: "2px",
                backgroundColor: "rgb(250, 250, 250, 0.5)",
                backdropFilter: "blur(2px)",
              }}
            >
              {countries.map((value, index) => {
                return <MenuItem value={value}>{value}</MenuItem>;
              })}
            </CssTextField>
            <p style={{ fontWeight: "500" }}>Passport Number</p>
            <CssTextField
              required
              fullWidth
              placeholder="Number"
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <p style={{ fontWeight: "500" }}>Expiry Date</p>
            <CssTextField
              required
              fullWidth
              name="date"
              placeholder="Date"
              type="date"
              id="password"
              autoComplete="current-password"
            />
            <Grid container spacing={2} item xs={12}>
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
                    textTransform: "none",
                    fontSize: "1em",
                    borderRadius: "5px",
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
                    Register
                  </p>
                </CssButton>
              </Grid>{" "}
            </Grid>{" "}
          </Box>
          <Grid container>
            <Grid item>
              Already a member?{" "}
              <Link
                to="/login"
                variant="body2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textDecoration: "none",
                  color: "#3F51B5",
                  fontWeight: 700,
                }}
              >
                {"Login Now"}
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default IdVerification;
