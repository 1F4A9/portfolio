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

  @media (max-width: 880px) {
    .slideshow {
      width: calc(80% + (var(--margin-base) * 3));
    }

    .icon-container{
      svg {
        height: 3.7rem;
        width: 3.7rem;
      }
    }
  }

  @media (max-width: 450px) {
    .slideshow {
      width: calc(100% + var(--margin-base));
    }

    .icon-container {
      svg {
        margin: 0 var(--margin-sm);
        height: 3.2rem;
        width: 3.2rem;
      }
    }
  }
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
