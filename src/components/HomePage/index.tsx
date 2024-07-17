import React from 'react';
import {
  HomeContainer,
  Overlay,
  Content,
  Title,
  StyledLink,
  Button,
} from './styled';

export const HomePage = () => {
  return (
    <HomeContainer>
      <Overlay />
      <Content>
        <Title>Welcome to Our Store</Title>
        <StyledLink to='/products'>
          <Button>View Products</Button>
        </StyledLink>
      </Content>
    </HomeContainer>
  );
};
