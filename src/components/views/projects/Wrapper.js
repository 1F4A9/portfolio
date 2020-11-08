import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Wrapper({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
