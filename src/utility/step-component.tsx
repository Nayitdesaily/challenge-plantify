export const stepComponent = (activeStep: number, component: JSX.Element[]): JSX.Element | null => {
    if (activeStep === 1) return component[0];
    else if (activeStep === 2) return component[1];
    else if (activeStep === 3) return component[2];
    return null;
};
