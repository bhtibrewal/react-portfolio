import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --bg-main: ##f2f5f7;
        --bg-primary: #182635;
        --bg-blurred: #0e141b;

        --fg-main: #15191c;
        --fg-primary: #f2f5f7;

        --color-red: #ff0a78;
        --color-red-100: #fa3879;
        --color-red-200: var(--bg-blurred);

        --home-bg: hsla(200deg, 100%, 85%, 0.1);
        --home-bg-sec: hsla(200deg, 100%, 85%, 0);

        --color-black-100: #081c30;
        --color-black-200: #15191c;
        --color-gray-600: #757f8a;
        --color-gray-700: #7e8c9a;
        --color-gray-800: #9ca8b4;
        --color-gray-900: #d9e0e8;

        --issue-open: #3fb950;
        --issue-completed: #a371f7;

        --shadow: 0 0.1rem 0.1rem hsl(0deg 0% 0% / 0.075);
        --shadow-last: 0 16px 16px hsl(0deg 0% 0% / 0.075);

        // --box-shadow-md: var(--shadow), var(--shadow), var(--shadow), var(--shadow), var(--shadow-last);

        --font-primary: 'Poppins', sans-serif;
        --font-secondary: 'Nunito', sans-serif;
        --cursive: 'Sacramento', cursive;

        --border-rad-sm: 0.7rem;
        --border-rad-md: 1rem;
    }
    :root.dark{
        --bg-main: #27282a;

        --fg-main: #ffffff;
        --shadow: 0 0.1rem 0.1rem hsl(0deg 0% 0% / 0.075);
        --shadow-last: 0 16px 16px hsl(0deg 0% 0% / 0.075);
        --color-red: #ff0a78;
        --color-red-100: #fa3879;
        --color-red-200: #fa38798c;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
        scroll-behavior:smooth;
    }

    
    #__next {
        isolation: isolate;
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        & > .react-reveal {
            margin-top: auto;
        }
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
    }
    
    body {
        font-size: 1.6rem;
        line-height: 1.5;
        background-color: var(--bg-main);
        color: var(--fg-main);
        font-family: var(--font-primary);
        font-weight: 400;
    }

    html {
        scrollbar-width: .5rem;
        scrollbar-color: var(--color-red-200) transparent;
    }


    
    ::-webkit-scrollbar {
        width: 1rem;
        background-color: transparent;

    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        box-shadow: var(--box-shadow-md);
        background-color: var(--color-red-100);

    }
    
    a {
        text-decoration: none;
        color: var(--color-red-100);
        transition: all 0.2s linear;
    }

    a, button {
        font-family: var(--font-secondary);

        &:hover {
            opacity: 0.7;
        }

       
    }

    button, .btn {
        display: inline-block;
        background-color: transparent;
        border: none;
        transition: all 0.2s linear;
    }

    .btn {
        color:var(--fg-primary);
        padding: 0.9rem 1.8rem 1rem;
        text-decoration: none;

        &__primary, &__secondary {
            border-radius: var(--border-rad-md);
        }

        &__primary {
            background-color: var(--color-red-200);
            border: 0.1rem solid transparent;
        }

        &__secondary {
            border: 0.1rem solid var(--color-red-200);
            color: var(--fg-main);

        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        letter-spacing: 0.1rem;
    }

    h2 {
        font-size: 3rem;
    }

    h3 {
        /* font-size: 2.4rem; */
        font-size: 2.1rem;
    }

    h5 {
        font-size: 1.8rem;
    }

    strong {
        font-weight: bold;
    }

    .technologies {
        display: flex;
        align-items: center;
        justify-content: start;
        flex-flow: row wrap;
        gap: 2rem;
        margin-top: 2rem;
    }

    .tech {
        background-color: var( --color-red-100);
        color: var(--fg-primary);
        padding: 1rem;
        border-radius: var(--border-rad-sm);
        font-size: 1.4rem;
        position: relative;
        transform: rotateZ(45deg) scale(1);
        transition: transform 1s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        box-shadow: inset 0 -23px 25px 0 rgb(0 0 0 / 17%)
        , inset 0 -36px 30px 0 rgb(0 0 0 / 15%)
        , inset 0 -79px 40px 0 rgb(0 0 0 / 10%)
        , 0 2px 1px rgb(0 0 0 / 6%), 0 4px 2px rgb(0 0 0 / 9%)
        , 0 8px 4px rgb(0 0 0 / 9%), 0 16px 8px rgb(0 0 0 / 9%)
        , 0 32px 16px rgb(0 0 0 / 9%);
    }
    .tech:hover{
        transform: rotateZ(45deg) scale(1.2);
    }
    .tech svg{
        transform: rotateZ(-45deg); 
        font-size: 2em;
    }
   

    .tech_tooltip{
        background: var(--color-black-100);
        border-radius: 4px;
        position: absolute;
        top: 40px;
    }
    .container {
        padding-right: 2rem;
        padding-left: 2rem;
        width: 100%;
        max-width: 140rem;
        margin-left: auto;
        margin-right: auto;

        @media screen and (min-width: 480px) {
            padding-right: calc(2rem + 3vw);
            padding-left: calc(2rem + 3vw);
        }

        @media screen and (min-width: 769px) {
            padding-right: calc(2.5rem + 5vw);
            padding-left: calc(2.5rem + 5vw);
        }

        @media screen and (min-width: 1201px) {
            padding-right: calc(10rem + 7vw);
            padding-left: calc(10rem + 7vw);
        }
    }
`;

export default GlobalStyle;
