import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Icon from './Icon';

const Container = styled.nav`

`;

export default function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <Container>
      <Icon isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
    </Container>
  )
}
