import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  body {
    margin: 0
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
  }

  a:active,
  a:hover {
    outline-width: 0
  }

  html {
    font: 100%/1.45 'georgia', serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  * {
    box-sizing: inherit;
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--color-text-body);
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
  }

  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
  }


  h1 {
    font-size: 2rem;
    line-height: 1.1;
  }

  h2 {
    font-size: 1.51572rem;
    line-height: 1.1;
  }

  h3 {
    font-size: 1.31951rem;
    line-height: 1.1;
  }

  h4 {
    font-size: 1rem;
    line-height: 1.1;
  }

  h5 {
    font-size: 0.87055rem;
    line-height: 1.1;
  }

  h6 {
    font-size: 0.81225rem;
    line-height: 1.1;
  }

  ul {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }

  ul li {
    padding-left: 0;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  p *:last-child {
    margin-bottom: 0;
  }

  .ignore-rhythm {
    margin-bottom: 0;
  }
`;

export default Typography;
