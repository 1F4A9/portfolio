import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Card from './Card';

const Container = styled.div`
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  display: flex;
  flex: 0 0 29%;

  margin: var(--margin-base);

  opacity: 1;
  transition: opacity 0.3s;

  :hover {
    box-shadow: 0 8px 20px rgba(0,0,0,5);
    opacity: 0.8;
  }

  @media (max-width: 880px) {
    flex: 0 0 40%;
  }

  @media (max-width: 450px) {
    flex: 1 0 100%;
    margin: var(--margin-base) 0;
  }
`;

const Image = ({ childImageSharp, className }) => {
  let { fluid } = childImageSharp;

  return (
    <Container>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={fluid}
        backgroundColor={`#040e18`}
      >
        <Card childImageSharp={childImageSharp} />
      </BackgroundImage>
    </Container>
  )
}

const StyledImage = styled(Image)`
  display: flex;
  flex: 1;
  height: calc(28vw / 1.33);

  background-position: center fixed;
  background-repeat: no-repeat;

  border-radius: var(--border-radius-xs);

  background-color: var(--color-blue-sky);
  background-blend-mode: overlay;
  mask-image: linear-gradient(to top, transparent -30%, black 100%);

  @media (max-width: 880px) {
    height: calc(37vw / 1.33);
  }

  @media (max-width: 450px) {
    height: calc(87vw / 1.33);
  }
`

export default StyledImage;
