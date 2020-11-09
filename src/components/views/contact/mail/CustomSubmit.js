import React from 'react';
import styled from 'styled-components';

const StyledSubmit = styled.input`
  outline: none;
  padding: var(--padding-base) var(--padding-xs);
  width: 100%;
  border-radius: calc(var(--border-radius-xs) / 2);
  border: none;
  
  font-size: var(--font-size-form);
  font-weight: 600;
  letter-spacing: ${props => props.isSubmitted ? 'default' : '-1px'};

  cursor: pointer;
  background-color: ${props => props.isSubmitted ? '#2f892f9c' : 'rgba(22, 173, 227, .4)'};
  color: var(--color-platinum);

  transition: all 0.2s ease-in;

  :hover {
    background-color: ${props => props.isSubmitted ? '#2f892fbf' : 'rgba(22, 173, 227, .6)'};
  }
`;

export default function CustomSubmit({ isSubmitted }) {
  return (
    <>
      <StyledSubmit
        isSubmitted={isSubmitted}
        type="submit"
        value={isSubmitted ? 'Thank you!' : 'Send'}
      />
    </>
  )
}
