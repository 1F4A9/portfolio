import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Header from './Header';

const Container = styled.section`
  width: 100%;
  
  border-bottom: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default function Projects() {
  return (
    <Container>
      <Header />
      <Wrapper />
    </Container>
  )
}
