import React from 'react';
import styled from 'styled-components';

import SlideShow from './SlideShow';
import Icons from './Icons';

const Container = styled.section`
  width: 100%;

  border-top: 1px solid var(--black);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    text-align: center;
    width: 100%;
    padding-top: calc(var(--padding-sm) + var(--padding-lg));
  }

  @media (max-width: 880px) {
    .slideshow {
      width: calc(80% + (var(--margin-base) * 3));
    }

    .icon-container{
      svg {
        height: 3.4rem;
        width: 3.4rem;
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
    <Container id="skills">
      <h2>knowledge of</h2>
      <SlideShow>
        <Icons />
        <Icons />
        <Icons />
      </SlideShow>
    </Container>
  )
}
