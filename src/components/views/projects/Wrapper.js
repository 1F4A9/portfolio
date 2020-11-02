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
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1140px) {
    max-width: 1080px;
  }
`;

export default function Wrapper() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/png/"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
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
      {arr.map((node, i) => <Card key={i} node={node} />)}
    </Container>
  )
}
