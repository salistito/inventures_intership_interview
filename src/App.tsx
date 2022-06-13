import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Description from './components/Description';
import ProductsWrapper from './components/ProductList';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Description></Description>
      <ProductsWrapper></ProductsWrapper>
    </div>
  );
}

export default App;
