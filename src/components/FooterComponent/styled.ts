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
    }
    a:visited{
        color:  var(--textFooter);
    }
   }
 
 
`