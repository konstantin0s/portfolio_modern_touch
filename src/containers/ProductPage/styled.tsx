import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Background = styled.div`
  background-color: aliceblue;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  color: #fff;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: red;
  font-size: 18px;
  position: relative;
  top: 10px;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const ProductImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
`;

export const ProductDetails = styled.div`
  flex: 1;
`;

export const ProductTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductCategory = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  background-color: #ff4081;
  color: #fff;
`;

export const Loading = styled.div`
  text-align: center;
  font-size: 24px;
  color: #fff;
`;

export const Error = styled.div`
  text-align: center;
  font-size: 24px;
  color: red;
`;
