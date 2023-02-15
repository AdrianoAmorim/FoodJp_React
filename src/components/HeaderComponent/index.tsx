
import { ButtonHeader, Header } from "./styled"
import {Logo} from "../LogoComponent"

export const HeaderComponent = ()=>{
    return(
      <Header>
        <Logo></Logo>
        <ButtonHeader>Entrar</ButtonHeader>
      </Header>
    )
}