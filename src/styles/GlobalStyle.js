import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;

    --bg-off-white: #fafafa;

    --color-text-head: #2E2E2E;
    --color-text-body: #2E2E2E;

    --padding-sm: 16px;
    --padding-lg: 22px;

    --margin-sm: 16px;
    --margin-lg: 22px;
    
    --border-radius-sm: 6px;
    --border-radius-base: 8px;
    --border-radius-lg: 28px;
  }

  html,
  body {
    height: 100%;
    background-color: var(--bg-off-white);
  }
`;

export default GlobalStyle;
