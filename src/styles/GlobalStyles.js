import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import { FONT_FAMILY } from './fonts';
import { COLORS } from './colors';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: ${FONT_FAMILY.spartan};
        background-color: ${COLORS.dark};
        background-image: url(/assets/images/background-stars.svg);
        background-size:cover;
        color: ${COLORS.white};
    }

`;
