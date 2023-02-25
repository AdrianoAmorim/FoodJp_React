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
    width: 100%;
    & li:nth-child(2){
        margin: 0 5.3rem;
    }
    @media (max-width:810px){
        display: none;
        position: absolute;
        flex-direction: column;
        right: 0;
        top: 90px;
        height: auto;
        background-color: #fbfbfbee;
        & li{
            margin-top: 20px !important;
        }
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
        transition: color .2s ease-in;
        &:visited{
            color:var(--title);
        }
        
        &:hover,&:active{
                color: #616150;
        }
    }
`;