import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade, Reveal } from 'react-reveal';

import {
  Home,
  BannerArea,
  Container,
  BannerContent,
  SocialLinks,
} from './styled/Header.styled';

function Header({ name, socialLinks, typedText }) {
  return (
    <Home>
      <BannerArea>
        <Container>
          <BannerContent>
            <Reveal effect="fadeInUp">
              <h5>HELLO</h5>
            </Reveal>
            <Reveal effect="fadeInUp">
              <h2>I&#39;m Raul Max</h2>
            </Reveal>
            <Reveal effect="fadeInUp">
              <h4>Full-Stack Developer</h4>
            </Reveal>
            <Fade bottom cascade duration={1000}>
              <SocialLinks>
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
              </SocialLinks>
            </Fade>
          </BannerContent>
        </Container>
      </BannerArea>
    </Home>
  );
}

Header.propTypes = {
  name: PropTypes.string,
  socialLinks: PropTypes.array,
  typedText: PropTypes.array,
};

export default Header;
