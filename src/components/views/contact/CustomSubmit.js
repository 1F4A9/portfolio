import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSubmit = styled.input`
  outline: none;
  padding: var(--padding-base) var(--padding-xs);
  width: 100%;
  border-radius: calc(var(--border-radius-xs) / 2);
  border: none;
  
  font-size: var(--font-size-form);
  font-weight: 600;
  letter-spacing: -1px;

  cursor: pointer;
  background-color: rgba(22, 173, 227, .4);
  color: var(--color-user-input);


  transition: all 0.2s ease-in;

  :hover {
    background-color: rgba(22, 173, 227, .6);
  }
`;

export default function CustomSubmit() {
  return (
    <>
      <StyledSubmit
        type="submit"
        value="Send"
      />
    </>
  )
}
