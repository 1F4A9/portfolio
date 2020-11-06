import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;

    --bg-off-white: #fafafa;
    --bg-eerie-black: #181818;

    --color-text-head: #2E2E2E;
    --color-text-body: #2E2E2E;

    --color-dark-sky: #86BFCF;
    --color-blue-sky: #16ADE3;
    --color-outer-space: #2E3440;
    --color-grey: #7F8080;
    --color-user-input: #E5E6E6;
    --color-form: #252525;

    --padding-xs: 0.375rem;
    --padding-sm: 0.75rem;
    --padding-base: 1rem;
    --padding-lg: 1.375rem;
    --padding-xl: 1.75rem;
    --padding-xxl: 2.25rem;

    --margin-sm: 0.75rem;
    --margin-base: 1rem;
    --margin-lg: 1.375rem;
    --margin-xxl: 2.75rem;
    
    --border-radius-xs: 0.25rem;
    --border-radius-sm: 0.375rem;
    --border-radius-base: 0.5rem;
    --border-radius-lg: 1rem;
    --border-radius-xl: 1.75rem;

    --laptop-base-color: #262626;
    --laptop-bottom-base-color: #232328;
    --laptop-border-base-color: #db8759;
    --laptop-border-frame-color: #181818;

    --font-size-form: 1.2rem;
  }

  html,
  body {
    height: 100%;
    background-color: var(--bg-eerie-black);
  }
`;

export default GlobalStyle;
