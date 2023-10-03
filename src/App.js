import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Container/Home';
import ProductCard from './Container/ProductCard';
import Offer from './Container/Offer';
import HomeAdmin from './Admin/HomeAdmin/HomeAdmin';
import OrderPlaced from '../src/Component/OrderPlaced/OrderPlaced'
import CartInfo from '../src/Container/CartInfo'

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/offers" element={<Offer />} />
    //     <Route path="/productcart" element={<ProductCard />} />
    //     <Route path="/orderconfirm" element={<OrderPlaced />} />
    //     <Route path="/cartInfo" element={<CartInfo />} />
    //     <Route path="/cartInfo" element={<CartInfo />} />
    //   </Routes>
    // </Router>
    <HomeAdmin />
  );
}

export default App;
