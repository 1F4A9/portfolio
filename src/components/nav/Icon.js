import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 0;
  top: 0;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-top: var(--margin-lg);
  margin-right: var(--margin-lg);

  z-index: 6;
  cursor: pointer;
  background-color: ${props => props.isMenuActive ? 'transparent' : 'var(--color-outer-space)'};

  :hover, 
  svg:hover {
    transition: transform 0.3s;
    transform: ${props => props.isMenuActive ? 'scale(1)' : 'scale(1.05)'};
    stroke: ${props => props.isMenuActive && 'var(--bg-off-white)'};
  }
`;

export default function Icon({ isMenuActive, setIsMenuActive }) {

  function onClick() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <Container isMenuActive={isMenuActive} onClick={onClick} >
      {isMenuActive ?
        (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="32" height="32" viewBox="0 0 24 24" strokeWidth="3" stroke="#181818" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )
        :
        (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-justified" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#86bfcf" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="16" y2="18" />
          </svg>
        )
      }
    </Container>
  )
}
