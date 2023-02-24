
import * as C from "./styled"
import { Logo } from "../LogoComponent"
import { Menu } from "./menuComponent"
import { Button } from "../ButtonComponent"
import { useEffect, useState } from "react"

export const HeaderComponent = () => {
  const [show, setShow] = useState("");

  const showMenuMob = () => {
    if (show === "show") {
      setShow("");
    } else {
      setShow("show");
    }
  }




  return (
    <C.Header>
      <Logo></Logo>
      <Menu showMenu={show} />
      <div id="boxBtnMobile" onClick={showMenuMob}>
        <C.BtnMobile width="1.4rem" />

        <C.BtnMobile />
        <C.BtnMobile width="1.4rem" />
        <C.BtnMobile />
      </div>
      <Button id="btnDesktop" >Entrar</Button>
    </C.Header>
  )
}