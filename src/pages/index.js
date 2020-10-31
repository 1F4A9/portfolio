import React from 'react';
import styled from 'styled-components';

import Intro from '../components/views/intro/Intro';
import Skills from '../components/views/skills/Skills';
import Projects from '../components/views/projects/Projects';
import Contact from '../components/views/contact/Contact';

import Normalize from '../styles/Normalize';
import Typography from '../styles/Typography';
import GlobalStyle from '../styles/GlobalStyle';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export default function Index() {
  return (
    <Container>
      <Normalize />
      <GlobalStyle />
      <Typography />

      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  )
}
