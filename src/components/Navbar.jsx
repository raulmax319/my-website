import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ mClass, mContainer, mainLogo, stickyLogo }) {
  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <nav className={`navbar navbar-expand-lg navbar-light ${mClass}`}>
        <div className={`container ${mContainer}`}>
          <a className="navbar-brand logo_h" href="index.html">
            <img src={mainLogo} alt="logo image" />
            <img src={stickyLogo} alt="logo image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <FontAwesomeIcon icon={faBars} color={'white'} />
          </button>
          <div
            className="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav m-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right d-md-none d-lg-block">
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </Sticky>
  );
}

Navbar.propTypes = {
  mClass: PropTypes.string,
  mContainer: PropTypes.string,
  mainLogo: PropTypes.string,
  stickyLogo: PropTypes.string,
};
