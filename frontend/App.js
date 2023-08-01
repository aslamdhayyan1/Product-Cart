import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles.css";
import Cart from './components/Cart';
import Product from './components/Product';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Cart Functionality</h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product._id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
