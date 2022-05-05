import React from 'react';
import { SectionTitle, Stack } from '../components';

import styles from './about.styles.scss';

export const About: React.FC = () => (
  <section className={styles.about}>
    <div className={styles.content}>
      <SectionTitle>About me</SectionTitle>
      <div className={styles.grid}>
        <div className={styles.pictureContainer}>
          <figure className={styles.circle}>
            <img
              src="https://avatars.githubusercontent.com/u/17752968?v=4"
              alt="Me"
            />
          </figure>
        </div>
        <div className={styles.aboutContainer}>
          <h3>Things about me</h3>
          <p>
            I am a Mobile Software Engineer with a background in business and
            management. I have a passion for learning new things and building
            applications that make people&#39;s lives better.
          </p>
          <p className={styles.blueText}>Some of my skills include:</p>
          <Stack />
        </div>
      </div>
    </div>
  </section>
);
