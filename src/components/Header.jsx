import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Fade, Reveal } from 'react-reveal';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import profile from '../images/background.jpg';

export default function Header({ name, socialLinks, typedText }) {
  return (
    <section id="home">
      <Parallax bgImage={profile} strength={500} className="banner_area">
        <div className="container">
          <div className="banner_content">
            <Reveal effect="fadeInUp">
              <h5>HELLO</h5>
            </Reveal>
            <Reveal effect="fadeInUp" duration={1500}>
              <h2>I am {name}</h2>
            </Reveal>

            <h4 className="wow fadeInUp anoimated">
              <Typed
                className="typed-text"
                strings={typedText}
                typeSpeed={60}
                backSpeed={80}
                backDelay={3000}
                loop
              />
            </h4>
            <Fade bottom cascade duration={1000}>
              <ul className="list_style social_icon">
                {socialLinks &&
                  socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}>
                          <FontAwesomeIcon icon={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </Fade>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

Header.propTypes = {
  name: PropTypes.string,
  socialLinks: PropTypes.array,
  typedText: PropTypes.array,
};
