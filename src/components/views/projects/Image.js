import React from 'react';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image'

const Image = ({ fluid, className }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={fluid}
      backgroundColor={`#040e18`}
    >
    </BackgroundImage>
  )
}

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;

  background-color: #16ADE3;
  background-blend-mode: overlay;
  mask-image: linear-gradient(to top, transparent -50%, black 100%);
`

export default StyledImage;
