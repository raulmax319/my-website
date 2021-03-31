import React from 'react';

import { GlobalStyles, Container } from '../styles';
import { BackToTopBtn, Navbar } from '../components';
import { HomeSection, AboutSection, SkillsSection } from '../sections';

import data from '../assets/data/data';

const { socialLinks, cvLink, thingsList } = data;

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <BackToTopBtn />
      <Container>
        <Navbar />
        <HomeSection socialLinks={socialLinks} />
        <AboutSection cvLink={cvLink} list={thingsList} />
        {/* <SkillsSection /> */}
      </Container>
    </>
  );
}
