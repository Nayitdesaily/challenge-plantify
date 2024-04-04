import { theme } from "@/utility";
import styled from "styled-components";

export const ButtonSyled = styled.button<{disabled?: boolean}>`
    color: #ffffff;
    font-size: 0.9rem;
    padding: 0.4rem 0.6rem;
    border: none;
    border-radius: 3px;
    background-color: ${ props => props.disabled ? "#cccccc" :  theme.gray.dark};
    font-family: "Lato";

`;

export const ButttonStyledSelected = styled(ButtonSyled)<{ selected?: boolean, backgroundColor?: string }>`
    background-color: ${(props) => (props.selected ? theme.gray.dark : (props.backgroundColor  ? props.backgroundColor : theme.gray.semiDark))};
`;

