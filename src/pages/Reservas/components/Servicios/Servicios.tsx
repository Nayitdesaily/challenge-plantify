import { Add, Remove } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useContext, useState } from "react";
import DetailService from "./components/DetailService";
import { Box, Title } from "@/styled-components";
import { ContextReserva } from "@/context";
import { Service } from "@/models";
import { groupBy, theme } from "@/utility";
import { Services } from "@/data";

export default function Servicios() {
    const [expanded, setExpanded] = useState<number | boolean>(false);
    const { setServiceSelected } = useContext(ContextReserva);

    const handleClick = (service: any) => {
        setServiceSelected(service);
    };

    const handleChange = (index: number) => {
        if (expanded === index) {
            setExpanded(false);
        } else setExpanded(index);
    };

    return (
        <Box>
            <Title as={"h3"}>
                Categorias
            </Title>
            {groupBy<Service>(Services).map((service: any, index: number) => (
                <Accordion expanded={expanded === index} onChange={() => handleChange(index)} key={index} style={{marginBottom: ".25rem", boxShadow: 'none'}}>
                    <AccordionSummary
                        expandIcon={expanded === index ? <Remove /> : <Add />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        style={{backgroundColor: theme.gray.light}}
                    >
                        <Title as={"p"} fontSize=".75rem">{service.category}</Title>
                    </AccordionSummary>
                    <AccordionDetails>
                        {service.services.map((s: any, index: number) => (
                            <DetailService
                                handleClick={handleClick}
                                service={s}
                                key={index}
                            />
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
