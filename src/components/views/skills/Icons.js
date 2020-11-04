import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNode, FaSass, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiGatsby, SiStyledComponents } from "react-icons/si";
import { RiStackFill } from "react-icons/ri";

const Container = styled.div`
  display: flex;

  svg {
    height: 100%;
    color: var(--color-grey);
    flex: 0 0 20%;
  }
`;

export default function Icons({ set }) {
  let icon = null;

  if (set === 1) {
    icon =
      <>
        <SiJavascript />
        <FaReact />
        <FaNode />
        <RiStackFill />
        <SiGatsby />
      </>
  }

  if (set === 2) {
    icon =
      <>
        <FaHtml5 />
        <FaCss3Alt />
        <FaSass />
        <SiStyledComponents />
        <FaGithub />
      </>
  }

  return (
    <Container>
      {icon}
    </Container>
  )
}
