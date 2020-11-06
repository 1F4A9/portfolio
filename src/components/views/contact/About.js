import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "profile.jpg"}) {
        childImageSharp {
          fixed(height: 200, width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <h3>It's me Emil!</h3>
      <Img fixed={data.file.childImageSharp.fixed} style={{ borderRadius: '50%' }} />
    </Container>
  )
}
