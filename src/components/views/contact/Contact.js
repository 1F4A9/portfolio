import React from 'react';
import styled from 'styled-components';

import About from './about/About';
import Mail from './mail/Mail';

const Container = styled.footer`
  border-top: 1px solid var(--black);

  display: flex;
  flex-direction: row;

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;

    .mail-border {
      border: none;
      border-top: 1px solid var(--black);
      width: 100%;
    }

    .about {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    .about,
    .mail-border {
      padding: var(--padding-lg) 0;
    }

    h2 {
      padding-left: 0;
    }

    .form-group {
      padding: var(--padding-sm) 0;

      label {
        left: var(--padding-xs);
      }
    }

    .no-content {
      display: none;
    }

    // change email header
    .short-text { display: block; }
    .full-text { display: none; }
  }
`;

export default function Contact() {
  return (
    <Container>
      <About />
      <Mail />
    </Container>
  )
}
