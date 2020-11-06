import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  padding: var(--padding-base) var(--padding-xs);
  width: 100%;
  border-radius: calc(var(--border-radius-xs) / 2);
  border: none;
`;

const StyledTextarea = styled.textarea`
  outline: none;
  padding: var(--padding-base) var(--padding-xs);
  width: 100%;
  border-radius: calc(var(--border-radius-xs) / 2);
  border: none;
  resize: none;
`;

const StyledLabel = styled.label`
  position: absolute;
  left: calc(var(--padding-xs) + var(--padding-base));
  top: 0;
  pointer-events: none;

  transform: ${props => props.isActive ?
    'translateY(calc(var(--padding-xs) + 4px))'
    :
    'translateY(calc(var(--padding-base) + var(--padding-sm) - 2px - 0.2rem))'
  };

  font-size: ${props => props.isActive ? '0.7rem' : '1.2rem'};
  color: ${props => props.isActive ? 'var(--color-blue-sky)' : 'var(color-grey)'};
  transition: all 0.2s ease-in-out;
`;

export default function CustomInput({ type, name, label }) {
  const [isActive, setIsActive] = useState(false);

  function onFocus() {
    setIsActive(true);
  }

  function onBlur() {
    setIsActive(false);
  }

  return (
    <>
      {type === 'textarea' ?
        <StyledTextarea
          name={name}
          id={name}
          rows="5"
          maxlength="200"
          onBlur={onBlur}
          onFocus={onFocus}
        />
        :
        <StyledInput
          type={type}
          name={name}
          id={name}
          required
          onBlur={onBlur}
          onFocus={onFocus}
        />
      }
      <StyledLabel isActive={isActive} htmlFor={name}>{label}</StyledLabel>
    </>
  )
}
