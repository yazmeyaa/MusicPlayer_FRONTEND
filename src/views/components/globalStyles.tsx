import { createGlobalStyle } from 'styled-components';
import Montserrat from 'assets/fonts/Montserrat-VariableFont_wght.ttf';

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype') ;
    }
`;
