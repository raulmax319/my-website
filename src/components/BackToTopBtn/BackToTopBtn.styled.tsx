import { Link } from 'react-scroll';
import styled from 'styled-components';

export const SquareBtn = styled(Link)`
  position: fixed;
  float: right;
  text-decoration: none;
  top: 85vh;
  left: 90%;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 30%;
  color: #fff;
  background-color: #212529;
  z-index: 9999;
  display: visible;
  transition: left 500ms ease-in;
  @media (max-width: 768px) {
    left: 80%;
  }
`;
