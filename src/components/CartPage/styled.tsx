import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

export const CartHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const EmptyCart = styled.div`
  text-align: center;
  p {
    font-size: 1.2rem;
    color: #777;
  }
  a {
    text-decoration: none;
    color: #ff4081;
    font-size: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  img {
    width: 100px;
    height: auto;
    border-radius: 8px;
    margin-right: 20px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    margin: 0;
    color: #333;
  }
  p {
    margin: 0;
    color: #777;
  }
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0356f;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h2 {
    margin: 0;
    color: #333;
  }
`;

export const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0356f;
  }
`;
