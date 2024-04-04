import { useState } from "react";
import { ActionButtons, Horarios, Servicios, Stepper } from "./components";
import { stepComponent, stepTitle } from "../../utility";
import { Confirmacion } from "./components/Confirmacion";
import { ContainerCenter, Title } from "@/styled-components";

export default function Reservas() {
    const [activeStep, setActiveStep] = useState<number>(1);

    return (
        <ContainerCenter column={true}>
            
                <Title as={"h3"} style={{ textAlign: "left" }}>
                    {stepTitle(activeStep)}
                </Title>
                <div style={{ display: "flex", justifyContent: "flex-start", width: "100%", alignItems: "flex-start" }}>
                    <Stepper activeStep={activeStep} />
                </div>
                {stepComponent(activeStep, [<Servicios />, <Horarios />, <Confirmacion />])}
                <ActionButtons activeStep={activeStep} setActiveStep={setActiveStep} />
        </ContainerCenter>
    );
}
