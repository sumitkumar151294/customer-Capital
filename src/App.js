import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Container/Home';
import ProductCard from './Container/ProductCard';
import Offer from './Container/Offer';
import OrderPlaced from './Component/OrderPlaced/OrderPlaced';
import CartInfo from './Container/CartInfo';
<<<<<<< HEAD
=======

>>>>>>> 6b781cd241ace3a5b03d173cd2d6149ede83640a

function App() {
  return (
     <Router>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/offers" element={<Offer />} />
     <Route path="/productcart" element={<ProductCard />} />
     <Route path="/orderconfirm" element={<OrderPlaced />} />
     <Route path="/cartInfo" element={<CartInfo />} />
<<<<<<< HEAD

=======
>>>>>>> 6b781cd241ace3a5b03d173cd2d6149ede83640a
     </Routes>
   </Router>
  );
}

export default App;
