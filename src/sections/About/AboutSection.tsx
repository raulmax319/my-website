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
  ProfileImage,
} from './AboutSection.styled';
import { Button, Icon } from '../../components';

interface IProps {
  cvLink: string;
  list: Array<Array<{ text: string; icon: string }>>;
  profilePic: string;
}

export function AboutSection({ cvLink, list, profilePic }: IProps) {
  return (
    <About className="about">
      <Container>
        <Div>
          <Reveal>
            <H2>About me</H2>
          </Reveal>
          <Grid>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Circle>
                <Reveal effect="fadeInLeft" duration={1500}>
                  <ProfileImage src={profilePic} alt="" />
                </Reveal>
              </Circle>
            </div>
            <div>
              <Content>
                <Fade bottom cascade duration={500}>
                  <H3>Things about me</H3>
                </Fade>
                <Reveal>
                  <P>
                    Hello! My name is Raul Max, I am from Brazil and I love
                    coding. Now working as a software developer building
                    mobile/web applications, I hope to build apps that makes the
                    user's life simple, which is why i chose to mainly focus on
                    Front End technologies.
                  </P>
                  <P blue>Some of the techs I work with:</P>
                  {list.map(element => (
                    <List>
                      {element.map(e => (
                        <Fade
                          bottom
                          cascade
                          duration={500}
                          key={`${Math.random() * 10}`}
                        >
                          <Item>
                            <Icon name={e.icon} />
                            {e.text}
                          </Item>
                        </Fade>
                      ))}
                    </List>
                  ))}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <Fade right cascade duration={300}>
                      <Button href={cvLink} target="_blank" primary>
                        Download CV
                      </Button>
                    </Fade>
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
