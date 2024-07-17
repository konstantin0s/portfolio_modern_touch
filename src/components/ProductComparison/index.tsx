import React from 'react';

export const ProductComparison = ({ products }: any) => {
  return (
    <div>
      <h3>Product Comparison</h3>
      {products.map((product: any) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p>{product.variants[0].price}</p>
        </div>
      ))}
    </div>
  );
};
