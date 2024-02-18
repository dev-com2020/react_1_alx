import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Routes } from './Routex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
);
