import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 105px;
  height: 105px;
  text-align: right;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
`;

const StyledSpan = styled.span`
  color: var(--black);
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  white-space: nowrap;
  background: #2989d8;
  background: linear-gradient(#2989d8 0%, #1e5799 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg); /* Needed for Safari */
  width: 141px;
  display: block;
  position: absolute;
  top: 31px;
  right: -28px;

  ::after {
    content: '';
    position: absolute; 
    right: 0%; top: 100%;
    z-index: -1;
    border-right: 3px solid #1e5799;
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #1e5799;
  }

  ::before {
    content: '';
    position: absolute; 
    left: 0px; top: 100%;
    z-index: -1;
    border-left: 3px solid #1e5799;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #1e5799;
  }
`;

export default function Ribbon({ label }) {
  return (
    <Container>
      <StyledSpan>{label}</StyledSpan>
    </Container>
  )
}
