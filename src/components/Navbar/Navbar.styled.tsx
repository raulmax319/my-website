import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled('nav')<{ scrolled: boolean }>`
  max-width: 100%;
  height: 80px;
  position: ${({ scrolled }) => (scrolled ? 'fixed' : 'absolute')};
  background: ${({ scrolled }) => (scrolled ? '#fff' : '')};
  top: 0;
  left: 0;
  right: 0;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 999;
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 2px 4px 0 rgba(0, 0, 0, 0.2)' : ''};
  transition: all 500ms ease-in;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-end;
`;

export const NavList = styled('div')<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  @media (max-width: 991px), (max-width: 1196px) {
    position: absolute;
    margin-top: 30px;
    overflow: hidden;
    flex-direction: column;
    background: #fff;
    width: 300px;
    max-height: ${({ isOpen }) => (isOpen ? 'fit-content' : '0')};
    transition: 350ms ease-in;
  }
`;

export const NavLinks = styled(Link)`
  display: inline-block;
  font-family: Nunito, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  color: #040c2c;
  cursor: pointer;
  padding: 1rem 1.7rem;
  text-decoration: none;

  &::after {
    content: '';
    background: #040c2c;
    opacity: 0.7;
    display: block;
    width: 0%;
    height: 2px;
    z-index: 1;
    -webkit-transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    -o-transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  }
  &:hover::after {
    outline: none;
    width: 100%;
    left: 0;
  }
`;

export const NavLogo = styled.a``;

export const NavBrand = styled.img`
  margin: auto 0 auto 4rem;
  content: url('images/logo-sticky.png');
  padding: 0.625rem 0;
  cursor: pointer;

  @media (max-width: 991px), (max-width: 1196px) {
    margin: auto 0 auto 0;
  }
`;

export const NavToggler = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 25px;
    height: 2px;
    background: #040c2c;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 991px), (max-width: 1196px) {
    display: flex;
  }
`;
