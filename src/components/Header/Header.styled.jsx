import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const HeaderEl = styled.header`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;

  border-bottom: 2px solid black;
  div,
  nav {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  button {
    cursor: pointer;
    width: 100px;
    background-color: #5ca8f4;
    border-radius: 5px;
    height: 20px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: #5ca8f4;
  }
`;
export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`;
