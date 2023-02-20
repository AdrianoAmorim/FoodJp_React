import { createGlobalStyle } from "styled-components";
import Inter from "./assets/font/Inter-Medium.ttf"
import InterRegular from "./assets/font/Inter-Regular.ttf"
import Montserrat from "./assets/font/Montserrat-Medium.ttf"
import MontserratBold from "./assets/font/Montserrat-Bold.ttf"
import MontserratSemi from "./assets/font/Montserrat-SemiBold.ttf"

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    @font-face {
        font-family: Inter ;
        src: url(${Inter});
    }
    @font-face {
        font-family:"Inter Regular";
        src: url(${InterRegular});
    }
    @font-face {
        font-family: Montserrat ;
        src: url(${Montserrat});
    }
    @font-face {
        font-family: "Montserrat Bold" ;
        src: url(${MontserratBold});
    }
    @font-face {
        font-family: "Montserrat Semi" ;
        src: url(${MontserratSemi});
    }

    :root{
        --bgButton: #DA2535;
        --bgCard: #f3f3f3;
        --textFooter: #616161;
        --title:#292929;
        --bgPage: #fbfbfb;
    }
`;