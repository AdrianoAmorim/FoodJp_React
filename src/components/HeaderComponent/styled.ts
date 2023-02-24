import styled from "styled-components";

type BtnMobileProps ={
    width?: string
}
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90px;
    margin-bottom: 90px;
    & #boxBtnMobile{
        transform: rotate(180deg);
        display: none;
    }
    @media (max-width:810px){
        & #boxBtnMobile{
            display: block;
        }
        & #btnDesktop{
            display:none;
        }
    }
`;
export const BtnMobile = styled.div<BtnMobileProps>`
    width: ${props => props.width ? props.width : "1.8rem"};
    border: 1px solid #000;
    margin-top: 4px;
`;
