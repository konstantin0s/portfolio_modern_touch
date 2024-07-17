import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #444;
    color: #ff4081;
    border-radius: 5px;
  }
`;
