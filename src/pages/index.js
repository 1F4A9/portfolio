import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Nav from '../components/nav/Nav';
import Intro from '../components/views/intro/Intro';
import Skills from '../components/views/skills/Skills';
import Projects from '../components/views/projects/Projects';
import Contact from '../components/views/contact/Contact';

import Normalize from '../styles/Normalize';
import Typography from '../styles/Typography';
import GlobalStyle from '../styles/GlobalStyle';

const Container = styled.div`
  width: 100%;

  padding: 0 var(--padding-lg);
`;

export default function Index() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
      </Helmet>
      <Normalize />
      <GlobalStyle />
      <Typography />

      <Nav />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </Container>
  )
}
