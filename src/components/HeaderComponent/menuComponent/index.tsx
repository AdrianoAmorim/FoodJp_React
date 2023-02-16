import { Li, Nav, Ul } from "./styled"

export const Menu = ()=>{
    return(
        <Nav>
            <Ul>
                <Li><a href="/">Início</a></Li>
                <Li><a href="/">Cardápio</a></Li>
                <Li><a href="/">Sobre</a></Li>
            </Ul>
        </Nav>
    );
}