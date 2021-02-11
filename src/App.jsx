import React from 'react';

import { GlobalStyles } from './components/Styled/Global';
import { Container } from './components/Styled/Container';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import data from './data';

const { name, socialLinks } = data;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Header name={name} socialLinks={socialLinks} />
      </Container>
    </>
  );
}

export default App;
