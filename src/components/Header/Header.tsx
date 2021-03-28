import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Fade, Reveal } from 'react-reveal';

import {
  Home,
  BannerArea,
  Container,
  BannerContent,
  SocialLinks,
  H2,
} from './Header.styled';

interface HeaderProps {
  name?: string;
  socialLinks: Array<{ name: string; url: string; className: IconProp }>;
  typedText?: string;
}

export function Header({ name, socialLinks, typedText }: HeaderProps) {
  return (
    <Home>
      <BannerArea>
        <Container>
          <BannerContent>
            <Reveal effect="fadeInUp">
              <h5>HELLO</h5>
            </Reveal>
            <Reveal effect="fadeInUp">
              <H2>I&#39;m Raul Max</H2>
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
