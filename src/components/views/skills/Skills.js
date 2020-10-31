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

export default function Skills() {
  return (
    <Container>
      <h1>Skills section!</h1>
    </Container>
  )
}
