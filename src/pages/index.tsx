import React from 'react';

import { GlobalStyles, Container } from '../styles';
import { BackToTopBtn, Navbar } from '../components';
import {
  HomeSection,
  AboutSection,
  ContactSection,
  FooterSection,
} from '../sections';

import data from '../assets/data/data';

const { socialLinks, cvLink, profilePic, thingsList } = data;

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <BackToTopBtn />
      <Container>
        <Navbar />
        <HomeSection socialLinks={socialLinks} />
        <AboutSection
          cvLink={cvLink}
          profilePic={profilePic}
          list={thingsList}
        />
        <ContactSection />
        <FooterSection />
      </Container>
    </>
  );
}
