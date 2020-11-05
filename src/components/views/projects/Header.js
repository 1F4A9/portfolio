import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;

  * {
    flex: 0 0 29%;
    margin: var(--margin-base);
  }

  @media (max-width: 880px) {
    * {
      flex: 0 0 40%;
    }

    div:last-child {
      display: none;
    }
  }

  @media (max-width: 450px) {
    * {
      margin: var(--margin-base) 0;
      flex: 0 0 100%;
    }

    div:nth-child(2) {
      display: none;
    }
  }

  h1 {
    margin: 0 0 0.5rem 0;
    color: var(--color-grey);
    font-size: clamp(1.8rem, 4vw, 2.8rem);
  }

  .content {
    margin: var(--margin-base);
    position: relative;

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background-color: var(--color-blue-sky);
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <div className="content">
        <h1>My projects</h1>
      </div>
      <div className="none"></div>
      <div className="none"></div>
    </Container>
  )
}
