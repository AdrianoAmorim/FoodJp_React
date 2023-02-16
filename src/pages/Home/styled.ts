import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: var(--bgPage);
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

`;

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
export const BoxTextCardapio = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex: 1;
    flex-direction: column;
    max-width: 505px;
    p{
        font-family: "Inter Regular";
        font-size: 1.5rem;
        color: var(--title);
        margin: 28px 0 50px 0;
        line-height: 35px;
    }
    h2{
        font-family: Montserrat;
        color: var(--title);
        font-size: 2.8rem;
    }
`;
export const BoxImgCardapio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    max-width: 25rem;
    img{
        width: 100%;
    }
`;