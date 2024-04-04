import { useContext } from "react";
import { ContextReserva } from "../../../context/ContextReserva";
import { ButtonSyled } from "@/styled-components";
import { Steps } from "@/models/step.model";

interface Props {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function ActionButtons({ activeStep, setActiveStep }: Props) {
    const { timeSelected, setTimeSelected, serviceSelected, setServiceSelected, setShifts, shifts, setDateSelected, dateSelected } =
        useContext(ContextReserva);
    const lastStep = Math.max(...Object.keys(Steps).map(Number));

    const handleNext = () => setActiveStep((step) => step + 1);
    const handleBack = () => {
        if (activeStep > 0) setActiveStep((step) => step - 1);
    };
    
    const confirmShift = () => {
        setActiveStep(1);
        setShifts([...shifts, {service: serviceSelected, date: dateSelected, time: timeSelected}]);
        setTimeSelected("");
        setDateSelected("");
        setServiceSelected(null);
    };

    const handleStep = () => {
        if (activeStep < lastStep) handleNext();
        else confirmShift();
    };

    return (
        <div>
            {activeStep > 1 ? (
                <ButtonSyled onClick={handleBack} style={{ position: "absolute", bottom: 80 }}>
                    Anterior
                </ButtonSyled>
            ) : (
                <span></span>
            )}
            {serviceSelected !== null ? (
                <ButtonSyled
                    style={{ position: "absolute", bottom: 80, right: 20 }}
                    onClick={handleStep}
                    disabled={timeSelected === "" && activeStep === 2}
                >
                    {activeStep === 3 ? "Confirmar" : "Siguiente"}
                </ButtonSyled>
            ) : null}
        </div>
    );
}
