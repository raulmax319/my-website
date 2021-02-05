import React, { useState } from 'react';
import Navlink from './Navlinks';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <a href="#">Raul Max</a>
        </div>
        <div
          id="mainListDiv"
          className={isOpen ? 'show_list main_list' : 'main_list'}
        >
          <ul className="navlinks">
            <Navlink link="About" />
            <Navlink link="Portfolio" />
            <Navlink link="Services" />
            <Navlink link="Contact" />
          </ul>
        </div>
        <span
          className={isOpen ? 'navTrigger active' : 'navTrigger'}
          onClick={toggle}
        >
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
