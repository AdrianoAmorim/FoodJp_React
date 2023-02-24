import { Li, Nav, Ul } from "./styled"

type MenuProps = {
    showMenu: string
}


export const Menu = ({ showMenu }: MenuProps) => {
console.log(showMenu)
    return (
        <Nav>
            {
                <Ul className={showMenu + " animationMenuMob"}>
                    <Li><a href="">Início</a></Li>
                    <Li><a href="">Cardápio</a></Li>
                    <Li><a href="">Sobre</a></Li>
                </Ul>
            }
        </Nav>
    );
}