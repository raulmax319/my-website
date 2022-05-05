import React from 'react';
import { FaReact, FaAppStore, FaSwift, FaNodeJs } from 'react-icons/fa';
import {
  SiCircleci,
  SiCplusplus,
  SiFirebase,
  SiMysql,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';

import styles from './stack.styles.scss';

export const Stack: React.FC = () => (
  <ul className={styles.stack}>
    <li className={styles.item}>
      <FaReact />
      <span>React.JS</span>
    </li>
    <li className={styles.item}>
      <SiTypescript />
      <span>TypeScript</span>
    </li>
    <li className={styles.item}>
      <SiRedux />
      <span>Redux</span>
    </li>
    <li className={styles.item}>
      <FaAppStore />
      <span>App Store</span>
    </li>
    <li className={styles.item}>
      <FaSwift />
      <span>Swift</span>
    </li>
    <li className={styles.item}>
      <SiCplusplus />
      <span>C++</span>
    </li>
    <li className={styles.item}>
      <FaNodeJs />
      <span>NodeJS</span>
    </li>
    <li className={styles.item}>
      <SiMysql />
      <span>MySQL</span>
    </li>
    <li className={styles.item}>
      <SiFirebase />
      <span>Firebase</span>
    </li>
    <li className={styles.item}>
      <SiCircleci />
      <span>CI/CD</span>
    </li>
  </ul>
);
