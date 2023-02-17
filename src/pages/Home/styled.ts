import styled from "styled-components";
type SectionProps = {
    direction?: string
}
type BoxCardProps ={
    flex?:number,
    width?:string,
    align?:string
}
type BoxFlexRowProps= {
    justify?:string
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

    & #pratosPopulares,#comentarios{
        h2{
            font-size: 3.0rem;
            color: var(--title);
            font-family: Montserrat;
            margin-bottom: 140px;
        }
       
    }
    & #comentarios{
        h2{
            margin-bottom:40px;
            text-align: start;
            width: 100%;
        }
        p{
            font-size: 1.6rem;
            text-align: start;
            line-height: 38px;
        }
    }
    
`;
export const boxFlexRow = styled.div <BoxFlexRowProps>`
            display: flex;
            flex-direction: row;
            justify-content: ${props => props.justify ? props.justify : "space-between"} ;
            width: 100%;

            & #starComentarios{
                margin-right: 6px;
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

export const boxCard = styled.div<BoxCardProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align ? props.align: "center"};
    justify-content: space-between;
    background-color: var(--bgCard);
    padding: 30px;
    border-radius: 30px;
    max-width: ${props => props.width ? props.width: "380px"};
    flex: ${props => props.flex ? props.flex: 1};
    
    & img{
        width:100%;
        max-width: 280px;
        margin-top: -130px;
    }
    & .boxAvatarComentarios img{
        margin-top: 0;
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
    & #starComentarios{
        width: 100%;
        max-width:20px;
         margin-top: 0;
    }

`;
