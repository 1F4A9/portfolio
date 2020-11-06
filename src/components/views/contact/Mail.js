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

  return (
    <Container>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <CustomInput
            type="text"
            name="name"
            label="Name | Company"
            setMailData={setMailData}
            mailData={mailData}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className="form-group">
          <CustomInput
            type="email"
            name="email"
            label="Email"
            setMailData={setMailData}
            mailData={mailData}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className="form-group">
          <CustomInput
            type="text"
            name="subject"
            label="Subject"
            setMailData={setMailData}
            mailData={mailData}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className="form-group">
          <CustomInput
            type="textarea"
            name="message"
            label="Message"
            setMailData={setMailData}
            mailData={mailData}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className="form-group">
          <CustomSubmit isSubmitted={isSubmitted} />
        </div>
      </form>
    </Container>
  )
}
