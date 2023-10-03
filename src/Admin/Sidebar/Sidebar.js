import React from 'react'
import vendor from '../../assets/img/vendor.png'
import allocation from '../../assets/img/allocation.png'
import clientmaster from '../../assets/img/clientmaster.png'
import rolemaster from '../../assets/img/clientmaster.png'
import clists from '../../assets/img/clists.png'
import blog from '../../assets/img/blog.png'
import faq from '../../assets/img/faq.png'
import cnlists from '../../assets/img/cnlist.png'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="deznav">
    <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
            <li><Link to="/LC-admin" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={vendor}/>
                    <span className="nav-text">Dashbaord</span>
            </Link>

            </li>

            <li><Link to="/LC-admin/vendornmaster" className="ai-icon" href="vendormaster.html" aria-expanded="false">
                <img className="w-20px" src={vendor}/>
                    <span className="nav-text">Vendor Master</span>
            </Link>

            </li>

            <li><Link to="/LC-admin/allocationmaster" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={allocation}/>
                    <span className="nav-text">Allocated Master</span>
            </Link>

            </li>

            <li><a className="ai-icon" href="clientmaster.html" aria-expanded="false">
                <img className="w-20px" src={clientmaster}/>
                    <span className="nav-text">Client Master</span>
            </a>

            </li>

            <li><Link to='/LC-admin/rolemaster'  className="ai-icon" aria-expanded="false">
                            <img class="w-20px" src={rolemaster} />
                            <span class="nav-text">Role Master</span>
                        </Link>
                       
                    </li>

            <li><a href="productcata.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={clists}/>
                    <span className="nav-text">Product Categories</span>
            </a>
            </li>

            <li><a href="productcatalouge.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={clists}/>
                    <span className="nav-text">Product Catalouge</span>
            </a>
            </li>

            <li><a href="orders.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={clists}/>
                    <span className="nav-text">Orders</span>
            </a>
            </li>

            <li><Link to='/LC-admin/cms'  className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={clists}/>
                    <span className="nav-text">CMS</span>
            </Link>
            </li>

            <li><a href="blog.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={blog}/>
                    <span className="nav-text">Blog Master</span>
            </a>
            </li>


            <li><a href="faq.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={faq}/>
                    <span className="nav-text">FAQ'S Master</span>
            </a>
            </li>


            <li><a href="contactlist.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={cnlists}/>
                    <span className="nav-text">Contacted List Master</span>
            </a>
            </li>

            <li><a href="customerlist.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={cnlists}/>
                    <span className="nav-text">Customer List</span>
            </a>
            </li>

            <li><a href="emailtemplates.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src={cnlists}/>
                    <span className="nav-text">Email Templates</span>
            </a>
            </li>
        </ul>
    </div>
</div>

  )
}

export default Sidebar
