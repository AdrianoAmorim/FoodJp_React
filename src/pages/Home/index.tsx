import { ContainerLimiter } from "../../components/ContainerLimiter"
import { HeaderComponent } from "../../components/HeaderComponent";
import * as C from "./styled";
import Sushi from "../../assets/img/sushi-japanese.png";
import SeguraPrato from "../../assets/img/imgSegurandoPrato.png";
import Prato1 from "../../assets/img/img-1.png";
import Prato2 from "../../assets/img/img-2.png";
import Prato3 from "../../assets/img/img-2.png";
import profile1 from "../../assets/img/profile1.png";
import profile2 from "../../assets/img/profile2.png";
import star from "../../assets/img/star.svg";
import map from "../../assets/img/map.png"
import pin from "../../assets/img/pin.svg"
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

                    <C.Section id="pratosPopulares" direction="column">
                        <h2>Mais Populares</h2>
                        <C.BoxFlexRow wrap="wrap">
                            <C.BoxCard>
                                <img src={Prato3} />
                                <h3>Ramem de Frango</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                </p>
                                <span>R$ 30</span>
                            </C.BoxCard>
                            <C.BoxCard>
                                <img src={Prato1} />
                                <h3>Ramem de Frango</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                </p>
                                <span>R$ 30</span>
                            </C.BoxCard>
                            <C.BoxCard>
                                <img src={Prato2} />
                                <h3>Ramem de Frango</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                </p>
                                <span>R$ 30</span>
                            </C.BoxCard>
                        </C.BoxFlexRow>
                    </C.Section>

                    <C.Section id="comentarios" direction="column">
                        <h2>Comentários</h2>
                        <C.BoxFlexRow>
                            <C.BoxCard width="49%" align="start" >
                                <div className="boxAvatarComentarios">
                                    <img src={profile1} />
                                </div>
                                <h3>Daniele Almeida</h3>
                                <p>Ótimo serviço! Encatada com a qualidade dos pratos. </p>
                                <C.BoxFlexRow justify="start">
                                    <img id="starComentarios" src={star} />
                                    <img id="starComentarios" src={star} />
                                    <img id="starComentarios" src={star} />
                                    <img id="starComentarios" src={star} />
                                    <img id="starComentarios" src={star} />
                                </C.BoxFlexRow>
                            </C.BoxCard>
                            <C.BoxCard width="49%" align="start">
                                <div className="boxAvatarComentarios">
                                    <img src={profile2} />
                                </div>
                                <h3>Ricardo França</h3>
                                <p>Não é apenas a comida excelente, o serviço torna a experiência especial. </p>
                                <C.BoxFlexRow justify="start">
                                    <img id="starComentarios" src={star} />
                                    <img id="starComentarios" src={star} />
                                    <img id="starComentarios" src={star} />
                                    <img id="starComentarios" src={star} />
                                    <img id="starComentarios" src={star} />
                                </C.BoxFlexRow>
                            </C.BoxCard>
                        </C.BoxFlexRow>
                    </C.Section>

                    <C.Section id="localizacao" direction="column">
                        <h2>Localização</h2>
                        <C.BoxImg width="100%">
                            <img src={map}/>
                        </C.BoxImg>
                        <C.BoxFlexRow justify="center" id="boxInputSearchMap">
                            <img src={pin}/>
                            <C.InputSearchMap>
                            </C.InputSearchMap>
                            <C.BtnSearchMap>Buscar</C.BtnSearchMap>
                        </C.BoxFlexRow>
                        

                    </C.Section>

                </C.Main>
            </ContainerLimiter>
        </C.Container >
    )
}