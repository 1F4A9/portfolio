import React from 'react';
import styled from 'styled-components';

import StyledImage from './Image';
import { removeFilePathSuffix, capitalizer, replaceDashWithSpace } from '../../../utils/stringManipulation';

const Container = styled.div`
  display: flex;
  flex: 1 1 33%;

  max-width: 400px;
  height: 300px;
  margin: var(--margin-lg);

  @media (max-width: 820px) {
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    margin: var(--margin-lg) 0;
  }

  box-shadow: 0 8px 20px rgba(0,0,0,3.5);
`;

const Main = styled.a`
  height: 100%;
  width: 100%;

  position: relative;

  transition: all 0.3s;

  :hover {
    cursor: pointer;
    background-color: rgba(22, 173, 227, 0);
    box-shadow: 0 8px 25px rgba(0,0,0,3.5);

    span {
      top: 50%;
      color: var(--color-outer-space);
    }
  }
`;

const Title = styled.span`
  color: var(--color-outer-space);

  position: absolute;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.7rem;
  z-index: 1;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: all 0.3s;
`;

export default function Card({ childImageSharp }) {
  let { fluid } = childImageSharp;
  let { originalName } = fluid;
  let title = capitalizer(replaceDashWithSpace(removeFilePathSuffix(originalName)));

  return (
    <Container>
      <Main href={`https://github.com/hipp0campus/${removeFilePathSuffix(originalName)}`} target="blank" >
        <Title>{title}</Title>
        <StyledImage fluid={fluid} />
      </Main>
    </Container>
  )
}