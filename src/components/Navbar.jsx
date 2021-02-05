import React from 'react';

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <a href="#">Raul Max</a>
        </div>
        <div id="mainListDiv" className="main_list">
          <ul className="navlinks">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <span className="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
