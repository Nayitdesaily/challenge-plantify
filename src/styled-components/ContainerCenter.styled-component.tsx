import styled from "styled-components";

export const ContainerCenter = styled.div<{ column?: boolean, alignCenter?: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: ${(props) => props.column && "column"};
    align-items: ${(props) => props.alignCenter && "center"};
`;
