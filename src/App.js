import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Container/Home";
import ProductCard from "./Container/ProductCard";
import Offer from "./Container/Offer";
import AllocationMaster from "./Admin/AllocationMaster/AllocationMaster";
import OrderPlaced from "../src/Component/OrderPlaced/OrderPlaced";
import CartInfo from "../src/Container/CartInfo";
import Dashboard from "./Admin/Dashboard/Dashboard";
import HomeAdmin from "./Admin/HomeAdmin/HomeAdmin";
import VendorMaster from "./Admin/VendorMaster/VendorMaster";
import RoleMaster from "./Admin/RoleMaster/RoleMaster";
import CMS from "./admin-user/CMS/CMS";
import ClientMaster from "./Admin/ClientMaster/ClientMaster";
import ProductCategory from "./Admin/ProductCategory/ProductCategory";
import ProductCatalouge from "./Admin/ProductCatalouge/ProductCatalouge";
import Orders from "./Admin/Orders/Orders";
import Faqs from "./admin-user/Faqs/Faqs";
import Blog from "./Admin/Blog/Blog";
import ContactListMaster from "./Admin/ContactList/ContactListMaster";
import CustomerList from "./Admin/CustomerList/CustomerList";
import Email from "./Admin/Email/Email";
import ContactUs from "./Component/ContactUs/ContactUs";
import AboutUs from "./Component/AboutUs/AboutUs";
import FAQs from "./Component/FAQs/FAQs";
import Blogs from "./Component/Blogs/Blogs";
import MyProfile from "./Component/MyProfile/MyProfile";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import TermsofUse from "./Component/TermsofUse/TermsofUse";
import LoyaltyProgram from "./Component/LoyaltyProgram/LoyaltyProgram";
import Finalcart from "./Component/Finalcart/Finalcart";
import UserMaster from "./Admin/UserMaster/userMaster";
import CreateCategory from "./Admin/CreateCategory/CreateCategory";
import SupplierCategoryList from "./Admin/SupplierCategory/SupplierCategory";
import ClientCommissionReport from "./admin-user/commissionReport/clientCommission";
import AbandonedCartReport from "./admin-user/AbandonedCart/abandonedCart";
import Customerlist from "./admin-user/customerList/customerlist";
import OfferMasterComponent from "./admin-user/Offermaster/offerMaster";
import AddSpecial from "./admin-user/AddSpecial/AddSpecial";
import SupplierBrandList from "./Admin/SupplierBrandList/SupplierBrandList";
import BrandCatalogue from "./Admin/BrandCatalogue/BrandCatalogue";
import ProductDetail from "./Admin/ProductDetail/ProductDetail";
import BannerList from "./admin-user/bannerMaster/bannerMaster";
import EmailEventMaster from "./admin-user/EmailEventMaster/emailEventMaster";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    return window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* User Section */}
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/productcart" element={<ProductCard />} />
        <Route path="/orderconfirm" element={<OrderPlaced />} />
        <Route path="/cartInfo" element={<CartInfo />} />
        <Route path="/finalcart" element={<Finalcart />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofuse" element={<TermsofUse />} />
        <Route path="/loyaltyprogram" element={<LoyaltyProgram />} />

        {/* Admin Section */}
        <Route path="/LC-admin" element={<HomeAdmin Component={Dashboard} />} />
        <Route
          path="/LC-user-admin"
          element={<HomeAdmin Component={Dashboard} />}
        />

        <Route
          path="/LC-admin/vendormaster"
          element={<HomeAdmin Component={VendorMaster} />}
        />
        <Route
          path="/LC-admin/allocationmaster"
          element={<HomeAdmin Component={AllocationMaster} />}
        />
        <Route
          path="/LC-admin/rolemaster"
          element={<HomeAdmin Component={RoleMaster} />}
        />
        <Route
          path="/LC-user-admin/cms"
          element={<HomeAdmin Component={CMS} />}
        />
        <Route
          path="/LC-admin/clientmaster"
          element={<HomeAdmin Component={ClientMaster} />}
        />
        <Route
          path="/LC-admin/productcategory"
          element={<HomeAdmin Component={ProductCategory} />}
        />
        <Route
          path="/LC-admin/productcatalouge"
          element={<HomeAdmin Component={ProductCatalouge} />}
        />
        <Route
          path="/LC-admin/orders"
          element={<HomeAdmin Component={Orders} />}
        />
        <Route
          path="/LC-admin/supplierbrandlist"
          element={<HomeAdmin Component={SupplierBrandList} />}
        />
        <Route
          path="/LC-admin/brandcatalogue"
          element={<HomeAdmin Component={BrandCatalogue} />}
        />
        <Route
          path="/LC-admin/productdetail"
          element={<HomeAdmin Component={ProductDetail} />}
        />

        {/* User Admin Section */}
        <Route
          path="/LC-user-admin/addspecial"
          element={<HomeAdmin Component={AddSpecial} />}
        />
        <Route
          path="/LC-user-admin/commissionreport"
          element={<HomeAdmin Component={ClientCommissionReport} />}
        />
        <Route
          path="/LC-user-admin/abandonedcart"
          element={<HomeAdmin Component={AbandonedCartReport} />}
        />
        <Route
          path="/LC-user-admin/customerlist"
          element={<HomeAdmin Component={Customerlist} />}
        />
        <Route
          path="/LC-user-admin/offermaster"
          element={<HomeAdmin Component={OfferMasterComponent} />}
        />
        <Route
          path="/LC-user-admin/faqs"
          element={<HomeAdmin Component={Faqs} />}
        />
        <Route
          path="/LC-user-admin/bannermaster"
          element={<HomeAdmin Component={BannerList} />}
        />
        <Route path="/LC-admin/blog" element={<HomeAdmin Component={Blog} />} />
        <Route
          path="/LC-admin/contactlist"
          element={<HomeAdmin Component={ContactListMaster} />}
        />
        <Route
          path="/LC-admin/customerlist"
          element={<HomeAdmin Component={CustomerList} />}
        />
        <Route
          path="/LC-admin/emailtemplates"
          element={<HomeAdmin Component={Email} />}
        />
        <Route
          path="/LC-admin/usermaster"
          element={<HomeAdmin Component={UserMaster} />}
        />
        <Route
          path="/LC-admin/createcategories"
          element={<HomeAdmin Component={CreateCategory} />}
        />
        <Route
          path="/LC-admin/suppliercategory"
          e
          lement={<HomeAdmin Component={SupplierCategoryList} />}
        />
        <Route
          path="/LC-user-admin/emaileventmaster"
          element={<HomeAdmin Component={EmailEventMaster} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
