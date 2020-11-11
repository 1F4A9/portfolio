import React, { useState, useEffect } from 'react';
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
  position: relative;

  a :last-of-type::after {
    content: '';
    position: absolute;
    top: 6px;
    right: -0.3125rem;
    width: 1px;
    height: inherit;
    border-right: 2px solid #537094;

    animation: ${blink} 0.8s infinite ease;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 880px) {
    font-size: 1.2rem;

    a { word-break: break-word; }
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
`;

function findUrl(str) {
  let reg = str.split(/(:\s)/i);

  if (reg.length > 1) {
    return (
      <>
        {reg[0] + reg[1]}
        <a href={reg[2].replace('github', 'https://github')} title={reg[2]} target="blank">
          {reg[2]}
        </a>
      </>
    )
  }

  return reg[0];
}

let data = [
  `Hello there...`,
  `Welcome to my portfolio.`,
  `Source code: github.com/hipp0campus/portfolio`,
];

export default function Typewriter() {
  const [paragraphs, setParagraphs] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (index < data[count].length) {
      let interval = setInterval(typer, 40);
      return () => clearInterval(interval);
    }
  }, [index, count, typer])

  function typer() {
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
  }

  return (
    <Container>
      {paragraphs.map((paragraph, i) => (
        <Paragraph key={i}>
          {findUrl(paragraph)}
        </Paragraph>
      ))}
      {isTyping && <Typing className="ignore-rhythm">{text}</Typing>}
    </Container>
  )
}
