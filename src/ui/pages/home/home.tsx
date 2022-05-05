import React from 'react';
import { SocialLinks } from '../components';

import styles from './home.styles.scss';

export const Home: React.FC = () => (
  <header className={styles.home}>
    <div className={styles.container}>
      <div>
        <h5>HELLO</h5>
        <h2>I&#39;m Raul Max</h2>
        <h4>Mobile Engineer</h4>
        <SocialLinks />
      </div>
    </div>
  </header>
);
