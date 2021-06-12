import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Container, Content, Title, Sub } from './ContactSection.styled';

export function ContactSection() {
  return (
    <Container className="contact">
      <Content>
        <Title>
          <a
            href="mailto:raulmax319@gmail.com"
            target="_blank"
            ref="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} /> Contact me
          </a>
        </Title>
        <Sub>raulmax319@gmail.com</Sub>
      </Content>
    </Container>
  );
}
