import React from 'react';
import styled from 'styled-components';
import { FaUserGraduate, FaCheckSquare, FaHandPeace, FaHeart, FaGlasses } from 'react-icons/fa';

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
    { icon: <FaHandPeace />, paragraph: `Frontend student` },
    { icon: <FaUserGraduate />, paragraph: `Graduates in ${calcDiffInTimeWith('2021-05-28', 'days')} days` },
    { icon: <FaHeart />, paragraph: `Love of learning` },
    { icon: <FaGlasses />, paragraph: `Problem solver` },
    { icon: <FaCheckSquare />, paragraph: `Creative` },
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
