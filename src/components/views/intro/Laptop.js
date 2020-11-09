import React from 'react';
import styled from 'styled-components';

import Typewriter from './Typewriter';

const Container = styled.div`
  width: 100%;
  height: calc(60vw);
  flex: 1;

  padding: 0 var(--padding-lg);

  @media (min-width: 1140px) {
    height: 684px;

    max-width: 1080px;
  }

  @media (max-width: 880px) {
    display: none;
  }

  @media (min-width: 881px) {
    display: block;
  }
`;

const Top = styled.div`
  height: 100%;
  width: 100%;

  padding-left: var(--padding-xl);
  padding-right: var(--padding-xl);
`;

const Frame = styled.div`
  height: 100%;
  width: 100%;
  
  box-shadow: 0px -6px 35px 5px rgba(0,0,0,0.48);

  position: relative;

  padding-top: var(--padding-xl);
  padding-left: var(--padding-lg);
  padding-bottom: var(--padding-xxl);
  padding-right: var(--padding-lg);

  border-radius: var(--border-radius-lg);

  border-bottom-left-radius: var(--border-radius-xs);
  border-bottom-right-radius: var(--border-radius-xs);

  background-color: var(--laptop-base-color);
  border: 1px solid var(--laptop-border-frame-color);

  ::before {
    content: '';
    position: absolute;

    height: 10px;
    width: 10px;

    border-radius: 8px;
    background: #4a484a;
    box-shadow: inset 1px 1px 2px #393739, 
                inset -1px -1px 2px #5b595b;

    top: 0.875rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ::after {
    content: 'ASUS ZenBook';
    position: absolute;

    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    color: #f8dad3;

    top: 100%;
    left: 50%;
    transform: translate(-50%, -125%);
  }
`;

const BaseTop = styled.div`
  height: 1.25rem;
  width: 100%;

  border-top: 2px solid var(--laptop-border-base-color);
  border-left: var(--laptop-base-color);
  border-right: var(--laptop-base-color);

  border-bottom: 10px solid var(--laptop-bottom-base-color);

  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;

  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  display: flex;
  flex-direction: row;

  box-shadow: 0px 11px 30px 2px rgba(0,0,0,0.37);

  .cover {
    flex: 2;

    background: var(--laptop-base-color);
    background: linear-gradient(180deg, rgba(56,56,56,1) 15%, rgba(48,48,50,1) 41%, rgba(44,44,47,1) 62%, rgba(38,38,42,1) 80%, rgba(35,35,40,1) 95%);
  }

  .center {
    flex: 1;
    background: #585353;
    background: linear-gradient(90deg, rgba(35,35,40,1) 3%, rgba(49,49,51,1) 7%, rgba(56,56,56,1) 12%, rgba(56,56,56,1) 88%, rgba(49,49,51,1) 93%, rgba(35,35,40,1) 97%);
    z-index: 1;
  }
`;

export default function Laptop() {
  return (
    <Container>
      <Top>
        <Frame>
          <Typewriter />
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
