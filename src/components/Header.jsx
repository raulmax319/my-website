import React from 'react';
import Typed from 'react-typed';

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <div className="content">
          <h2>Hi, I&#39;m</h2>
          <h1>Raul Max, your</h1>
          <Typed
            className="typed-text"
            strings={[
              'Backend Developer.',
              'Frontend Developer.',
              'Coffee lover.',
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <span className="bt1">
            <a href="#" className="btn-main-offer">
              Contact me
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
