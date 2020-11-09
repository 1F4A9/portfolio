import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 0 0 60%;
  width: 70%;
  height: 80%;

  @media (min-width: 881px) {
    display: none;
  }

  @media (max-width: 880px) {
    display: block;
  }
`;

const OuterFrame = styled.div`
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius-xl);

  padding-left: 1px;
  padding-right: 1px;
  padding-top: var(--padding-xs);
  padding-bottom: var(--padding-xs);

  position: relative;
  background-color: black;

  ::before {
    content: '';
    position: absolute;
    top: 17%;
    right: -3px;
    width: 3px;
    height: 100px;
    background-color: var(--black);
  }

  ::after {
    content: '';
    position: absolute;
    top: 37%;
    right: -3px;
    width: 3px;
    height: 50px;
    background-color: var(--black);
  }
`;

const InnerFrame = styled.div`
  border: 1px solid var(--black);
  border-radius: var(--border-radius-xl);
  width: 100%;
  height: 100%;

  z-index: 1;
  background-color: var(--black);

  ::after {
    content: '';
    position: absolute;
    top: 1.25rem;
    left: 50%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: black;
    transform: translateX(-50%);
    z-index: 2;
  }
`;

export default function Mobile() {
  return (
    <Container>
      <OuterFrame>
        <InnerFrame>

        </InnerFrame>
      </OuterFrame>
    </Container>
  )
}
