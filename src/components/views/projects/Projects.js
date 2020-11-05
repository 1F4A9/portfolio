import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import SectionHeader from '../../shared/SectionHeader';

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default function Projects() {
  return (
    <Container>
      <SectionHeader options={{ title: 'projects', border: true }} />
      <Wrapper />
    </Container>
  )
}
