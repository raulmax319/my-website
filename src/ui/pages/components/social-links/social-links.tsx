import React from 'react';
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './social-links.styles.scss';

export const SocialLinks: React.FC = () => (
  <ul className={styles.social}>
    {/* <li>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </li>
    <li>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </li> */}
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
);
