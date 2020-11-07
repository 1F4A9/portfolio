import React from 'react';
import styled from 'styled-components';

import About from './About';
import Mail from './Mail';

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
