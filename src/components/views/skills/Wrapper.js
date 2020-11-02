import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNode, FaSass, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiGatsby, SiStyledComponents } from "react-icons/si";
import { RiStackFill } from "react-icons/ri";

const Container = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 1140px) {
    max-width: 1080px;
  }

  svg {
    height: 8%;
    flex: 0 0 20%;

    // color: var(--color-dark-sky);
    color: var(--color-grey);
  }
`;

export default function Wrapper() {
  return (
    <Container>
      <SiJavascript />
      <FaReact />
      <FaNode />
      <RiStackFill />
      <SiGatsby />
      <FaHtml5 />
      <FaCss3Alt />
      <FaSass />
      <SiStyledComponents />
      <FaGithub />
    </Container>
  )
}
