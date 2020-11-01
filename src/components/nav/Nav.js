import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const Container = styled.nav`
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

  z-index: 2;
  cursor: ${props => props.isMenuActive ? 'auto' : 'pointer'};

  background-color: #2e3440;
`;

export default function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function onClick() {
    setIsMenuActive(true);
  }

  return (
    <Container isMenuActive={isMenuActive} onClick={onClick}>
      {isMenuActive ? <Menu />
        :
        (
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-justified" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#86bfcf" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="16" y2="18" />
          </svg>
        )}
    </Container>
  )
}
