import React, { useState } from 'react';

import {
  Nav,
  NavLogo,
  NavBrand,
  NavList,
  NavLinks,
  NavToggler,
} from './Navbar.styled';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavLogo href="/">
        <NavBrand />
      </NavLogo>
      <NavToggler onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </NavToggler>
      <NavList isOpen={isOpen}>
        <NavLinks href="/">Home</NavLinks>
        <NavLinks href="/">About</NavLinks>
        <NavLinks href="/">Portfolio</NavLinks>
        <NavLinks href="/">Contact</NavLinks>
      </NavList>
    </Nav>
  );
}
