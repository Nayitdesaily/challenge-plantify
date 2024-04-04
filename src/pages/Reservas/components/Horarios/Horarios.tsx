import { theme, trasnformDate } from "../../../../utility";
import { Slots } from "../../../../data/slots";
import { useContext } from "react";
import { ContextReserva } from "../../../../context/ContextReserva";
import { Box, ButttonStyledSelected, Title } from "@/styled-components";

export default function Horarios() {
    const { timeSelected, setTimeSelected, setDateSelected } = useContext(ContextReserva);

    const handleClick = (time: string, date: string) => {
        setTimeSelected(time);
        setDateSelected(date);
    };

    return (
        <Box>
            <Title as={"h4"} style={{padding: '.25rem 0'}}>Próximos turnos disponibles</Title>
            {Slots.map((slot, index: number) => (
                <div key={index}>
                    <Title as={"h4"} style={{padding: '.75rem 0'}}>{trasnformDate(slot.date).gregoriano}</Title>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        {slot.availableTimeslots.map((time: string, index: number) => (
                            <ButttonStyledSelected
                                selected={timeSelected === time}
                                backgroundColor={theme.gray.semiLight}
                                style={{width: '10rem', height: '2.5rem', fontSize: '1rem'}}
                                key={index}
                                onClick={() => handleClick(time, slot.date)}
                            >
                                {time}
                            </ButttonStyledSelected>
                        ))}
                    </div>
                </div>
            ))}
        </Box>
    );
}
