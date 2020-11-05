import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import StyledImage from './BackgroundImage';

const Container = styled.div`
  width: 100%;
  flex: 1;

  position: relative;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Wrapper() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/png/"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 532, maxHeight: 400, fit: FILL, grayscale: true) 
              {
                ...GatsbyImageSharpFluid,
                originalName
              }
            }
          }
        }
      }
    }
  `)

  let arr = data.allFile.edges;

  return (
    <Container>
      {arr.map((node, i) => <StyledImage key={i} childImageSharp={node.node.childImageSharp} />)}
    </Container>
  )
}
