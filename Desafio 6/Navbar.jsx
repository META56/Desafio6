import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ total }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="ms-auto">
            <Link to="/cart" className="btn btn-outline-success">
              🛒 Total: ${total}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

import React from 'react';
import { useCart } from '../CartContext';

const Navbar = () => {
  const { calculateTotal } = useCart();
  const total = calculateTotal();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Pizzería Mamma Mia</a>
      <span className="navbar-text">
        Total: <strong>${total}</strong>
      </span>
    </nav>
  );
};

import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);

  return (
    <CarritoContext.Provider value={{ productos, agregarProducto, precioTotal }}>
      {children}
    </CarritoContext.Provider>
  );
};
import React from 'react';
import { CarritoProvider } from './CarritoContext';
import Navbar from './Navbar';
import Home from './Home'; 

function App() {
  return (
    <CarritoProvider>
      <Navbar />
      <Home />
     
    </CarritoProvider>
  );
}


import React from 'react';
import { useCarrito } from './CarritoContext';

const Navbar = () => {
  const { precioTotal } = useCarrito();

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Perfil</li>
        <li>Carrito</li>
      </ul>
      <div>
        <span>Total: ${precioTotal.toFixed(2)}</span>
      </div>
    </nav>
  );
};

import React from 'react';
import { useCarrito } from './CarritoContext';

const PizzaCard = ({ pizza }) => {
  const { agregarProducto } = useCarrito();

  const manejarAgregar = () => {
    agregarProducto(pizza);
  };

  return (
    <div>
      <h3>{pizza.nombre}</h3>
      <p>${pizza.precio}</p>
      <button onClick={manejarAgregar}>Agregar al carrito</button>
    </div>
  );
};
// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>  {/* Link to the Cart page */}
    </nav>
  );
};
import React from "react";
import { useTotal } from "./App";

function Navbar() {
  const { total } = useTotal();

  return (
    <nav>
      <h3>Mi Pizzería</h3>
      <div>Total: ${total.toFixed(2)}</div>
    </nav>
  );
}

export default Navbar;











