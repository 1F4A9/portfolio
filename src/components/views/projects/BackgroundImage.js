import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Card from './Card';

const Container = styled.div`
  box-shadow: 0 8px 20px rgba(0,0,0,3.5);
  margin: var(--margin-lg);

  :hover {
    box-shadow: 0 8px 28px rgba(0,0,0,3.5);
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
  @media (max-width: 820px) {

  }

  flex: 1 1 30%;
  height: 400px;
  width: 480px;

  background-position: center center;
  background-repeat: no-repeat;

  border-radius: var(--border-radius-xs);

  background-color: var(--color-blue-sky);
  background-blend-mode: overlay;
  mask-image: linear-gradient(to top, transparent -50%, black 100%);

`

export default StyledImage;
