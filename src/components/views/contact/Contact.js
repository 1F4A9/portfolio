import React from 'react';
import styled from 'styled-components';

import About from './About';
import Mail from './Mail';

const Container = styled.footer`
  height: 50vh;
  margin-top: calc(var(--margin-base) * 1.5);
  border-top: 1px solid var(--black);

  display: flex;
  flex-direction: row;
`;

export default function Contact() {
  return (
    <Container>
      <About />
      <Mail />
    </Container>
  )
}
