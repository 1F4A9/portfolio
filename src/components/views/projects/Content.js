import React from 'react';
import styled from 'styled-components';

import { removeFilePathSuffix, capitalizer, replaceDashWithSpace } from '../../../utils/stringManipulation';
import getUsedTechIcons from '../../../utils/getUsedTechIcons';

const StyledAnchorTag = styled.a`
  position: relative;
  overflow: hidden;
  display: flex;
  flex: 1;

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
  position: absolute;
  top: 120%;
  left: 50%;
  z-index: 1;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 70%;
  height: 19%;

  background-color: var(--bg-eerie-black);
  border-radius: var(--border-radius-sm);
  padding: var(--padding-xs);

  font-family: 'Bowlby One SC';
  font-style: italic;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 1.8vw;
  white-space: nowrap;
  color: var(--color-platinum);

  transform: translate(-50%, -50%);
  transition: all 0.3s;

  @media (max-width: 880px) {
    font-size: 2.2vw;
  }

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

const StyledIcons = styled.span`
  position: absolute;
  width: 102%;
  height: 25%;

  z-index: 1;
  top: 160%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: all 0.3s;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  background-color: var(--bg-eerie-black);
  color: var(--color-platinum);

  svg {
    align-self: center;
    height: 85%;
    width: 100%;
  }

  ::before {
    content: '';
    background-image: url('./man.svg');
    background-size: cover;
    z-index: 3;
    position: absolute;
    width: 12%;
    height: 65%;
    bottom: 100%;
    right: 50%;
    transform: translateX(50%);
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
