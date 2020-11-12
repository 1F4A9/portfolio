import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  height: 100%;

  overflow-y: auto;

  box-shadow: inset 0px 0px 15px -6px #131a28;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: var(--padding-sm);

  background-color: var(--color-outer-space);

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 12px;
  }

  scrollbar-width: thin;
  scrollbar-color: #656D7E #111A2C;

  ::-webkit-scrollbar-track {
    background: #111A2C;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #656D7E;
    border-radius: 6px;
    border: 3px solid #656D7E;
  }
`;

const Paragraph = styled.p`
  color: var(--color-dark-sky);
  font-size: 2.2rem;
  font-weight: 400;

  a {
    position: relative;
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
    text-decoration: underline;
    :hover {
      color: var(--color-platinum);
    }

    ::after {
      content: '';
      position: absolute;
      top: 6px;
      right: -0.3125rem;
      width: 1px;
      height: 2.2rem;
      border-right: 2px solid #537094;

      animation: ${blink} 0.8s infinite ease;
    }
  }

  @media (max-width: 880px) {
    font-size: 1.2rem;

    a::after { height: 1.2rem; top: 3px; }
  } 
`;

const Typing = styled(Paragraph)`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 6px;
    right: -0.3125rem;
    width: 1px;
    height: 2.2rem;
    border-right: 2px solid #537094;

    animation: ${blink} 0.8s infinite ease;
  }

  @media (max-width: 880px) {
    ::after { height: 1.2rem; }
  } 
`;

function createAnchorTagIf(str) {
  const url = 'https://github.com/hipp0campus/portfolio';
  let reg = str.match(/(source)/i);

  if (reg) {
    return (
      <>
        <a href={url} title={url} target="blank">
          {str}
        </a>
      </>
    )
  }

  return str;
}

let data = [
  `Hello world.`,
  `Welcome to my portfolio.`,
  `My name is Emil, I'm a frontend student from sweden.`,
  `I'm currently looking for an internship.`,
  `View source code here.`,
];

export default function Typewriter() {
  const [paragraphs, setParagraphs] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typer = useCallback(
    () => {
      let currentText = '';
      let letter = '';

      currentText = data[count];
      letter = currentText.slice(0, index + 1);

      setIndex(index + 1);

      setText(letter);

      if (letter.length === currentText.length) {
        let paragraph = [...paragraphs];
        paragraph.push(letter);
        setParagraphs(paragraph);

        setText('');

        // If done typing, end function.
        if (count >= data.length - 1) return setIsTyping(false);

        setCount(count + 1);
        setIndex(0);
      }
    },
    [paragraphs, count, index],
  )

  useEffect(() => {
    if (index < data[count].length) {
      let interval = setInterval(typer, 40);
      return () => clearInterval(interval);
    }
  }, [index, count, typer])

  return (
    <Container>
      {paragraphs.map((paragraph, i) => (
        <Paragraph key={i}>
          {createAnchorTagIf(paragraph)}
        </Paragraph>
      ))}
      {isTyping && <Typing className="ignore-rhythm">{text}</Typing>}
    </Container>
  )
}
