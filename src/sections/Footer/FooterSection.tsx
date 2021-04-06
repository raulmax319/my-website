import React from 'react';

import { Container, Content, Title } from './FooterSection.styled';

export function FooterSection() {
  return (
    <Container className="contact">
      <Content>
        <Title>
          Made with ❤️ by{' '}
          <a href="https://www.facebook.com/raulmax319/">Raul Max</a>
        </Title>
      </Content>
    </Container>
  );
}
