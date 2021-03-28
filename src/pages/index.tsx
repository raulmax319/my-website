import React from 'react';

import { GlobalStyles, Container } from '../styles';
import { BackToTopBtn, Navbar } from '../components';
import { HomeSection, AboutSection } from '../sections';

import data from '../assets/data/data';

const { name, socialLinks } = data;

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <BackToTopBtn />
      <Container>
        <Navbar />
        <HomeSection socialLinks={socialLinks} />
        <AboutSection />
      </Container>
    </>
  );
}
