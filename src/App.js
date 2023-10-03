import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Container/Home';
import ProductCard from './Container/ProductCard';
import Offer from './Container/Offer';
import AllocationMaster from './Admin/AllocationMaster/AllocationMaster';
import OrderPlaced from '../src/Component/OrderPlaced/OrderPlaced'
import CartInfo from '../src/Container/CartInfo'
import Dashboard from './Admin/Dashboard/Dashboard';
import HomeAdmin from './Admin/HomeAdmin/HomeAdmin';
import VendorMaster from './Admin/VendorMaster/VendorMaster';
import RoleMaster from './Admin/RoleMaster/RoleMaster';
import CMS from './Admin/CMS/CMS';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/productcart" element={<ProductCard />} />
        <Route path="/orderconfirm" element={<OrderPlaced />} />
        <Route path="/cartInfo" element={<CartInfo />} />
        <Route path="/LC-admin" element={<HomeAdmin Component={Dashboard}/>} />
        <Route path="/LC-admin/vendornmaster" element={<HomeAdmin Component={VendorMaster}/>} />
        <Route path="/LC-admin/allocationmaster" element={<HomeAdmin Component={AllocationMaster}/>} />
        <Route path="/LC-admin/rolemaster" element={<HomeAdmin Component={RoleMaster}/>} />
        <Route path="/LC-admin/cms" element={<HomeAdmin Component={CMS}/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
