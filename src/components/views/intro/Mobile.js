import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 881px) {
    display: none;
  }

  @media (max-width: 880px) {
    display: block;
  }
`;

const Frame = styled.div`

`;

export default function Mobile() {
  return (
    <Container>

    </Container>
  )
}
