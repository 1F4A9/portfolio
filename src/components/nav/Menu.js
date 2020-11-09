import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

const Container = styled.div`
  height: 100vh;
  width: ${props => props.isMenuActive ? '30vw' : '0vw'};

  transition: 0.3s;

  position: fixed;
  right: 0;
  top: 0;

  background-color: #86bfcf;
  z-index: 5;

  display: flex;
  flex-direction: column;
`;

export default function Menu({ isMenuActive }) {
  return (
    <Container isMenuActive={isMenuActive} >
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </Container>
  )
}
