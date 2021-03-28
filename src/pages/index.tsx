import React from 'react';

import { GlobalStyles, Container } from '../styles';

import { Navbar, Header } from '../components';

import data from '../assets/data/data';

const { name, socialLinks } = data;

export default function Home() {
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
