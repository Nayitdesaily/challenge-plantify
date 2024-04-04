import { theme } from "@/utility";
import styled from "styled-components";

export const Title = styled.h1<{fontSize?: string}>`
    font-size: ${props => props.fontSize ? props.fontSize : "1rem"} ;
    text-align: left;
    color: ${theme.gray.dark};
    font-family: "Lato";
    
`;
