import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  html,
  body {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeightDefault};
    font-weight: ${(props) => props.theme.fontWeightDefault};
    color: ${(props) => props.theme.colorForText};
  }
`;
