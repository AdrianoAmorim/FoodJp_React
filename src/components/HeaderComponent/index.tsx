
import * as C from "./styled"
import { Logo } from "../LogoComponent"
import { Menu } from "./menuComponent"
import { Button } from "../ButtonComponent"

export const HeaderComponent = () => {
  return (
    <C.Header>
      <Logo></Logo>
      <Menu />
      <Button href="">Entrar</Button>
    </C.Header>
  )
}