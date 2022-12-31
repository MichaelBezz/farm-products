import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    margin-left: calc(100vw - 100%);
  }

  html,
  body {
    margin: 0;
  }

  body {
    position: relative;
    height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeightDefault};
    font-weight: ${(props) => props.theme.fontWeightDefault};
    color: ${(props) => props.theme.colorForText};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  header,
  footer {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    white-space: nowrap;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    overflow: hidden;
  }
`;
