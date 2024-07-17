import { styled } from 'styled-components';

export const CheckoutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-bottom: 1rem;
    input,
    select {
      margin-left: 1rem;
      padding: 0.5rem;
      font-size: 1rem;
    }
  }
  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const OrderSummary = styled.div`
  margin-top: 2rem;
  h2 {
    font-size: 2rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;
