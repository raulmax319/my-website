import React, { useEffect, useState } from 'react';

import {
  Nav,
  NavLogo,
  NavBrand,
  NavList,
  NavLinks,
  NavToggler,
  Div,
} from './Navbar.styled';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 0) setIsSticky(true);
    else setIsSticky(false);
  }

  useEffect(() => window.addEventListener('scroll', handleScroll), []);

  return (
    <Nav scrolled={isSticky}>
      <NavLogo to="home" spy>
        <NavBrand />
      </NavLogo>
      <Div>
        <NavToggler onClick={() => setIsOpen(!isOpen)} scrolled={isSticky}>
          <span />
          <span />
          <span />
        </NavToggler>
        <NavList scrolled={isSticky} isOpen={isOpen}>
          <NavLinks
            activeClass="active"
            to="home"
            offset={-86}
            duration={500}
            spy
            smooth
          >
            Home
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="about"
            offset={-86}
            duration={500}
            spy
            smooth
          >
            About
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="projects"
            offset={-86}
            duration={500}
            spy
            smooth
          >
            Projects
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="skills"
            offset={-86}
            duration={500}
            spy
            smooth
          >
            Skills
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="contact"
            offset={-86}
            duration={500}
            spy
            smooth
          >
            Contact
          </NavLinks>
        </NavList>
      </Div>
    </Nav>
  );
}
