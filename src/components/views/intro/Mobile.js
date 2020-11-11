import React from 'react';
import styled from 'styled-components';
import Typewriter from './Typewriter';

const Container = styled.div`
  flex: 1;
  width: 100%;
  align-self: stretch;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 881px) {
    display: none;
  } 

  @media (max-width: 880px) {
    display: flex;
  } 
`;

const StyledPlaceholder = styled.div`
  flex: 0 1 50%;
`;

const StyledMobileDevice = styled.div`
  min-height: calc(40vw * 2.15);
  display: block;

  @media (max-width: 450px) {
    min-height: 90%;
    flex: 1;
  }
`;

const SyledOuterFrame = styled.div`
  flex: 1;
  width: calc(45vw);
  height: 100%;
  margin: 0 auto;

  border-radius: var(--border-radius-xl);

  padding-left: 1px;
  padding-right: 1px;
  padding-top: calc(var(--padding-xs) / 2);
  padding-bottom: calc(var(--padding-xs) / 2);

  background: rgb(9,9,9); 
  background: linear-gradient(to top, rgba(9,9,9,1) 0%, rgba(44,43,45,1) 98%, rgba(51,50,52,1) 99%, rgba(69,68,71,1) 100%);
  position: relative;

  box-shadow: 1px 1px 31px 0px rgba(0,0,0,0.34);

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const StyledInnerFrame = styled.div`
  border: 1px solid var(--black);
  border-radius: var(--border-radius-xl);
  width: 100%;
  height: 100%;

  padding-top: 2rem;

  overflow: hidden;

  z-index: 1;
  background-color: #090909;

  // camera
  ::after {
    content: '';
    position: absolute;
    top: 1.25rem;
    left: 50%;
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: 50%;
    opacity: 0.2;
    background-color: var(--color-grey);
  }

  ::before {
    content: '';
    position: absolute;
    top: 1.25rem;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 150px;
    background: #4d4c4d;
    box-shadow: inset 2px 2px 4px #373637, 
                inset -2px -2px 4px #636263;
  }
`;

export default function Mobile() {
  return (
    <Container>
      <StyledPlaceholder />
      <StyledMobileDevice>
        <SyledOuterFrame>
          <StyledInnerFrame>
            <Typewriter />
          </StyledInnerFrame>
        </SyledOuterFrame>
      </StyledMobileDevice>
      <StyledPlaceholder />
    </Container>
  )
}
