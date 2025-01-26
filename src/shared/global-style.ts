import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'); */

    /*
        Using fontWeight
        - 600 Alternates
        - 500 Alternates
        - 400 Alternates
        - 600 normal
        - 500 normal
        - 400 normal
    */

    html,
    body {
	    height: 100%;
    }

    #root {
        height: 100%;
    }

    a {
        text-decoration: none;
        color: #000000;
    }

    .header & {
        width: 100;
        display: flex;
        height: 60px;
        padding-left: 30px;
        padding-right: 30px;
        font-family: 'Montserrat Alternates';
        justify-content: space-between;
        align-items: center;
        background-color: #ffffff;
        margin-bottom:0px;
        position: relative;
    }
    .header > .logo {
        font-size: 25px;
        font-weight: 600;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-right > nav {
        width: 600px;
        height: 100%
    }
    .nav-right ul {
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    .nav-right ul > li {
        font-size: 18px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .nav-right ul > li > a {
        transition: all 0.3s;
    }

    .nav-right ul > li > a:hover {
        color: #bababa;
    }

    .footer & {
        width: 100;
        display: flex;
        height: 60px;
        padding-left: 30px;
        padding-right: 30px;
        font-family: 'Montserrat Alternates';
        justify-content: space-between;
        align-items: center;
        background-color: #000000;
        margin-top:0px;
        position: relative;
    }

    .footer > .logo {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .copyrights {
        color: #ffffff;
        font-size: 12px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
    }
`;
