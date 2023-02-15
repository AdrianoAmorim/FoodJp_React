import { ContainerLimiter } from "../../components/ContainerLimiter"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "./styled"

export const Home = ()=>{
    return(
       <Container>
        <ContainerLimiter>
        <HeaderComponent/>
        
        </ContainerLimiter>
       </Container>
    )
}