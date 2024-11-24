// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

ReactDOM.render(
  <Router>
    <App /> {/* Tu componente App es el contenedor principal */}
  </Router>,
  document.getElementById('root')
);
