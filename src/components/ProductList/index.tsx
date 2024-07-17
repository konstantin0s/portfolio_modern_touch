import React, { useEffect, useState } from 'react';
import { Product } from '../Product';
import {
  productsLoadingSelector,
  productsListSelector,
} from '../../containers/App/selectors';
import { useSelector } from 'react-redux';
import { Container, Header, Loading, ProductGrid } from './styled';

export const ProductList = () => {
  const productsList = useSelector(productsListSelector);
  const loading = useSelector(productsLoadingSelector);
  const [products, setProducts]: any = useState(productsList);

  useEffect(() => {
    setProducts(productsList);
  }, [productsList]);

  return (
    <Container>
      <Header>Welcome to Code's E-Commerce Store</Header>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <ProductGrid>
          {products?.map((product: any) => (
            <Product key={product?.id} product={product} />
          ))}
        </ProductGrid>
      )}
    </Container>
  );
};
