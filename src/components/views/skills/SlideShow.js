import React from 'react';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-200%);
  }
`;

const Container = styled.div`
  width: calc(87% + (var(--margin-base) * 5));

  padding-top: calc(var(--padding-sm) + var(--padding-lg));
  padding-bottom: calc(var(--padding-sm) + var(--padding-lg));

  position: relative;
  overflow-x: hidden;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  align-self: center;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4rem;
    opacity: 0.6;
    background-color: white;
    z-index: 1;

    opacity: 1;
    background: rgb(24,24,24);
    background: linear-gradient(90deg, rgba(24,24,24,1) 0%, rgba(24,24,24,1) 15%, rgba(24,24,24,0.7539390756302521) 30%, rgba(24,24,24,0.47942927170868344) 45%, rgba(24,24,24,0.39539565826330536) 58%, rgba(24,24,24,0.23853291316526615) 68%, rgba(24,24,24,0.08727240896358546) 79%, rgba(24,24,24,0) 92%);
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 4rem;
    opacity: 0.6;
    background-color: white;
    z-index: 1;

    opacity: 1;
    background: rgb(24,24,24);
    background: linear-gradient(270deg, rgba(24,24,24,1) 0%, rgba(24,24,24,1) 15%, rgba(24,24,24,0.7539390756302521) 30%, rgba(24,24,24,0.47942927170868344) 45%, rgba(24,24,24,0.39539565826330536) 58%, rgba(24,24,24,0.23853291316526615) 68%, rgba(24,24,24,0.08727240896358546) 79%, rgba(24,24,24,0) 92%);

  }

  div {
    flex: 0 0 100%;
    
    animation: ${slide} 85s linear infinite;
  }
`;

export default function SlideShow({ children }) {
  return (
    <Container className="slideshow">
      {children}
    </Container>
  )
}
