import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
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

  h2 {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: calc(var(--margin-base) / 2);
    margin-left: 0;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
  }

  .content {
    margin: var(--margin-base);
    position: relative;

    ::after {
      ${props => props.border ? `content: ""` : ''};
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: calc(--border-radius-xs / 2);
      background-color: var(--color-blue-sky);
    }
  }
`;

export default function SectionHeader({ children, options }) {
  let { title, border } = options;

  if (!border) border = false;

  return (
    <Container border={border} >
      <div className="content">
        <h2>{title}</h2>
        {children}
      </div>
      <div className="none"></div>
      <div className="none"></div>
    </Container>
  )
}
