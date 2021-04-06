import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Container, Content, Title, Sub } from './ContactSection.styled';

export function ContactSection() {
  return (
    <Container className="contact">
      <Content>
        <Title>
          <FontAwesomeIcon icon={faEnvelopeOpenText} /> Contact me
        </Title>
        <Sub>raulmax319@gmail.com</Sub>
      </Content>
    </Container>
  );
}
