import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Container/Home';
import ProductCard from './Container/ProductCard';
import Offer from './Container/Offer';
import OrderPlaced from './Component/OrderPlaced/OrderPlaced';
import CartInfo from './Container/CartInfo';
import ContactUs from './Component/ContactUs/ContactUs'
import AboutUs from './Component/AboutUs/AboutUs'
import FAQs from './Component/FAQs/FAQs'
import Blog from './Component/Blog/Blog'
import MyProfile from './Component/MyProfile/MyProfile'
import Finalcart from './Component/Finalcart/Finalcart';
import FinalcartInfo from './Container/FinalcartInfo';





function App() {
  return (
     <Router>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/offers" element={<Offer />} />
     <Route path="/productcart" element={<ProductCard />} />
     <Route path="/orderconfirm" element={<OrderPlaced />} />
     <Route path="/cartInfo" element={<CartInfo />} />
     <Route path="/finalcart" element={<FinalcartInfo />} />

     <Route path="/contactus" element={<ContactUs />} />
     <Route path="/aboutus" element={<AboutUs />} />
     <Route path="/faqs" element={<FAQs />} />
     <Route path="/blog" element={<Blog />} />
     <Route path="/myprofile" element={<MyProfile />} />
     <Route path="/myorder" element={<MyProfile/>} />
     </Routes>
   </Router>
  );
}

export default App;
