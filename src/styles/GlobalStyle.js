import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;

    --bg-off-white: #fafafa;

    --color-text-head: #2E2E2E;
    --color-text-body: #2E2E2E;

    --padding-sm: 0.75rem;
    --padding-base: 1rem;
    --padding-lg: 1.375rem;
    --padding-xl: 1.75rem;
    --padding-xxl: 2.25rem;

    --margin-sm: 0.75rem;
    --margin-base: 1rem;
    --margin-lg: 1.375rem;
    
    --border-radius-xs: 0.25rem;
    --border-radius-sm: 0.375rem;
    --border-radius-base: 0.5rem;
    --border-radius-lg: 1rem;
    --border-radius-xl: 1.75rem;

    --laptop-base-color: #383838;
    --laptop-border-color: #db8759;
  }

  html,
  body {
    height: 100%;
    background-color: var(--bg-off-white);
  }
`;

export default GlobalStyle;
