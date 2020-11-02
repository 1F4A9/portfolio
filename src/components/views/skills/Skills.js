import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const Container = styled.section`
  height: 100vh;
  width: 100%;
  
  border-bottom: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
    
    flex: 0 0 33%;
    color: var(--color-grey);

    font-size: 3rem;
  }
`;

export default function Skills({ image }) {
  return (
    <Container>
      <h1 className="ignore-rhythm">My skills</h1>
      <Wrapper image={image} />
    </Container>
  )
}
