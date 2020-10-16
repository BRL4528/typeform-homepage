import React from 'react';

import GlobalStykes from './styles/global';
import { Main } from './styles';

function App() {
  return (
    <>
      <GlobalStykes />

      <Main style={{ height: '1610vh' }}></Main>
    </>
  );
}

export default App;
