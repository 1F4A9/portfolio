import React from 'react';
import styled from 'styled-components';

import SectionHeader from '../../shared/SectionHeader';
import SlideShow from './SlideShow';
import Icons from './Icons';

const Container = styled.section`
  width: 100%;

  margin-top: 10vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function Skills() {
  return (
    <Container>
      <SectionHeader options={{ title: 'skills', border: true }}>
      </SectionHeader>
      <SlideShow>
        <Icons />
        <Icons />
        <Icons />
      </SlideShow>
    </Container>
  )
}
