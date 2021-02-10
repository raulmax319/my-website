import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 1.25rem;
  align-items: center;
  margin-bottom: 2.5rem;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const NavBrand = styled(Link)`
  flex-grow: 1;
  font-size: 1.5rem;
  font-weight: 700;
  color: gray;
  text-decoration: none;
`;

export const NavItems = styled.ul`
  list-styled: none;
  padding-inline-start: 0;
  display: flex;
  align-items: center;
`;

export const NavItem = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: 0.25s;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-bottom: solid black;
  }
`;

export const NavItemButton = styled(NavItem)`
  padding: 0.625rem 0.625rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #663399;
  ${(props) =>
    props.primary &&
    css
      background-color: #663399;
      color: white;
  }
`;
