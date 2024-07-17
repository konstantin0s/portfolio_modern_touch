import React from 'react';
import { Nav, StyledLink } from './styled';

export const Navbar = () => {
  return (
    <Nav>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/products'>Products</StyledLink>
      <StyledLink to='/cart'>Cart</StyledLink>
    </Nav>
  );
};
