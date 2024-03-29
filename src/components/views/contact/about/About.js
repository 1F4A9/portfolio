import React from 'react';
import styled from 'styled-components';
import { FaUserGraduate, FaHandPeace, FaHeart, FaGlasses, FaLightbulb } from 'react-icons/fa';

import CenterContent from './CenterContent';
import ParagraphContainer from './ParagraphContainer';
import ProfilePicture from './ProfilePicture';
import { calcDiffInTimeWith } from '../../../../utils/timeHandler';

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

  const paragraphs = [
    { icon: <FaHandPeace />, paragraph: `Front-end developer` },
    { icon: <FaUserGraduate />, paragraph: `${calcDiffInTimeWith('2021-05-28', 'days')} days since graduation` },
    { icon: <FaHeart />, paragraph: `Love of learning` },
    { icon: <FaGlasses />, paragraph: `Problem solver` },
    { icon: <FaLightbulb />, paragraph: `Creative` },
  ]

  return (
    <Container className="about" id="about">
      <CenterContent>
        <h2>About me</h2>
        <ProfilePicture />
        {paragraphs.map(({ icon, paragraph }) => (
          <ParagraphContainer
            icon={icon}
            paragraph={paragraph}
            key={paragraph.split(' ')[0]}
          />
        ))}
      </CenterContent>
    </Container>
  )
}
