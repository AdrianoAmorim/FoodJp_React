import styled from "styled-components";
type SectionProps = {
    direction?: string
}
type BoxCardProps = {
    flex?: number,
    width?: string,
    align?: string
}
type BoxFlexRowProps = {
    justify?: string,
    wrap?: string
}
type BoxImgProps = {
    width?: string
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
        transition: color .2s ease-in-out;
        &:hover{
            color:#bf1826;
        }
    }

    & #pratosPopulares,#comentarios,#localizacao{
        h2{
            font-size: 3.0rem;
            color: var(--title);
            font-family: Montserrat;
            margin-bottom: 140px;
        }
       
    }
    & #comentarios,#localizacao{
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
    & #comentarios{
        
        & #starComentarios{
                margin-right: 6px;
            }
    }
    & #localizacao{
        img{
            border-radius: 20px;
           
        }
        #boxInputSearchMap{
            margin-top: 40px;
            img{
            width: 2.2rem;
            margin-right: -50px;
            z-index: 1;
            }
        }
    }

    @media(max-width:1120px){
        #pratosPopulares #boxCardPratosPolulares{
            justify-content: space-evenly;
        }
        #pratosPopulares {
            & h2{
                margin-bottom: 0;
            }
            & #boxCardPratosPolulares div{
                margin-top: 140px;
            }
        }
        #localizacao{
            & #boxInputSearchMap{
                align-items: center;
                padding: 0 1.6rem;
            }
        }
    }
    @media (max-width: 810px){
      #modoPreparo,#pratosPopulares,#comentarios,#localizacao{
            & h2{
            font-size: 2rem;
        }
       } 

       #cardapio{
        justify-content: center;
        & h2{
            font-size: 2.6rem;
        }
        & p{
            font-size: 1.3rem;
        }
        & #imgCardapio{
            display:none;
        }
        & a{
            width: 100%;
            text-align: center;
        }
       }

       #modoPreparo{
        flex-direction: column;
        & div:nth-child(2){
            text-align: center;
            align-items: center;
        }
        & #boxImgPreparo{
            margin-bottom: 3.4rem;
        }
       }

       #pratosPopulares{
        & h2{
            margin-bottom: -3rem;
        }
        div{
            margin-top: 140px;
        }
        & h3{
            font-size: 1.5rem;
        }
        & span{
            font-weight: normal;
        }
       }
       #comentarios {
        & h2{
            text-align: center;
        }
        & #boxCardComentarios{
            flex-direction: column;
            align-items: center;
            & div{
                align-items: center;
                margin-bottom: 25px;
                & p{
                    text-align: center;
                    line-height: 24px;
                }
            }
            & h3{
                font-size: 1.4rem;
                margin-top: 0;
            }
            & p{
                font-size: 1rem;
            }
            & .boxStarComentarios{
                justify-content: center;
            }
        }
       }
       #localizacao{
        h2{
            text-align: center;
            margin-bottom: 28px;
        }
         & #boxInputSearchMap{
            margin-top: 30px;
                & img{
                    width: 2.1rem;
                    margin-right: -42px;
                }
                & input{
                    max-width: 26rem;
                    height: 3.6rem;
                    font-size: 1.4rem;
                       padding-inline-start: 50px;
                }
                & button{
                    font-size: 1.3rem;
                    max-width: 150px;
                }
            }
        }

    }

    @media (max-width: 599px){
        #localizacao{
            & #boxInputSearchMap{
                    & img{
                        width: 1.6rem;
                        margin-right: -38px;
                    }
                   & input{
                       max-width: 20rem;
                       height: 2.8rem;
                       font-size: 1.1rem;
                       padding-inline-start: 50px;
                   }
                   & button{
                       font-size: 1.1rem;
                       max-width: 100px;
                       margin-left: -8px;
                   }
               }
           }
    }
    @media (max-width:395px){
        #cardapio{
            & h2{
                font-size: 2.2rem;
            }
        }
        #localizacao{
            & #boxInputSearchMap{
                font-size: 1rem;
                & button{
                    font-size: 1rem;
                    max-width: 80px;
                    margin-left: 0px;
                }
            }
        }
    }

`;

export const BoxFlexRow = styled.div <BoxFlexRowProps>`

            display: flex;
            flex-direction: row;
            flex-wrap: ${props => props.wrap ? props.wrap : "nowrap"};
            justify-content: ${props => props.justify ? props.justify : "space-between"} ;
            width: 100%;
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
        margin-right: 1.1rem;
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

export const BoxImg = styled.div<BoxImgProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    max-width: ${props => props.width ? props.width : "25rem"};
    img{
        width: 100%;
    }
`;

export const BoxCard = styled.div<BoxCardProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align ? props.align : "center"};
    justify-content: space-between;
    background-color: var(--bgCard);
    padding: 30px;
    border-radius: 30px;
    max-width: ${props => props.width ? props.width : "380px"};
    min-width: 380px;
    flex: ${props => props.flex ? props.flex : 1};
    
    & img{
        width:100%;
        max-width: 280px;
        margin-top: -9rem;
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
  @media (max-width:440px){
    min-width: 230px;
    max-width: 100%;
    padding: 20px;
   
    & img{
        max-width: 230px;
    }
  }
`;

export const InputSearchMap = styled.input`

    width: 100%;
    max-width: 40rem;
    height: 4.3rem;
    border: 1px solid var(--title);
    border-radius: 10px 0 0 10px;
    font-family: Montserrat;
    font-size: 1.6rem;
    color: var(--title);
    outline: none;
    padding-inline-start: 60px;

`;
export const BtnSearchMap = styled.button`
        width: 100%;
        max-width: 180px;
        height: 100%;
        background-color: var(--bgButton);
        color: var(--bgPage);
        border: none;
        font-size: 1.5rem;
        font-family: Montserrat;
        border-radius: 0 10px 10px 0;
        margin-left: -10px;
        cursor: pointer;
        transition: all .2s ease-in-out;
        
        &:hover{
        background-color:#bf1826;
        color: #fff;
    }
`;
