import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Container/Home';
import ProductCard from './Container/ProductCard';
import Offer from './Container/Offer';
import OrderPlaced from './Component/OrderPlaced/OrderPlaced';

function App() {
  return (
     <Router>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/offers" element={<Offer />} />
     <Route path="/productcart" element={<ProductCard />} />
     <Route path="/orderconfirm" element={<OrderPlaced />} />
     </Routes>
   </Router>
  );
}

export default App;
