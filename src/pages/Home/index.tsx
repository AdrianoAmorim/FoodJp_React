import { ContainerLimiter } from "../../components/ContainerLimiter"
import { HeaderComponent } from "../../components/HeaderComponent";
import * as C from "./styled";
import Sushi from "../../assets/img/sushi-japanese.png";
import { Button } from "../../components/ButtonComponent";


export const Home = () => {
    return (
        <C.Container>
            <ContainerLimiter>
                <HeaderComponent />
                <C.Main>
                    <C.Section id="cardapio">
                        <C.BoxTextCardapio>
                            <h2>Comida Oriental</h2>
                            <p>A culinária Japonesa é bastante equilibrada,
                                sendo muito rica em peixes (ômega 3), vegetais
                                massas e ingredientes frescos.
                            </p>
                            <Button
                                bg="var(--bgButton)"
                                colorText="#f3f3f3"
                                width={95}
                                height={16}
                                border={0}>
                                Cardápio</Button>
                        </C.BoxTextCardapio>
                        <C.BoxImgCardapio>
                            <img src={Sushi} />
                        </C.BoxImgCardapio>
                    </C.Section>
                </C.Main>
            </ContainerLimiter>
        </C.Container>
    )
}