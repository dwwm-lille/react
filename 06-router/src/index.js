import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './Pages/About';
import Home from './Pages/Home';
import Hello from './Pages/Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/bonjour/:name" element={<Hello />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
