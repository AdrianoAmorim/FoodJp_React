import styled from "styled-components";
type SpanProps ={
    color:string
}
export const BoxLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpanLogo = styled.span<SpanProps>`
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(${props=> props.color});
`;