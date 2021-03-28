import React from 'react';
import { Reveal, Fade } from 'react-reveal';

import {
  About,
  Container,
  Div,
  Grid,
  H2,
  H3,
  P,
  Circle,
  Content,
} from './AboutSection.styled';
import { Button } from '../../components';

export function AboutSection() {
  return (
    <About className="about">
      <Container>
        <Div>
          <Reveal>
            <H2>About me</H2>
          </Reveal>
          <Grid>
            <div>
              <Circle>
                <Reveal effect="fadeInLeft" duration={1500}>
                  <img src="images/hero_unsplash.jpg" alt="" />
                </Reveal>
              </Circle>
            </div>
            <div>
              <Content>
                <Fade bottom cascade duration={500}>
                  <H3>I like programming lol</H3>
                </Fade>
                <Reveal>
                  <P>
                    Making all those little fluffies that live in the clouds. We
                    start with a vision in our heart, and we put it on canvas.
                    Water's like me. It's laaazy ... Boy, it always looks for
                    the easiest way to do things.
                  </P>
                  <P>Just</P>
                  <P>a</P>
                  <P>filler</P>
                  <P>Paragraph</P>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <Button href="mailto:raulmax319@gmail.com" primary>
                      Contact me
                    </Button>
                    <Button href="">Resume</Button>
                  </div>
                </Reveal>
              </Content>
            </div>
          </Grid>
        </Div>
      </Container>
    </About>
  );
}
