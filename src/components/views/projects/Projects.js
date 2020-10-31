import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  width: 100%;
  
  border-bottom: 1px solid var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Projects() {
  return (
    <Container>
      <h1>Project section!</h1>
    </Container>
  )
}
