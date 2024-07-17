import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartItemsSelector } from '../../containers/App/selectors';
import { actions } from '../../containers/App/slice';
import { calculateTotal } from '../../containers/helpers/helpers';
import { CartContainer, CartHeader, CartItem, CartItems, CheckoutButton, EmptyCart, ItemDetails, RemoveButton, Total } from './styled';

export const CartPage = () => {
  const cartItems = useSelector(cartItemsSelector);
  const dispatch = useDispatch();

  const handleRemove = (itemId: number) => {
    if (itemId) dispatch(actions.setRemoveFromCart(itemId));
  };

  return (
    <CartContainer>
      <CartHeader>Your Cart</CartHeader>
      {cartItems.length === 0 ? (
        <EmptyCart>
          <p>Your cart is empty</p>
          <Link to='/products'>Continue Shopping</Link>
        </EmptyCart>
      ) : (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <ItemDetails>
                <h3>{item.name}</h3>
                <p>
                  {item.price} x {item.quantity}
                </p>
                <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
              </ItemDetails>
            </CartItem>
          ))}
          <Total>
            <h2>Total: ${calculateTotal(cartItems)}</h2>
            <Link to='/checkout'>
              <CheckoutButton>Proceed to Checkout</CheckoutButton>
            </Link>
          </Total>
        </CartItems>
      )}
    </CartContainer>
  );
};
