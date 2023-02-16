import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90px;
`;

export const ButtonHeader =styled.a`
    padding: 5px 56px;
    border-radius: 8px;
    border: 2px solid var(--title);
    text-decoration: none;
    color: var(--title);
    cursor: pointer;
    font-family: Inter;
    font-size: 1.6rem;
`;