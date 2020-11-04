import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Card from './Card';

const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export default function Wrapper() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/png/"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 530, fit: FILL, grayscale: true) 
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
      {arr.map((node, i) => <Card key={i} childImageSharp={node.node.childImageSharp} />)}
    </Container>
  )
}
