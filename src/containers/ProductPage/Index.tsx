import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductReviews } from '../../components/ProductReview';
import { baseURL } from '../api';
import { cartItemsSelector } from '../App/selectors';
import { actions } from '../App/slice';
import { Product } from '../App/types';
import {
  Background,
  Error,
  Header,
  Loading,
  ProductCategory,
  ProductContainer,
  ProductDescription,
  ProductDetails,
  ProductImage,
  ProductPrice,
  ProductTitle,
  StyledButton,
  StyledLink,
} from './styled';
export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const savedCartItems = useSelector(cartItemsSelector);
  const [product, setProduct] = useState<Product | null>(null);
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [cartItems, setCartItems] = useState(savedCartItems?.length);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/${id}`);
        const data = await response.json();
        setProduct(data);
        setItem(data);
        setLoading(false);
        if (data.length === 0) {
          setError(true);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    if (item) {
      dispatch(actions.setAddToCart(item));
      setCartItems((prevItems) => prevItems + 1);
    }
  };

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>Error...</Error>;

  return (
    <Background>
      <Header>
        <StyledLink to={'/cart'}>View Cart ({cartItems})</StyledLink>
      </Header>
      {product && (
        <ProductContainer>
          <ProductImage src={product.image} alt={product.title} />
          <ProductDetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>Price: ${product.price}</ProductPrice>
            <ProductCategory>Category: {product.category}</ProductCategory>
            <StyledButton size='large' color='primary' onClick={handleAddToCart} variant='contained'>
              Add to Cart
            </StyledButton>
          </ProductDetails>
        </ProductContainer>
      )}
      <ProductReviews reviews={product?.rating} />
    </Background>
  );
};
