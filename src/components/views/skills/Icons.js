import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNode, FaSass, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiGatsby, SiStyledComponents } from "react-icons/si";
import { RiStackFill } from "react-icons/ri";

const Container = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
`;

const StyledSpan = styled.span`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: clamp(0.7rem, 1vw, 1.6rem);
  white-space: nowrap;

  svg {
    height: 50%;
    width: 100%;
    margin: 0 var(--margin-lg);
    padding-bottom: var(--padding-xs);
  }
`;


export default function Icons() {
  const icons = [
    { icon: <SiJavascript />, title: 'Javascript' },
    { icon: <FaReact />, title: 'React.js' },
    { icon: <FaNode />, title: 'Node.js' },
    { icon: <RiStackFill />, title: 'Rest API' },
    { icon: <SiGatsby />, title: 'Gatsby.js' },
    { icon: <FaHtml5 />, title: 'HTML' },
    { icon: <FaCss3Alt />, title: 'CSS' },
    { icon: <FaSass />, title: 'SASS' },
    { icon: <SiStyledComponents />, title: 'Styled-comp' },
    { icon: <FaGithub />, title: 'Git' },
  ]

  return (
    <Container className="icon-container">
      {icons.map(({ icon, title }) => {
        return (
          <StyledSpan key={title}>
            {icon}
            {title}
          </StyledSpan>
        )
      })}
    </Container>
  )
}
