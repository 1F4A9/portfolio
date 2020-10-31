import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Contact() {
  return (
    <Container>
      <h1>Contact section!</h1>
    </Container>
  )
}
