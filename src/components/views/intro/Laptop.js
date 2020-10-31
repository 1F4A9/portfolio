import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(60vw);
  flex: 1;

  padding: 0 var(--padding-lg);
`;

const Top = styled.div`
  height: 100%;
  width: 100%;

  padding-left: var(--padding-lg);
  padding-right: var(--padding-lg);
`;

const Frame = styled.div`
  height: 100%;
  width: 100%;

  position: relative;

  padding-top: var(--padding-xl);
  padding-left: var(--padding-lg);
  padding-bottom: var(--padding-xxl);
  padding-right: var(--padding-lg);

  border: 1px solid var(--black);
  border-radius: var(--border-radius-lg);

  border-bottom-left-radius: var(--border-radius-sm);
  border-bottom-right-radius: var(--border-radius-sm);

  background-color: var(--black);

  ::after {
    content: 'ASUS ZenBook';
    position: absolute;

    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    color: white;

    top: 100%;
    left: 50%;
    transform: translate(-50%, -125%);
  }
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;

  border: 1px solid var(--black);
`;

const BaseTop = styled.div`
  height: 1.25rem;
  width: 100%;

  border-top: 2px solid var(--laptop-border-color);
  border-left: var(--laptop-base-color);
  border-right: var(--laptop-base-color);

  border-bottom: 10px solid var(--laptop-base-color);

  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;

  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  display: flex;
  flex-direction: row;

  .cover {
    flex: 2;
    background-color: var(--laptop-base-color);
  }

  .center {
    flex: 1;
    background-color: white;
  }
`;

export default function Laptop() {
  return (
    <Container>
      <Top>
        <Frame>
          <Screen />
        </Frame>
      </Top>
      <BaseTop>
        <div className="cover"></div>
        <div className="cover center"></div>
        <div className="cover"></div>
      </BaseTop>
    </Container>
  )
}
