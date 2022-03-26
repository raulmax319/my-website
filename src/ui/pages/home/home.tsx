import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavBar } from '../components';
import styles from './home.styles.scss';

export const Home: React.FC = () => (
  <>
    <div className={styles.home}>
      <NavBar />
      <div className={styles.container}>
        <div>
          <h5>HELLO</h5>
          <h2>I&#39;m Raul Max</h2>
          <h4>Mobile Engineer</h4>

          <ul className={styles.social}>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{ height: 100 }} />
  </>
);
