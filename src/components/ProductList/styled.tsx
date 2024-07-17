import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

export const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #333;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;
