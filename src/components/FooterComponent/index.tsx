import { Logo } from "../LogoComponent";
import * as C from "./styled";

export const Footer = () => {
    return (
        <C.FooterContainer>
            <Logo />
            <div className="boxAreaFooter">
                <h2>Contato</h2>
                <a href="">+55 21 9999-9999</a>
                <a href="">mail@gmail.com</a>
            </div>
            <div className="boxAreaFooter">
                <h2>Sobre nós</h2>
                <a href="">Menu</a>
                <a href="">Valores</a>
                <a href="">Página principal</a>
            </div>
            <div className="boxAreaFooter">
                <h2>Serviços</h2>
                <a href="">Entrega</a>
                <a href="">Retirada</a>
            </div>
        </C.FooterContainer>
    )
}