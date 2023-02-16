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
    font-family: "Montserrat Bold";
    font-size: 2.5rem;
    font-weight: bold;
    color: var(${props=> props.color});
`;