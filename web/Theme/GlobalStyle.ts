import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    :root {
        --red: ${(props) => props.theme.lightColor.red};
        --orange: ${(props) => props.theme.lightColor.orange};
        --yellow: ${(props) => props.theme.lightColor.yellow};
        --green: ${(props) => props.theme.lightColor.green};
        --teal: ${(props) => props.theme.lightColor.teal};
        --blue: ${(props) => props.theme.lightColor.blue};
        --indigo: ${(props) => props.theme.lightColor.indigo};
        --purple: ${(props) => props.theme.lightColor.purple};
        --pink: ${(props) => props.theme.lightColor.pink};
        --cyan: ${(props) => props.theme.lightColor.cyan};
        --primary: ${(props) => props.theme.lightColor.primary};
        --secondary: ${(props) => props.theme.lightColor.secondary};
        --success: ${(props) => props.theme.lightColor.success};
        --info: ${(props) => props.theme.lightColor.info};
        --warning: ${(props) => props.theme.lightColor.warning};
        --danger: ${(props) => props.theme.lightColor.danger};

        /* adaptive gray lightmode */
        --adaptiveGray50: #f9fafb;
        --adaptiveGray100: #f2f4f6;
        --adaptiveGray200: #e5e8eb;
        --adaptiveGray300: #d1d6db;
        --adaptiveGray400: #b0b8c1;
        --adaptiveGray500: #8b95a1;
        --adaptiveGray600: #6b7684;
        --adaptiveGray700: #4e5968;
        --adaptiveGray800: #333d4b;
        --adaptiveGray900: #191f28;
    }

    /* 다크 모드일 때 body에 삽일할 것. */
    .dark-mode {
        --red: ${(props) => props.theme.darkColor.red};
        --orange: ${(props) => props.theme.darkColor.orange};
        --yellow: ${(props) => props.theme.darkColor.yellow};
        --green: ${(props) => props.theme.darkColor.green};
        --teal: ${(props) => props.theme.darkColor.teal};
        --blue: ${(props) => props.theme.darkColor.blue};
        --indigo: ${(props) => props.theme.darkColor.indigo};
        --purple: ${(props) => props.theme.darkColor.purple};
        --pink: ${(props) => props.theme.darkColor.pink};
        --cyan: ${(props) => props.theme.darkColor.cyan};
        --primary: ${(props) => props.theme.darkColor.primary};
        --secondary: ${(props) => props.theme.darkColor.secondary};
        --success: ${(props) => props.theme.darkColor.success};
        --info: ${(props) => props.theme.darkColor.info};
        --warning: ${(props) => props.theme.darkColor.warning};
        --danger: ${(props) => props.theme.darkColor.danger};

        --adaptiveGray50: #202027;
        --adaptiveGray100: #2c2c35;
        --adaptiveGray200: #3c3c47;
        --adaptiveGray300: #4d4d59;
        --adaptiveGray400: #62626d;
        --adaptiveGray500: #7e7e87;
        --adaptiveGray600: #9e9ea4;
        --adaptiveGray700: #c3c3c6;
        --adaptiveGray800: #e4e4e5;
        --adaptiveGray900: #ffffff;
    }

    html,
    body {
        font-family: 'Gothic A1', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
