import React from "react";
import dashboard from "../../assets/img/Dashboard.png";
import vendor from "../../assets/img/vendor.png";
import allocation from "../../assets/img/allocation.png";
import clientmaster from "../../assets/img/clientmaster.png";
import role from "../../assets/img/role.png";
import productcate from "../../assets/img/product-cate.png";
import product from "../../assets/img/product.png";
import orders from "../../assets/img/orders.png";
import clists from "../../assets/img/orders.png";
import CMS from "../../assets/img/CMS.png";
import blog from "../../assets/img/blog.png";
import FAQ from "../../assets/img/faq.png";
import contact from "../../assets/img/contact.png";
import customer from "../../assets/img/customer.png";
import email from "../../assets/img/email.png";
import clist from "../../assets/img/clists.png"
import cnlist from '../../assets/img/cnlist.png'
import faq from '../../assets/img/faq.png'


import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/LC-admin");
  console.log(isAdmin)
  return (
    <div class="deznav">
      <div class="deznav-scroll">
        <ul class="metismenu" id="menu">

          {isAdmin && (
            <>
              {/* Admin Sidebar */}            
              <li
                className={location.pathname === "/LC-admin" ? "mm-active" : ""}
              >
                <Link class="ai-icon" to="/LC-admin" aria-expanded="false">
                  <img class="w-20px" src={dashboard} alt="file not exist" />
                  <span class="nav-text ps-1">Dashbaord</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-admin/supplymaster"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  class="ai-icon"
                  to="/LC-admin/supplymaster"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={vendor} alt="file not exist" />
                  <span class="nav-text ps-1">Supplier Master</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-admin/supplierbrandlist"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  to="/LC-admin/supplierbrandlist"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={productcate} alt="file not exist" />
                  <span class="nav-text ps-1">Supplier Brand List</span>
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/LC-admin/createcategories"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  class="ai-icon"
                  to="/LC-admin/createcategories"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={productcate} alt="file not exist" />
                  <span class="nav-text ps-1">Create Categories</span>
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/LC-admin/rolemaster"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  class="ai-icon"
                  to="/LC-admin/rolemaster"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={role} alt="file not exist" />
                  <span class="nav-text ps-1">Role Master</span>
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/LC-admin/clientmaster"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  class="ai-icon"
                  to="/LC-admin/clientmaster"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clientmaster} alt="file not exist" />
                  <span class="nav-text ps-1">Client Master</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-admin/usermaster"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  class="ai-icon"
                  to="/LC-admin/usermaster"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clientmaster} alt="file not exist" />
                  <span class="nav-text ps-1">User Master</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-admin/brandcatalogue"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  to="/LC-admin/brandcatalouge"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={product} alt="file not exist" />
                  <span class="nav-text ps-1">Brand Catalouge</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-admin/orders" ? "mm-active" : ""
                }
              >
                <Link
                  to="/LC-admin/orders"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={orders} alt="file not exist" />
                  <span class="nav-text ps-1">Orders</span>
                </Link>
              </li>
            </>
          )}

          {!isAdmin && (
            <>
              {/* User-Admin Sidebar */}
              <li
                className={
                  location.pathname === "/LC-user-admin" ? "mm-active" : ""
                }
              >
                <Link to="/LC-user-admin" class="ai-icon" aria-expanded="false">
                  <img class="w-20px" src={vendor} alt="file not exist" />
                  <span class="nav-text ps-1">Dashboard</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-user-admin/brandcatalouge" ? "mm-active" : ""
                }
              >
                <Link
                  to="/LC-user-admin/brandcatalouge"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clist} alt="file not exist" />
                  <span class="nav-text ps-1">Brand Catalouge</span>
                </Link>
              </li>


              <li
                className={
                  location.pathname === "/LC-user-admin/orders" ? "mm-active" : ""
                }
              >
                <Link
                  to="/LC-user-admin/orders"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clist} alt="file not exist" />
                  <span class="nav-text ps-1">Orders</span>
                </Link>
              </li>


              <li
                className={
                  location.pathname === "/LC-user-admin/commissionreport"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  to="/LC-user-admin/commissionreport"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clist} alt="file not exist" />
                  <span class="nav-text ps-1">Client Commission Report</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-user-admin/abandonedcart  "
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  to="/LC-user-admin/abandonedcart  "
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clist} alt="file not exist" />
                  <span class="nav-text ps-1">Abandoned Cart Report</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-user-admin/failedorders" ? "mm-active" : ""
                }
              >
                <Link
                  to="/LC-user-admin/failedorders"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clist} alt="file not exist" />
                  <span class="nav-text ps-1">Failed Orders</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-user-admin/customerlist  "
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  to="/LC-user-admin/customerlist  "
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={cnlist} alt="file not exist" />
                  <span class="nav-text ps-1">Customer List</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-user-admin/emaileventmaster  "
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  to="/LC-user-admin/emaileventmaster  "
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={cnlist} alt="file not exist" />
                  <span class="nav-text ps-1">Email Event Master</span>
                </Link>
              </li>



              <li
                className={
                  location.pathname === "/LC-user-admin/CMS" ? "mm-active" : ""
                }
              >
                <Link
                  to="/LC-user-admin/CMS"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clist} alt="file not exist" />
                  <span class="nav-text ps-1">CMS</span>
                </Link>
              </li>



              <li
                className={
                  location.pathname === "/LC-user-admin/faqs" ? "mm-active" : ""
                }
              >
                <Link
                  to="/LC-user-admin/faqs"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={faq} alt="file not exist" />
                  <span class="nav-text ps-1">FAQ'S Master</span>
                </Link>
              </li>


              <li
                className={
                  location.pathname === "/LC-user-admin/bannermaster"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  to="/LC-user-admin/bannermaster"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clist} alt="file not exist" />
                  <span class="nav-text ps-1">Banner Master</span>
                </Link>
              </li>
              

              





              <li
                className={
                  location.pathname === "/LC-user-admin/offermaster  "
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  to="/LC-user-admin/offermaster  "
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clist} alt="file not exist" />
                  <span class="nav-text ps-1">Offer Master</span>
                </Link>
              </li>

              <li
                className={
                  location.pathname === "/LC-user-admin/addspecial"
                    ? "mm-active"
                    : ""
                }
              >
                <Link
                  to="/LC-user-admin/addspecial"
                  class="ai-icon"
                  aria-expanded="false"
                >
                  <img class="w-20px" src={clist} alt="file not exist" />
                  <span class="nav-text ps-1">Add Special</span>
                </Link>
              </li>


              

              


            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;