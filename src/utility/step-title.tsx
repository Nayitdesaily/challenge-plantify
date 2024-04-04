export const stepTitle = (activeStep: number): string => {
    if (activeStep === 1) return "Seleccionar servicio";
    else if (activeStep === 2) return "Seleccionar horario";
    else if (activeStep === 3) return "Confirmar Turno";
    return "";
};
