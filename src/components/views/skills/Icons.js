import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNode, FaSass, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiGatsby, SiStyledComponents } from "react-icons/si";
import { RiStackFill } from "react-icons/ri";

const Container = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;

    svg {
      height: 60%;
      flex: 1;
      margin: 0 var(--margin-lg);
  }
`;

export default function Icons() {
  return (
    <Container className="icon-container">
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
