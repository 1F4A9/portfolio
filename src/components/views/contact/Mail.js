import React, { useState } from 'react';
import styled from 'styled-components';

import CustomInput from './CustomInput';
import CustomSubmit from './CustomSubmit';

const Container = styled.div`
  width: 60%;
  border-left: 1px solid var(--black);
  padding: var(--padding-lg);

  .form-group {
    position: relative;
    padding: var(--padding-sm) 0 var(--padding-sm) var(--padding-base);
  }
`;

export default function Mail() {
  const [mailData, setMailData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    setIsSubmitted(true);

    console.log(mailData)
  }

  const inputs = [
    { type: 'text', name: 'name', label: 'Name | Company' },
    { type: 'email', name: 'email', label: 'Email' },
    { type: 'text', name: 'subject', label: 'Subject' },
    { type: 'textarea', name: 'message', label: 'Message' },
  ];

  return (
    <Container className="mail-border">
      <form onSubmit={onSubmit} >
        {inputs.map(({ type, name, label }) => {
          return (
            <div className="form-group" key={name}>
              <CustomInput
                type={type}
                name={name}
                label={label}
                setMailData={setMailData}
                mailData={mailData}
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
              />
            </div>
          )
        })}
        <div className="form-group">
          <CustomSubmit isSubmitted={isSubmitted} />
        </div>
      </form>
    </Container>
  )
}
