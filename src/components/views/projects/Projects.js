import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const Container = styled.section`
  width: 100%;
  min-height: 100%;
  
  border-bottom: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    color: var(--color-grey);
    font-size: 3rem;
  }
`;

export default function Projects() {
  return (
    <Container>
      <h1>My projects</h1>
      <Wrapper />
    </Container>
  )
}
