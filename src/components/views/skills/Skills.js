import React from 'react';
import styled from 'styled-components';

import SlideShow from './SlideShow';
import Icons from './Icons';

const Container = styled.section`
  height: 100vh;
  width: 100%;
  
  border-bottom: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
    
    flex: 0 0 33%;
    color: var(--color-grey);

    font-size: 3rem;
  }
`;

export default function Skills() {
  return (
    <Container>
      <h1 className="ignore-rhythm">My skills</h1>
      <SlideShow>
        <Icons set={1} />
        <Icons set={2} />
        <Icons set={1} />
      </SlideShow>
    </Container>
  )
}
