import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  height: 100vh;
  width: 100%;
  
  border-bottom: 1px solid var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Intro() {
  return (
    <Container>
      <h1>Intro section!</h1>
    </Container>
  )
}