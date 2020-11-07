import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  // width of the largest sentence
  width: 203px;

  white-space: nowrap;
  margin-left: calc(var(--margin-sm) * 2);
  padding-bottom: var(--padding-sm);

  p {
    font-size: var(--font-size-form);
  }

  svg {
    margin-right: var(--margin-sm);
  }

  .no-content {
    // flex-basis: calc((20vw - (var(--padding-lg) * 4)) - 40%);
  }
`;

export default function ParagraphContainer({ icon, paragraph }) {
  return (
    <Container key={paragraph}>
      {icon}
      <p className="ignore-rhythm">{paragraph}</p>
    </Container>
  )
}
