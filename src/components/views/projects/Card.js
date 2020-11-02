import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  flex: 0 0 30%;
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--color-dark-sky);
  mask-image: linear-gradient(to top, transparent -50%, black 100%);
  opacity: 1;

  transition: opacity 0.3s;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

`;

export default function Card({ node }) {

  return (
    <Container>
      <Main>
        <Img fluid={node.node.childImageSharp.fluid} />
      </Main>
    </Container>
  )
}