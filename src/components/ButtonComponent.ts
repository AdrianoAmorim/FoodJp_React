import styled from "styled-components";

type ButtonProps = {
    bg?: string,
    border?: number,
    colorText?: string,
    width?:number,
    height?:number
}

export const Button = styled.a<ButtonProps>`
    padding: ${props=> props.height ? `${props.height}px`: "7px" } ${props=> props.width ? `${props.width}px`: "54px" };
    border-radius: 8px;
    border: ${props => (props.border == 0) ? `${props.border}px solid var(--title)` : "2px solid var(--title)"};
    text-decoration: none;
    color: ${props => props.colorText ? props.colorText : "var(--title)"};
    cursor: pointer;
    font-family: Inter;
    font-size: 1.5rem;
    background-color: ${props => props.bg ? props.bg : "transparent"} ;
    transition: all .2s ease-in-out;

    &:hover{
        background-color:#bf1826;
        color: #fff;
    }

`;