
import { ButtonHeader, Header } from "./styled"
import { Logo } from "../LogoComponent"
import { Menu } from "./menuComponent"

export const HeaderComponent = () => {
  return (
    <Header>
      <Logo></Logo>
      <Menu />
      <ButtonHeader>Entrar</ButtonHeader>
    </Header>
  )
}