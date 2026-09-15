import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name} - ${item.price}</p>
          </div>
        ))
      )}
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 19.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 29.99 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 39.99 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <h1>React Store</h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default App;
