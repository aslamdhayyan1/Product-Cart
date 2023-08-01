import React from 'react';

const Product = ({ product, addToCart, removeFromCart }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      {product.inCart ? (
        <button onClick={() => removeFromCart(product._id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
