import React from 'react';

import Normalize from '../styles/Normalize';
import Typography from '../styles/Typography';
import GlobalStyle from '../styles/GlobalStyle';

export default function Index() {
  return (
    <div>
      <Normalize />
      <GlobalStyle />
      <Typography />
      <h1>Hej!</h1>
    </div>
  )
}
