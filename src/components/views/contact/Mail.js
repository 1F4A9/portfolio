import React from 'react';
import styled from 'styled-components';

import CustomInput from './CustomInput';

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
  return (
    <Container>
      <form>
        <div className="form-group">
          <CustomInput type="text" name="name" label="Name" />
        </div>
        <div className="form-group">
          <CustomInput type="email" name="email" label="Email" />
        </div>
        <div className="form-group">
          <CustomInput type="text" name="subject" label="Subject" />
        </div>
        <div className="form-group">
          <CustomInput type="textarea" name="message" label="Message" />
        </div>
      </form>
    </Container>
  )
}
