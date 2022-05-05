import {
  faAppStore,
  faReact,
  faSwift,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './stack.styles.scss';

export const Stack: React.FC = () => (
  <ul className={styles.stack}>
    <li className={styles.item}>
      <FontAwesomeIcon icon={faReact} />
      <span>React.JS</span>
    </li>
    <li className={styles.item}>
      <FontAwesomeIcon icon={faAppStore} />
      <span>App Store</span>
    </li>
    <li className={styles.item}>
      <FontAwesomeIcon icon={faSwift} />
      <span>Swift</span>
    </li>
  </ul>
);
