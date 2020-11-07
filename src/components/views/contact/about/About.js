import React from 'react';
import styled from 'styled-components';
import { FaUserGraduate, FaCheckSquare, FaHandPeace } from 'react-icons/fa';

import CenterContent from './CenterContent';
import ParagraphContainer from './ParagraphContainer';
import ProfilePicture from './ProfilePicture';

const Container = styled.div`
  width: 40%;

  padding: var(--padding-lg);

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-top: var(--padding-sm);
    padding-bottom: calc(var(--padding-sm) * 2);
  }

  span:first-of-type {
    padding-top: calc(var(--padding-sm) * 2);
  }
`;

export default function About() {
  // Graduates in [days] | graduated 200 [days] ago
  // Frontend student | [frontend dev]

  const paragraphs = [
    { icon: <FaHandPeace />, paragraph: 'Frontend student' },
    { icon: <FaUserGraduate />, paragraph: 'Graduates in 190 days' },
    { icon: <FaCheckSquare />, paragraph: 'Problem solver' },
    { icon: <FaCheckSquare />, paragraph: 'Driven' },
    { icon: <FaCheckSquare />, paragraph: 'Eager to learn' },
  ]

  return (
    <Container className="about">
      <CenterContent>
        <h2>About me</h2>
        <ProfilePicture />
        {paragraphs.map(({ icon, paragraph }) => <ParagraphContainer icon={icon} paragraph={paragraph} />)}
      </CenterContent>
    </Container>
  )
}
