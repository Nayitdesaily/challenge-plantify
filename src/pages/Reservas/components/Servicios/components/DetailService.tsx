import { useContext } from "react";
import { ContextReserva } from "../../../../../context/ContextReserva";
import { Box, ButttonStyledSelected, Title } from "@/styled-components";

interface Props {
    service: any;
    handleClick: (id: number) => void;
    serviceSelected?: number;
}
export default function DetailService({ handleClick, service }: Props) {
    const { serviceSelected } = useContext(ContextReserva);

    return (
        <Box>
            <Title as={"h3"} fontSize=".75rem">
                {service.name}
            </Title>
            <Title as={"p"} fontSize=".75rem">
                {service.description}
            </Title>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <ButttonStyledSelected
                    onClick={() => handleClick(service)}
                    selected={serviceSelected !== null && serviceSelected.id === service.id}
                >
                    {serviceSelected?.id === service.id ? "Seleccionado" : "Seleccionar"}
                </ButttonStyledSelected>
            </div>
        </Box>
    );
}
