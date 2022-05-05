import React from 'react';

import styles from './nav-bar.styles.scss';

export const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${(scrolled && styles.sticky) || ''}`}>
      <ul>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">ABOUT</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};
