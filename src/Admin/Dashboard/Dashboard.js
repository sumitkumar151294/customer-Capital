import React from 'react'
import '../HomeAdmin/Admin.css'
import category from '../../assets/img/categories.png'
import product from '../../assets/img/product.png'
import customer from '../../assets/img/customer.png'

const Dashboard = () => {
    return (
        <div className="content-body">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-xl-6 col-sm-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center justify-content-between">
                                        <div className="menu">
                                            <span className="font-w500 fs-16 d-block mb-2">Categories</span>
                                            <h2>45</h2>
                                        </div>
                                        <div className="d-inline-block position-relative donut-chart-sale">
                                            <span className="donut1" data-peity='{ "fill": ["rgb(0, 114, 253)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/8</span>
                                            <small className="text-black">
                                                <img className="w-35px" src={category} />
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center justify-content-between">
                                        <div className="menu">
                                            <span className="font-w500 fs-16 d-block mb-2">Products</span>
                                            <h2>85</h2>
                                        </div>
                                        <div className="d-inline-block position-relative donut-chart-sale">
                                            <span className="donut1" data-peity='{ "fill": ["rgb(0, 114, 253)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/6</span>
                                            <small className="text-black">
                                                <img className="w-35px" src={product} />
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center justify-content-between">
                                        <div className="menu">
                                            <span className="font-w500 fs-16 d-block mb-2">Customers</span>
                                            <h2>247</h2>
                                        </div>
                                        <div className="d-inline-block position-relative donut-chart-sale">
                                            <span className="donut1" data-peity='{ "fill": ["rgb(0, 114, 253)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/8</span>
                                            <small className="text-black">
                                                <img className="w-35px" src={customer} />
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center justify-content-between">
                                        <div className="menu">
                                            <span className="font-w500 fs-16 d-block mb-2">Orders</span>
                                            <h2>872</h2>
                                        </div>
                                        <div className="d-inline-block position-relative donut-chart-sale">
                                            <span className="donut1" data-peity='{ "fill": ["rgb(0, 114, 253)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/7</span>
                                            <small className="text-black">
                                                <img className="w-35px" src={category} />
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header border-0 flex-wrap pb-0">
                                <div className="mb-sm-0 mb-2">
                                    <h4 className="fs-20">Today’s Revenue</h4>
                                    <span>Graph data is based on full system manners</span>
                                </div>
                                <div>
                                    <h2 className="font-w700 mb-0">₹ 24,956</h2>
                                    <p className="mb-0 font-w700"><span className="text-success">0,5% </span>than last day</p>
                                </div>
                            </div>
                            <div className="card-body py-0">
                                <div id="revenueChart" className="revenueChart"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header border-0  flex-wrap">
                                        <div>
                                            <h4 className="fs-20 mb-1">Active User's</h4>
                                            <span>Graph data is based on full system manners</span>
                                        </div>
                                        <div className="d-flex">
                                            <div className="card-action coin-tabs mt-3 mt-sm-0">
                                                <ul className="nav nav-tabs" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" data-bs-toggle="tab" href="#Monthly" role="tab">Monthly</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link " data-bs-toggle="tab" href="#Daily" role="tab" >Daily</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-bs-toggle="tab" href="#Today" role="tab" >Today</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown custom-dropdown mb-0 ms-3">
                                                <div className="btn sharp tp-btn dark-btn" data-bs-toggle="dropdown">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="javascript:void(0);">Details</a>
                                                    <a className="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pb-2">
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="Monthly">
                                                <div id="chartTimeline1" className="chart-timeline"></div>
                                            </div>
                                            <div className="tab-pane fade " id="Daily">
                                                <div id="chartTimeline2" className="chart-timeline"></div>
                                            </div>
                                            <div className="tab-pane fade " id="Today">
                                                <div id="chartTimeline3" className="chart-timeline"></div>
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
    )
}

export default Dashboard
