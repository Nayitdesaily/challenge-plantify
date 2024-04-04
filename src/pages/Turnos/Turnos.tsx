import { ContextReserva } from "@/context";
import { Box, Title } from "@/styled-components";
import { useContext } from "react";

export default function Turnos() {
    const { shifts } = useContext(ContextReserva);

    return (
        <div>
            <Title>Mis Turnos</Title>

            {shifts.map((shift: any, index: number) => (
                <Box key={index}>
                    <Title>{shift.date} / {shift.time}</Title>
                    <Title>{shift.service?.name}</Title>
                </Box>
            ))}
        </div>
    );
}
