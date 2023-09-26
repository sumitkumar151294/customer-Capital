import React from 'react'

const Sidebar = () => {
  return (
    <div className="deznav">
    <div className="deznav-scroll">
        <ul className="metismenu" id="menu">

            <li><a className="ai-icon" href="index.html" aria-expanded="false">
                <img className="w-20px" src="img/vendor.png"/>
                    <span className="nav-text">Dashbaord</span>
            </a>

            </li>

            <li><a className="ai-icon" href="vendormaster.html" aria-expanded="false">
                <img className="w-20px" src="img/vendor.png"/>
                    <span className="nav-text">Vendor Master</span>
            </a>

            </li>




            <li><a className="ai-icon" href="allocationmaster.html" aria-expanded="false">
                <img className="w-20px" src="img/allocation.png"/>
                    <span className="nav-text">Allocated Master</span>
            </a>

            </li>

            <li><a className="ai-icon" href="clientmaster.html" aria-expanded="false">
                <img className="w-20px" src="img/clientmaster.png"/>
                    <span className="nav-text">Client Master</span>
            </a>

            </li>

            <li><a href="productcata.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src="img/clists.png"/>
                    <span className="nav-text">Product Categories</span>
            </a>
            </li>

            <li><a href="productcatalouge.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src="img/clists.png"/>
                    <span className="nav-text">Product Catalouge</span>
            </a>
            </li>

            <li><a href="orders.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src="img/clists.png"/>
                    <span className="nav-text">Orders</span>
            </a>
            </li>

            <li><a href="CMS.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src="img/clists.png"/>
                    <span className="nav-text">CMS</span>
            </a>
            </li>

            <li><a href="blog.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src="img/blog.png"/>
                    <span className="nav-text">Blog Master</span>
            </a>
            </li>


            <li><a href="faq.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src="img/faq.png"/>
                    <span className="nav-text">FAQ'S Master</span>
            </a>
            </li>


            <li><a href="contactlist.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src="img/cnlist.png"/>
                    <span className="nav-text">Contacted List Master</span>
            </a>
            </li>

            <li><a href="customerlist.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src="img/cnlist.png"/>
                    <span className="nav-text">Customer List</span>
            </a>
            </li>

            <li><a href="emailtemplates.html" className="ai-icon" aria-expanded="false">
                <img className="w-20px" src="img/cnlist.png"/>
                    <span className="nav-text">Email Templates</span>
            </a>
            </li>




        </ul>

    </div>
</div>

  )
}

export default Sidebar
