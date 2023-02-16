import { ContainerLimiter } from "../../components/ContainerLimiter"
import { HeaderComponent } from "../../components/HeaderComponent";
import * as C from "./styled";
import Sushi from "../../assets/img/sushi-japanese.png";
import SeguraPrato from "../../assets/img/imgSegurandoPrato.png";
import { Button } from "../../components/ButtonComponent";


export const Home = () => {
    return (
        <C.Container>
            <ContainerLimiter>
                <HeaderComponent />
                <C.Main>
                    <C.Section id="cardapio">
                        <C.BoxText>
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
                        </C.BoxText>
                        <C.BoxImg>
                            <img src={Sushi} />
                        </C.BoxImg>
                    </C.Section>

                    <C.Section id="modoPreparo">
                         <C.BoxImg id="boxImgPreparo">
                            <img src={SeguraPrato} />
                        </C.BoxImg>
                        <C.BoxText>
                            <h2>Feita de Forma Tradicional</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Nesciunt aliquam, natus doloremque totam saepe inventore modi,
                            </p>
                            <a href="" id="linkModoPreparo">Ler mais sobre o modo de preparo</a>
                        </C.BoxText>

                    </C.Section>
                </C.Main>
            </ContainerLimiter>
        </C.Container>
    )
}