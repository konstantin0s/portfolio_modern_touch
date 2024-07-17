import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../../styles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { ProductList } from '../../components/ProductList';
import { CheckoutPage } from '../../components/CheckoutPage';
import { CartPage } from '../../components/CartPage';
import { HomePage } from '../../components/HomePage';
import { fetchProducts } from '../api';
import { useDispatch } from 'react-redux';
import { actions } from './slice';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductPage } from '../ProductPage/Index';

const Container = styled.div`
  text-align: center;
`;

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.productsLoading(true));
    Promise.resolve(
      fetchProducts().then((res) => dispatch(actions.setProducts(res)))
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Breadcrumbs />
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
          </Routes>
        </Router>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
};
