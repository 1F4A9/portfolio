import React from 'react';
import styled from 'styled-components';

import Laptop from './Laptop';

const Container = styled.header`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Intro() {
  return (
    <Container>
      <Laptop />
    </Container>
  )
}
