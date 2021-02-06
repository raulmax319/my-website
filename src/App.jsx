import React from 'react';

import './assets/css/styles.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './images/logo.png';
import logoS from './images/logo-sticky.png';
import data from './data';

import Navbar from './components/Navbar';
import Header from './components/Header';

const { name, typed, socialLinks } = data;

function App() {
  return (
    <div className="body_wrapper">
      <Navbar
        mContainer="costume_container"
        mainLogo={logo}
        stickyLogo={logoS}
      />
      <Header name={name} socialLinks={socialLinks} typedText={typed} />
      <div>
        <h1>Soon to come</h1>
      </div>
    </div>
  );
}

export default App;
