import React from 'react';
import styled from 'styled-components';

import { removeFilePathSuffix, capitalizer, replaceDashWithSpace } from '../../../utils/stringManipulation';

const Container = styled.a`
  flex: 1;

  position: relative;

  transition: all 0.3s;

  :hover {
    cursor: pointer;

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
    <Container href={`https://github.com/hipp0campus/${removeFilePathSuffix(originalName)}`} target="blank" >
      <Title>{title}</Title>
    </Container>
  )
}