import React from 'react'
import dashboard from '../../assets/img/Dashboard.png'
import vendor from '../../assets/img/vendor.png'
import allocation from '../../assets/img/allocation.png'
import clientmaster from '../../assets/img/clientmaster.png'
import role from '../../assets/img/role.png'
import productcate from '../../assets/img/product-cate.png'
import product from '../../assets/img/product.png'
import orders from '../../assets/img/orders.png'
import CMS from '../../assets/img/CMS.png'
import blog from '../../assets/img/blog.png'
import FAQ from '../../assets/img/faq.png'
import contact from '../../assets/img/contact.png'
import customer from '../../assets/img/customer.png'
import email from '../../assets/img/email.png'


import { Link, useLocation } from 'react-router-dom'


const Sidebar = () => {
    const location = useLocation();
    return (
        <div class="deznav">
            <div class="deznav-scroll">
                <ul class="metismenu" id="menu">

                    <li className={location.pathname === '/LC-admin' ? 'mm-active' : ''}>
                        <Link class="ai-icon" to="/LC-admin" aria-expanded="false">
                            <img class="w-20px" src={dashboard} alt="file not exist" />
                            <span class="nav-text ps-1">Dashbaord</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/vendormaster' ? 'mm-active' : ''}>
                        <Link class="ai-icon" to="/LC-admin/vendormaster" aria-expanded="false">
                            <img class="w-20px" src={vendor} alt="file not exist" />
                            <span class="nav-text ps-1">Supplier Master</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/allocationmaster' ? 'mm-active' : ''}>
                        <Link class="ai-icon" to="/LC-admin/allocationmaster" aria-expanded="false">
                            <img class="w-20px" src={allocation} alt="file not exist" />
                            <span class="nav-text ps-1">Allocated Master</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/clientmaster' ? 'mm-active' : ''}>
                        <Link class="ai-icon" to="/LC-admin/clientmaster" aria-expanded="false">
                            <img class="w-20px" src={clientmaster} alt="file not exist" />
                            <span class="nav-text ps-1">Client Master</span>
                        </Link>
                    </li>
                    <li className={location.pathname === '/LC-admin/usermaster' ? 'mm-active' : ''}>
                        <Link class="ai-icon" to="/LC-admin/usermaster" aria-expanded="false">
                            <img class="w-20px" src={clientmaster} alt="file not exist" />
                            <span class="nav-text ps-1">User Master</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/rolemaster' ? 'mm-active' : ''}>
                        <Link class="ai-icon" to="/LC-admin/rolemaster" aria-expanded="false">
                            <img class="w-20px" src={role} alt="file not exist" />
                            <span class="nav-text ps-1">Role Master</span>
                        </Link>
                    </li>
                    <li className={location.pathname === '/LC-admin/createcategories' ? 'mm-active' : ''}>
                        <Link class="ai-icon" to="/LC-admin/createcategories" aria-expanded="false">
                            <img class="w-20px" src={productcate} alt="file not exist" />
                            <span class="nav-text ps-1">Create Categories</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/productcata' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/productcata" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={productcate} alt="file not exist" />
                            <span class="nav-text ps-1">Product Categories</span>
                        </Link>
                    </li>
                    <li className={location.pathname === '/LC-admin/suppliercategory' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/suppliercategory" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={productcate} alt="file not exist" />
                            <span class="nav-text ps-1">Supplier Category List</span>
                        </Link>
                    </li>
                    <li className={location.pathname === '/LC-admin/productcatalouge' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/productcatalouge" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={product} alt="file not exist" />
                            <span class="nav-text ps-1">Product Catalouge</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/orders' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/orders" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={orders} alt="file not exist" />
                            <span class="nav-text ps-1">Orders</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/CMS' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/CMS" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={CMS} alt="file not exist" />
                            <span class="nav-text ps-1">CMS</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/blog' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/blog" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={blog} alt="file not exist" />
                            <span class="nav-text ps-1">Blog Master</span>
                        </Link>
                    </li>


                    <li className={location.pathname === '/LC-admin/faqs' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/faqs" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={FAQ} alt="file not exist" />
                            <span class="nav-text ps-1">FAQ'S Master</span>
                        </Link>
                    </li>


                    <li className={location.pathname === '/LC-admin/contactlist' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/contactlist" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={contact} alt="file not exist" />
                            <span class="nav-text ps-1">Contacted List Master</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/customerlist' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/customerlist" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={customer} alt="file not exist" />
                            <span class="nav-text ps-1">Customer List</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/emailtemplates' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/emailtemplates" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={email} alt="file not exist" />
                            <span class="nav-text ps-1">Email Templates</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/supplierbrandlist' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/supplierbrandlist" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={email} alt="file not exist" />
                            <span class="nav-text ps-1">Supplier Brand List</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/brandcatalogue' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/brandcatalogue" class="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={email} alt="file not exist" />
                            <span class="nav-text ps-1">Brand Catalogue</span>
                        </Link>
                    </li>


                </ul>

            </div>
        </div>

    )
}

export default Sidebar
