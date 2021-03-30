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
  List,
  ListItem as Item,
} from './AboutSection.styled';
import { Button } from '../../components';

interface IProps {
  cvLink: string;
  list: Array<{ text: string; icon: string }>;
}

export function AboutSection({ cvLink, list }: IProps) {
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
                    I actually don't know what to write here so, my name is Raul
                    Max and i'm a technology Enthusiast who loves japanese
                    culture and to code everyday, yes, even weekends! I am a
                    Full-Stack developer with main focus on Front-end
                  </P>
                  <List>
                    {list.map(element => (
                      <Item icon={element.icon}>{element.text}</Item>
                    ))}
                  </List>
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
                    <Button href={cvLink}>Download CV</Button>
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
