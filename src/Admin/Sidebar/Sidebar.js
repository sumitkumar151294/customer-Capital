import React from 'react'
import vendor from '../../assets/img/vendor.png'
import allocation from '../../assets/img/allocation.png'
import clientmaster from '../../assets/img/clientmaster.png'
import rolemaster from '../../assets/img/clientmaster.png'
import clists from '../../assets/img/clists.png'
import blog from '../../assets/img/blog.png'
import faq from '../../assets/img/faq.png'
import cnlists from '../../assets/img/cnlist.png'
import { Link, useLocation } from 'react-router-dom'


const Sidebar = () => {
    const location = useLocation();
    return (
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    <li className={location.pathname === '/LC-admin' ? 'mm-active' : ''}>
                        <Link to="/LC-admin" className="ai-icon" aria-expanded="false">
                            <img className="w-20px" src={vendor} alt="Vendor" />
                            <span className="nav-text">Dashboard</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/vendornmaster' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/vendornmaster" className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={vendor} />
                        <span className="nav-text">Vendor Master</span>
                    </Link>

                    </li>

                    <li className={location.pathname === '/LC-admin/allocationmaster' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/allocationmaster" className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={allocation} />
                        <span className="nav-text">Allocated Master</span>
                    </Link>

                    </li>

                    <li className={location.pathname === '/LC-admin/clientmaster' ? 'mm-active' : ''}>
                        <Link to='/LC-admin/clientmaster' className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={clientmaster} />
                        <span className="nav-text">Client Master</span>
                    </Link>

                    </li>

                    <li className={location.pathname === '/LC-admin/rolemaster' ? 'mm-active' : ''}>
                        <Link to='/LC-admin/rolemaster' className="ai-icon" aria-expanded="false">
                        <img class="w-20px" src={rolemaster} />
                        <span class="nav-text">Role Master</span>
                    </Link>

                    </li>

                    <li className={location.pathname === '/LC-admin/productcata' ? 'mm-active' : ''}>
                        <Link to='/LC-admin/productcata' className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={clists} />
                        <span className="nav-text">Product Categories</span>
                    </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/productcatalouge' ? 'mm-active' : ''}>
                        <Link to='/LC-admin/productcatalouge' className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={clists} />
                        <span className="nav-text">Product Catalouge</span>
                    </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/orders' ? 'mm-active' : ''}>
                        <Link to='/LC-admin/orders' className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={clists} />
                        <span className="nav-text">Orders</span>
                    </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/cms' ? 'mm-active' : ''}>
                        <Link to='/LC-admin/cms' className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={clists} />
                        <span className="nav-text">CMS</span>
                    </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/blog' ? 'mm-active' : ''}>
                        <Link to='/LC-admin/blog' className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={blog} />
                        <span className="nav-text">Blog Master</span>
                    </Link>
                    </li>


                    <li className={location.pathname === '/LC-admin/faqs' ? 'mm-active' : ''}>
                        <Link to='/LC-admin/faqs' className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={faq} />
                        <span className="nav-text">FAQ'S Master</span>
                    </Link>
                    </li>


                    <li className={location.pathname === '/LC-admin/contactlist' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/contactlist" className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={cnlists} />
                        <span className="nav-text">Contacted List Master</span>
                    </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/customerlist' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/customerlist" className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={cnlists} />
                        <span className="nav-text">Customer List</span>
                    </Link>
                    </li>

                    <li className={location.pathname === '/LC-admin/emailtemplate' ? 'mm-active' : ''}>
                        <Link to="/LC-admin/emailtemplate" className="ai-icon" aria-expanded="false">
                        <img className="w-20px" src={cnlists} />
                        <span className="nav-text">Email Templates</span>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar
