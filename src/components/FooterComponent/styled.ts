import styled from "styled-components";


export const FooterContainer = styled.footer`
    display:flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    margin-bottom: 6rem;
   & .boxAreaFooter{
    display: flex;
    flex-direction: column;
    flex: 1;
    & h2{
        font-family: "Montserrat Semi";
        color: var(--title);
        font-size: 1.9rem;
        letter-spacing: 1px;
        width: 100%;
    }
    a{
        text-decoration: none;
        color: var(--textFooter);
        font-size: 1.1rem;
        font-family: "Inter Regular";
        margin-top: 1.3rem;
        transition: all .2s ease-in-out;
        
    }
    a:visited{
        color:  var(--textFooter);
    }
    a:hover{
            color: #bf1826;
    }
   }
 @media (max-width:810px){
    & .boxAreaFooter{
        h2{
            font-size: 1.7rem;
        }
        a{
            font-size: .9rem;
        }
    }
 }
 @media (max-width:720px){
    flex-direction: column;
    & .boxAreaFooter{
       margin-top: 30px;
       h2{
            font-size: 1.9rem;
        }
        a{
            font-size: 1.1rem;
        }
    }
 }
 @media (max-width:599px){
    align-items: center;
    & .boxAreaFooter{
        align-items: center;
        margin-top: 30px;
       h2{
        font-size: 1.7rem;
        }
        a{
        font-size: .9rem;
        }
    }
 }
 
`