import styled from "styled-components";
type SectionProps = {
    direction?: string
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: var(--bgPage);
    & #modoPreparo #linkModoPreparo{
        font-size: 1.6rem;
        color: var(--bgButton);
        font-family: Inter;
    }

    & #pratosPopulares{
        h2{
            font-size: 3.0rem;
            color: var(--title);
            font-family: Montserrat;
            margin-bottom: 140px;
        }
        #boxFlexRow{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

`;

export const Section = styled.section<SectionProps>`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : "row"};
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 60px;
    & #boxImgPreparo{
        height: 90%;
        max-width: 36rem;
         img{
            height: 100%;
            border-radius: 18px;
        }
    }

`;

export const BoxText = styled.div`
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
        line-height: 38px;
    }
    h2{
        font-family: Montserrat;
        color: var(--title);
        font-size: 2.8rem;
        letter-spacing: 1px;
    }
`;

export const BoxImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    max-width: 25rem;
    img{
        width: 100%;
    }
`;

export const boxCardPratos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bgCard);
    padding: 30px;
    border-radius: 30px;
    max-width: 380px;
   
    & img{
        width:100%;
        max-width: 280px;
        margin-top: -130px;
    }
    & h3{
        margin-top: 40px;
        font-size: 1.8rem;
        font-family: Montserrat;
        color: var(--title);
        letter-spacing: 1px;
    }
    & p{
        font-size: 1.1rem;
        font-family: "Inter Regular";
        color: var(--textFooter);
        text-align: center;
        line-height: 25px;
        margin: 20px 0 25px 0;
    }
    & span{
        font-size: 2.2rem;
        font-family: Montserrat;
        color: var(--title);
        font-weight: bold;
    }

`;
