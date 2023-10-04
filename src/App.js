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
import ClientMaster from './Admin/ClientMaster/ClientMaster';
import ProductCategory from './Admin/ProductCategory/ProductCategory';
import ProductCatalouge from './Admin/ProductCatalouge/ProductCatalouge';
import Orders from './Admin/Orders/Orders';
import Faqs from './Admin/Faqs/Faqs';
import Blog from './Admin/Blog/Blog';
import ContactListMaster from './Admin/ContactList/ContactListMaster';
import CustomerList from './Admin/CustomerList/CustomerList';
import Email from './Admin/Email/Email';

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
        <Route path="/LC-admin/clientmaster" element={<HomeAdmin Component={ClientMaster}/>} />
        <Route path="/LC-admin/productcata" element={<HomeAdmin Component={ProductCategory}/>} />
        <Route path="/LC-admin/productcatalouge" element={<HomeAdmin Component={ProductCatalouge}/>} />
        <Route path="/LC-admin/orders" element={<HomeAdmin Component={Orders}/>} />
        <Route path="/LC-admin/faqs" element={<HomeAdmin Component={Faqs}/>} />
        <Route path="/LC-admin/blog" element={<HomeAdmin Component={Blog}/>} />
        <Route path="/LC-admin/contactlist" element={<HomeAdmin Component={ContactListMaster}/>} />
        <Route path="/LC-admin/customerlist" element={<HomeAdmin Component={CustomerList}/>} />
        <Route path="/LC-admin/emailtemplate" element={<HomeAdmin Component={Email}/>} />
      </Routes>
    </Router>
  );
}

export default App;
