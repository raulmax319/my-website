import React from 'react';

import { GlobalStyles } from './components/Styled/Global';
import { Container } from './components/Styled/Container';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
      </Container>
    </>
  );
}

export default App;
