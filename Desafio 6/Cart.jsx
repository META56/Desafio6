// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
import React, { useState, useEffect } from "react";
import { useTotal } from "./App";

function Cart() {
  const { total, updateTotal } = useTotal();
  const [items, setItems] = useState([
    { name: "Pizza Margherita", price: 10, quantity: 1 },
    { name: "Pizza Pepperoni", price: 12, quantity: 1 },
  ]);

 
  useEffect(() => {
    const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    updateTotal(newTotal);
  }, [items, updateTotal]);

  const handleQuantityChange = (index, delta) => {
    const newItems = [...items];
    newItems[index].quantity += delta;
    setItems(newItems);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => handleQuantityChange(index, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(index, 1)}>+</button>
        </div>
      ))}
      <div>Total: ${total.toFixed(2)}</div>
    </div>
  );
}

export default Cart;




