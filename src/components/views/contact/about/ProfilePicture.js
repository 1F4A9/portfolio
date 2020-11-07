import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const GatsbyImage = styled(Img)`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

export default function ProfilePicture({ className }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "profile.jpg"}) {
        childImageSharp {
          fluid(maxHeight: 600, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <GatsbyImage className={className} fluid={data.file.childImageSharp.fluid} />
}
