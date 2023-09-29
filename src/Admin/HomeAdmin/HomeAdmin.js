import React from 'react'
import './Admin.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
const HomeAdmin = () => {
    return (
        <>
            <div id="main-wrapper">
                <Header/>
                <Sidebar/>
                <Content/>
                <Footer/>
            </div>

{/* <div id="main-wrapper">
<div class="nav-header">
    <a href="#" class="brand-logo">
            <img class="w-100" src="https://beta.shop-loyalty.com/images/logo.png"/>


    </a>
    <div class="nav-control">
        <div class="hamburger">
            <span class="line"></span><span class="line"></span><span class="line"></span>
        </div>
    </div>
</div>
<div class="header">
    <div class="header-content">
        <nav class="navbar navbar-expand">
            <div class="collapse navbar-collapse justify-content-between">
                <div class="header-left">
                    <div class="nav-item">
                        <div class="input-group search-area">
                            <input type="text" class="form-control" placeholder="Search here"/>
                            <span class="input-group-text"><a href="javascript:void(0)"><i class="flaticon-381-search-2"></i></a></span>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav header-right ">
                    
                    
                
                    <li class="nav-item dropdown  header-profile">
                        <a class="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                            <img src="img/user-profile.png" width="56" alt=""/>
                        </a>
                        
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
</div>
<div class="deznav">
    <div class="deznav-scroll">
       <ul class="metismenu" id="menu">

             <li><a class="ai-icon" href="index.html" aria-expanded="false">
                    <img class="w-20px" src="img/vendor.png"/>
                    <span class="nav-text">Dashbaord</span>
                </a>
               
            </li>
           
           <li><a class="ai-icon" href="rolemaster.html" aria-expanded="false">
                    <img class="w-20px" src="img/clientmaster.png"/>
                    <span class="nav-text">Role Master</span>
                </a>
               
            </li>

            <li><a class="ai-icon" href="usermaster.html" aria-expanded="false">
                    <img class="w-20px" src="img/clientmaster.png"/>
                    <span class="nav-text">User Master</span>
                </a>
               
            </li>
           
            <li><a href="productcata.html" class="ai-icon" aria-expanded="false">
                    <img class="w-20px" src="img/clists.png"/>
                    <span class="nav-text">Product Categories</span>
                </a>
            </li>

             <li><a href="productcatalouge.html" class="ai-icon" aria-expanded="false">
                    <img class="w-20px" src="img/clists.png"/>
                    <span class="nav-text">Product Catalouge</span>
                </a>
            </li>

<li><a href="orders.html" class="ai-icon" aria-expanded="false">
                    <img class="w-20px" src="img/clists.png"/>
                    <span class="nav-text">Orders</span>
                </a>
            </li>

            <li><a href="CMS.html" class="ai-icon" aria-expanded="false">
                    <img class="w-20px" src="img/clists.png"/>
                    <span class="nav-text">CMS</span>
                </a>
            </li>

             <li><a href="blog.html" class="ai-icon" aria-expanded="false">
                    <img class="w-20px" src="img/blog.png"/>
                    <span class="nav-text">Blog Master</span>
                </a>
            </li>


             <li><a href="faq.html" class="ai-icon" aria-expanded="false">
                    <img class="w-20px" src="img/faq.png"/>
                    <span class="nav-text">FAQ'S Master</span>
                </a>
            </li>


             <li><a href="contactlist.html" class="ai-icon" aria-expanded="false">
                    <img class="w-20px" src="img/cnlist.png"/>
                    <span class="nav-text">Contacted List Master</span>
                </a>
            </li>

             <li><a href="customerlist.html" class="ai-icon" aria-expanded="false">
                    <img class="w-20px" src="img/cnlist.png"/>
                    <span class="nav-text">Customer List</span>
                </a>
            </li>
            
             <li><a href="emailtemplates.html" class="ai-icon" aria-expanded="false">
                    <img class="w-20px" src="img/cnlist.png"/>
                    <span class="nav-text">Email Templates</span>
                </a>
            </li>
          
          
           
           
        </ul>
        
    </div>
</div>
<div class="content-body">
    <div class="container-fluid">
        
        <div class="row">
            <div class="col-xl-6">
                <div class="row">
                    <div class="col-xl-6 col-sm-6">
                        <div class="card">
                            <div class="card-body d-flex align-items-center justify-content-between">
                                <div class="menu">
                                    <span class="font-w500 fs-16 d-block mb-2">Categories</span>
                                    <h2>45</h2>
                                </div>	
                                <div class="d-inline-block position-relative donut-chart-sale">
                                    <span class="donut1" data-peity='{ "fill": ["rgb(0, 114, 253)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/8</span>
                                    <small class="text-black">
                                        <img class="w-35px" src="img/category.png"/>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-sm-6">
                        <div class="card">
                            <div class="card-body d-flex align-items-center justify-content-between">
                                <div class="menu">
                                    <span class="font-w500 fs-16 d-block mb-2">Products</span>
                                    <h2>85</h2>
                                </div>	
                                <div class="d-inline-block position-relative donut-chart-sale">
                                    <span class="donut1" data-peity='{ "fill": ["rgb(0, 114, 253)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/6</span>
                                    <small class="text-black">
                                        <img class="w-35px" src="img/product.png"/>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-sm-6">
                        <div class="card">
                            <div class="card-body d-flex align-items-center justify-content-between">
                                <div class="menu">
                                    <span class="font-w500 fs-16 d-block mb-2">Customers</span>
                                    <h2>247</h2>
                                </div>	
                                <div class="d-inline-block position-relative donut-chart-sale">
                                    <span class="donut1" data-peity='{ "fill": ["rgb(0, 114, 253)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/8</span>
                                    <small class="text-black">
                                        <img class="w-35px" src="img/customer.png"/>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-sm-6">
                        <div class="card">
                            <div class="card-body d-flex align-items-center justify-content-between">
                                <div class="menu">
                                    <span class="font-w500 fs-16 d-block mb-2">Orders</span>
                                    <h2>872</h2>
                                </div>	
                                <div class="d-inline-block position-relative donut-chart-sale">
                                    <span class="donut1" data-peity='{ "fill": ["rgb(0, 114, 253)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/7</span>
                                    <small class="text-black">
            <img class="w-35px" src="img/category.png"/>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header border-0 flex-wrap pb-0">
                        <div class="mb-sm-0 mb-2">	
                            <h4 class="fs-20">Today’s Revenue</h4>
                            <span>Graph data is based on full system manners</span>
                        </div>	
                        <div>
                            <h2 class="font-w700 mb-0">₹ 24,956</h2>	
                        <p class="mb-0 font-w700"><span class="text-success">0,5% </span>than last day</p>
                        </div>
                    </div>
                    <div class="card-body py-0">
                        <div id="revenueChart" class="revenueChart"></div>
                    </div>
                </div>
            </div>
            
            <div class="col-xl-12 col-xxl-12">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header border-0  flex-wrap">
                                <div>
                                    <h4 class="fs-20 mb-1">Active User's</h4>
                                    <span>Graph data is based on full system manners</span>
                                </div>	
                                <div class="d-flex">
                                    <div class="card-action coin-tabs mt-3 mt-sm-0">
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" data-bs-toggle="tab" href="#Monthly" role="tab">Monthly</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link " data-bs-toggle="tab" href="#Daily" role="tab" >Daily</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" href="#Today" role="tab" >Today</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="dropdown custom-dropdown mb-0 ms-3">
                                        <div class="btn sharp tp-btn dark-btn" data-bs-toggle="dropdown">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void(0);">Details</a>
                                            <a class="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pb-2">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="Monthly">
                                        <div id="chartTimeline1" class="chart-timeline"></div>
                                    </div>	
                                    <div class="tab-pane fade " id="Daily">
                                        <div id="chartTimeline2" class="chart-timeline"></div>
                                    </div>
                                    <div class="tab-pane fade " id="Today">
                                        <div id="chartTimeline3" class="chart-timeline"></div>
                                    </div>
                                </div>
                            </div>	
                        </div>	
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</div>
<div class="footer">

    <div class="copyright">
        <p>Copyright © LC Reward Dev &amp; Developed by <a href="#" target="_blank">Way2web World</a> 2023</p>
    </div>
</div>



</div> */}
        </>
    )
}

export default HomeAdmin
