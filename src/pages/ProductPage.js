import React from 'react';
import ProductDetail from '../components/ProductDetail';

const ProductPage = ({ match }) => {
  const { productId } = match.params;

  return (
    <div>
      <ProductDetail productId={productId} />
    </div>
  );
};

export default ProductPage;
