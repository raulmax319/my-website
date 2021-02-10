import React from 'react';
import { Route } from 'react-router-dom';

import { Container } from './components/Styled/Container';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;
