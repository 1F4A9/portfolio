import React from 'react';
import styled from 'styled-components';

import { removeFilePathSuffix, capitalizer, replaceDashWithSpace } from '../../../utils/stringManipulation';

const Container = styled.a`
  flex: 1;
  position: relative;

  :hover {
    cursor: pointer;

    span {
      top: 50%;
    }
  }
`;

const Title = styled.span`
  color: var(--color-outer-space);

  position: absolute;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 1px;

  text-align: center;
  width: 100%;

  font-size: 1.8rem;
  font-size: clamp(1.8rem, 3vw, 4rem);

  z-index: 1;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: top 0.3s;
`;

export default function Card({ childImageSharp }) {
  let { fluid } = childImageSharp;
  let { originalName } = fluid;
  let title = capitalizer(replaceDashWithSpace(removeFilePathSuffix(originalName)));

  return (
    <Container href={`https://github.com/hipp0campus/${removeFilePathSuffix(originalName)}`} target="blank" >
      <Title>{title}</Title>
    </Container>
  )
}
