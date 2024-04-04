import { MobileStepper } from "@mui/material";

export default function Stepper({ activeStep }: { activeStep: number }) {
    return (
        <MobileStepper
            variant="progress"
            steps={4}
            position="static"
            activeStep={activeStep}
            sx={{
                width: "100%",
                padding: 0,
                paddingBottom: '8px',
                "& .MuiLinearProgress-root": {
                    backgroundColor: "#D8DEE3",
                    height: '14px',
                    width: '100%',
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "#1AAE9F",
                    },
                },
            }}
            nextButton={null}
            backButton={null}
        />
    );
}
