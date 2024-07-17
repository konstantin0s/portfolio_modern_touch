import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../../containers/App/selectors';
import { CheckoutContainer, Form, OrderSummary } from './styled';

export const CheckoutPage = () => {
  const cartItems = useSelector(cartItemsSelector);
  const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
    paymentMethod: 'creditCard',
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Order submitted', form);
    // Add your checkout logic here
  };

  return (
    <CheckoutContainer>
      <h1>Checkout</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type='text'
            name='address'
            value={form.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Payment Method:
          <select
            name='paymentMethod'
            value={form.paymentMethod}
            onChange={handleChange}
          >
            <option value='creditCard'>Credit Card</option>
            <option value='paypal'>PayPal</option>
          </select>
        </label>
        <button type='submit'>Place Order</button>
      </Form>
      <OrderSummary>
        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} x {item.quantity}
            </p>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
        <h3>
          Total: $
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
      </OrderSummary>
    </CheckoutContainer>
  );
};
