import styled from "styled-components";

export const Container = styled.div<{ column?: boolean, alignCenter?: boolean, flexWrap?: boolean, justifyContent?: string, gap?: string }>`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : "center"};
    flex-direction: ${(props) => props.column && "column"};
    flex-wrap: ${(props) => props.flexWrap && "wrap"};
    align-items: ${(props) => props.alignCenter && "center"};
    gap: ${(props) => props.gap ? props.gap : 0 }
`;
