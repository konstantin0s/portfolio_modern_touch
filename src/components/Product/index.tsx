import React from 'react';
import { Link } from 'react-router-dom';
import { CardStyles } from './styles';

export const Product = ({ product }: any) => {
  return (
    <div style={CardStyles.card as React.CSSProperties}>
      <h2 style={CardStyles.title}>{product.title}</h2>
      <p style={CardStyles.price}>${product.price.toFixed(2)}</p>
      <Link to={`/products/${product.id}`} style={CardStyles.link}>
        View Details
      </Link>
    </div>
  );
};
