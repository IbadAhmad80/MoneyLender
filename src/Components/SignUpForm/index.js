import React, { useContext, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PersonalInformation from "./PersonalInformation";
import IdVerification from "./IdVerification";
import Success from "./Success";
import { Grid, Paper } from "@mui/material";

const labels = ["Personal Information", "ID Verification"];
const handleSteps = (step) => {
  switch (step) {
    case 0:
      return <PersonalInformation />;
    case 1:
      return <IdVerification />;
    default:
      throw new Error("Unknown step");
  }
};

const steps = ["Personal Information", "ID verification"];

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          <Grid
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
              <Stepper activeStep={activeStep} alternativeLabel>
                {labels.map((label) => (
                  <Step key={label}>
                    <p style={{ fontWeight: "500", textAlign: "center" }}>
                      {label}
                    </p>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </Grid>
          {handleSteps(activeStep)}
        </>
      )}
    </>
  );
  //   const [activeStep, setActiveStep] = React.useState(0);
  //   const [skipped, setSkipped] = React.useState(new Set());
  //   const isStepOptional = (step) => {
  //     return step === 1;
  //   };
  //   const isStepSkipped = (step) => {
  //     return skipped.has(step);
  //   };
  //   const handleNext = () => {
  //     let newSkipped = skipped;
  //     if (isStepSkipped(activeStep)) {
  //       newSkipped = new Set(newSkipped.values());
  //       newSkipped.delete(activeStep);
  //     }
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped(newSkipped);
  //   };
  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };
  //   const handleSkip = () => {
  //     if (!isStepOptional(activeStep)) {
  //       // You probably want to guard against something like this,
  //       // it should never occur unless someone's actively trying to break something.
  //       throw new Error("You can't skip a step that isn't optional.");
  //     }
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped((prevSkipped) => {
  //       const newSkipped = new Set(prevSkipped.values());
  //       newSkipped.add(activeStep);
  //       return newSkipped;
  //     });
  //   };
  //   const handleReset = () => {
  //     setActiveStep(0);
  //   };
  //   return (
  //     <Box sx={{ width: "100%" }}>
  //       <Stepper activeStep={activeStep}>
  //         {steps.map((label, index) => {
  //           const stepProps = {};
  //           const labelProps = {};
  //           if (isStepOptional(index)) {
  //             labelProps.optional = (
  //               <Typography variant="caption">Optional</Typography>
  //             );
  //           }
  //           if (isStepSkipped(index)) {
  //             stepProps.completed = false;
  //           }
  //           return (
  //             <Step key={label} {...stepProps}>
  //               <StepLabel {...labelProps}>{label}</StepLabel>
  //             </Step>
  //           );
  //         })}
  //       </Stepper>
  //       {activeStep === steps.length ? (
  //         <React.Fragment>
  //           <Typography sx={{ mt: 2, mb: 1 }}>
  //             All steps completed - you&apos;re finished
  //           </Typography>
  //           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
  //             <Box sx={{ flex: "1 1 auto" }} />
  //             <Button onClick={handleReset}>Reset</Button>
  //           </Box>
  //         </React.Fragment>
  //       ) : (
  //         <React.Fragment>
  //           <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
  //           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
  //             <Button
  //               color="inherit"
  //               disabled={activeStep === 0}
  //               onClick={handleBack}
  //               sx={{ mr: 1 }}
  //             >
  //               Back
  //             </Button>
  //             <Box sx={{ flex: "1 1 auto" }} />
  //             {isStepOptional(activeStep) && (
  //               <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
  //                 Skip
  //               </Button>
  //             )}
  //             <Button onClick={handleNext}>
  //               {activeStep === steps.length - 1 ? "Finish" : "Next"}
  //             </Button>
  //           </Box>
  //         </React.Fragment>
  //       )}
  //     </Box>
  //   );
};

export default StepForm;
