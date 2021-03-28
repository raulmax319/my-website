import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { SquareBtn } from './BackToTopBtn.styled';

export function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 200) setIsVisible(true);
    else setIsVisible(false);
  }

  useEffect(() => window.addEventListener('scroll', handleScroll), []);

  return (
    <>
      <SquareBtn
        to="home"
        activeClass="active"
        offset={-86}
        duration={500}
        spy
        smooth
        $isvisible={isVisible}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </SquareBtn>
    </>
  );
}
