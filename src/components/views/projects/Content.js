import React from 'react';
import styled from 'styled-components';

import { removeFilePathSuffix, capitalizer, replaceDashWithSpace } from '../../../utils/stringManipulation';
import getUsedTechIcons from '../../../utils/getUsedTechIcons';

const StyledAnchorTag = styled.a`
  flex: 1;
  position: relative;

  :hover {
    cursor: pointer;

    .project__label {
      top: 50%;
    }

    .project__icon {
      top: 88%;
    }
  }
`;

const StyledLabel = styled.span`
  color: var(--color-outer-space);

  position: absolute;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 1px;

  text-align: center;
  width: 100%;

  font-size: 1.8rem;
  font-size: clamp(1.8rem, 3vw, 3rem);

  z-index: 1;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: all 0.3s;
`;

const StyledIcons = styled.span`
  position: absolute;
  width: 100%;

  z-index: 1;
  top: 160%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--color-outer-space);

  transition: all 0.3s;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  svg {
    height: 15%;
    width: 15%;
  }
`;

export default function Content({ childImageSharp }) {
  let { fluid } = childImageSharp;
  let { originalName } = fluid;
  let icons = getUsedTechIcons(removeFilePathSuffix(originalName));
  let label = capitalizer(replaceDashWithSpace(removeFilePathSuffix(originalName)));

  return (
    <StyledAnchorTag href={`https://github.com/hipp0campus/${removeFilePathSuffix(originalName)}`} target="blank" >
      <StyledLabel className="project__label">{label}</StyledLabel>
      <StyledIcons className="project__icon">
        {icons.map(icon => {
          return icon
        })}
      </StyledIcons>
    </StyledAnchorTag>
  )
}
