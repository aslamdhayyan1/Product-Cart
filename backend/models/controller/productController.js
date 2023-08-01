const Cart = [];

const addToCart = (productId) => {
  // Find the product by ID
  const productToAdd = Product.findById(productId);

  // Check if the product is already in the cart
  if (!Cart.some((item) => item._id === productId)) {
    Cart.push(productToAdd);
  }
};

const removeFromCart = (productId) => {
  const indexToRemove = Cart.findIndex((item) => item._id === productId);
  if (indexToRemove !== -1) {
    Cart.splice(indexToRemove, 1);
  }
};

module.exports = { addToCart, removeFromCart };
