import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: ${props => props.isMenuActive ? '30vw' : '0vw'};

  transition: 0.3s;

  position: fixed;
  right: 0;
  top: 0;

  background-color: #86bfcf;
  z-index: 2;
`;

export default function Menu({ isMenuActive }) {
  return (
    <Container isMenuActive={isMenuActive} >

    </Container>
  )
}
