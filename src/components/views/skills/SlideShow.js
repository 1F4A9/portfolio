import React from 'react';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {
    transform: translateX(-200%);
  }

  100% {
    transform: translateX(0%);
  }
`;

const Container = styled.div`
  width: 100%;

  overflow-x: hidden;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  @media (min-width: 1440px) {
    max-width: 1440px;
  }

  div {
    flex: 0 0 100%;
    height: 50%;
    
    animation: ${slide} 25s linear infinite;
  }
`;

export default function SlideShow({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
