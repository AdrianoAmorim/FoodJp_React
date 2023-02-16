import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 100%;
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    & li:nth-child(2){
        margin: 0 4.3rem;
    }
    & li:nth-child(1){
        margin-left: 6rem;
    }
`;
export const Li = styled.li`
    list-style: none;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: Inter;
    a{
        text-decoration: none;
        color: var(--title);
        &:visited{
            color:var(--title);
        }
    }
`;