import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  padding: var(--padding-base) var(--padding-xs);
  width: 100%;
  border-radius: calc(var(--border-radius-xs) / 2);
  border: none;

  background-color: var(--color-form);
  color: var(--color-user-input);

  :-webkit-autofill,
  :-webkit-autofill:hover, 
  :-webkit-autofill:focus {
    transition: background-color 5000s;
    -webkit-text-fill-color: var(--color-user-input) !important;
  }
`;

const StyledTextarea = styled.textarea`
  outline: none;
  padding: var(--padding-base) var(--padding-xs);
  width: 100%;
  border-radius: calc(var(--border-radius-xs) / 2);
  border: none;
  resize: none;

  background-color: var(--color-form);
  color: var(--color-user-input);

  :-webkit-autofill,
  :-webkit-autofill:hover, 
  :-webkit-autofill:focus {
    transition: background-color 5000s;
    -webkit-text-fill-color: var(--color-user-input) !important;
  }
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

  letter-spacing: ${props => props.isActive ? 'default' : '-1px'};
  font-size: ${props => props.isActive ? '0.7rem' : 'var(--font-size-form)'};
  color: ${props => props.isActive ? 'var(--color-blue-sky)' : 'var(color-grey)'};
  transition: all 0.2s ease-in-out;
`;

export default function CustomInput({ type, name, label, setMailData, mailData }) {
  const [isActive, setIsActive] = useState(false);
  const [userInput, setUserInput] = useState('');

  function onFocus() {
    setIsActive(true);
  }

  function onBlur() {
    if (!userInput) {
      setIsActive(false);
    }
  }

  function onChange(e) {
    setMailData({ ...mailData, ...{ [e.target.name]: e.target.value } });
    setUserInput(e.target.value);
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
          onChange={onChange}
          value={userInput}
        />
        :
        <StyledInput
          type={type}
          name={name}
          id={name}
          required
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          value={userInput}
        />
      }
      <StyledLabel isActive={isActive} htmlFor={name}>{label}</StyledLabel>
    </>
  )
}
