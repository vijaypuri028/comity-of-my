import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavState from './context/admin/NavState';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavState>
      <App />
    </NavState>
  </React.StrictMode>
);