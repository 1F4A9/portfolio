import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  align-self: stretch;

  display: flex;

  .content {
    flex: 1 0 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .no-content {
    height: 100%;
    flex: 0 1 30%;
  }
`;

export default function CenterContent({ children }) {
  return (
    <Container>
      <div className="no-content"></div>
      <div className="content">
        {children}
      </div>
      <div className="no-content"></div>
    </Container>
  )
}
