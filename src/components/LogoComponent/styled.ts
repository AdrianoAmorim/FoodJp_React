import styled from "styled-components";
type LogoProps ={
    color?:string,
    flex?:number

}
export const BoxLogo = styled.div<LogoProps>`
    display: flex;
    justify-content: start;
    align-items: center;
    flex:${props => props.flex ? props.flex : 1}
`;

export const SpanLogo = styled.span<LogoProps>`
    font-family: "Montserrat Bold";
    font-size: 2.5rem;
    font-weight: bold;
    color: var(${props=> props.color});
`;