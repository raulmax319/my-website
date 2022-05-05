import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

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
        <FaLinkedinIn />
      </a>
    </li>
    <li>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </li>
  </ul>
);
