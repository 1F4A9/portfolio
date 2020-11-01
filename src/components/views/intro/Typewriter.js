import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { calcDiffInTimeWith } from '../../../utils/timeHandler';

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

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: var(--padding-sm);

  background-color: #2e3440;
`;

const Paragraph = styled.p`
  color: #86bfcf;
  font-size: 1.2rem;
  font-weight: 400;
`;

const Typing = styled(Paragraph)`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 6px;
    right: -0.3125rem;
    width: 1px;
    height: 1.1rem;
    border-right: 2px solid #537094;

    animation: ${blink} 0.8s infinite ease;
  }
`;

let data = [
  `Hello there... welcome to my portfolio.`,
  `My name is Emil, I'm ${calcDiffInTimeWith('1994-10-16', 'years')} years old and live in Svedala, Sweden.`,
  `I study front-end and will graduate in ${calcDiffInTimeWith('2021-05-28', 'days')} days.`,
  `I have serious passion for solid solutions and  refuse to settle for anything less.`,
  `I dream and speak Javascript, and no i'm not talking about nightmares ;-)`,
  `The source code.`,
];

export default function Typewriter() {
  const [paragraphs, setParagraphs] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < data[count].length) {
      let interval = setInterval(typer, 40);
      return () => clearInterval(interval);
    }
  }, [index])

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
      if (count >= data.length - 1) return;

      setCount(count + 1);
      setIndex(0);
    }
  }

  return (
    <Container>
      {paragraphs.map((paragraph, i) => <Paragraph key={i}>{paragraph}</Paragraph>)}
      <Typing className="ignore-rhythm">{text}</Typing>
    </Container>
  )
}
