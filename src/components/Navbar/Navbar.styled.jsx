import styled from 'styled-components';
import logo from '../../assets/images/logo-sticky.png';

export const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const NavList = styled.div`
  margin: auto 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 991px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    transition: max-height 350ms ease-in;
  }
`;

export const NavLinks = styled.a`
  display: inline-block;
  font-family: Nunito, sans-serif;
  font-size: 1rem;
  font-weight: 700;
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
    opacity: 0.71;
    display: block;
    left: auto;
    right: 0px;
    bottom: 0px;
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
  content: url(${logo});
  padding: 0.625rem 0;
  cursor: pointer;

  @media (max-width: 991px) {
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

  @media (max-width: 991px) {
    display: flex;
  }
`;
