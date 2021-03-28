import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';

interface TransientProp {
  $isvisible: boolean;
}

export const SquareBtn = styled(Link)<TransientProp>`
  position: fixed;
  text-decoration: none;
  top: 85vh;
  ${({ $isvisible }) =>
    $isvisible
      ? css`
          left: 95%;
        `
      : css`
          left: 120%;
        `}
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  color: #fff;
  background-color: #212529;
  z-index: 9999;
  display: visible;
  transition: left 400ms ease-in;

  @media (max-width: 768px), (max-width: 1280px) {
    ${({ $isvisible }) =>
      $isvisible
        ? css`
            left: 90%;
          `
        : css`
            left: 120%;
          `}
  }
`;
