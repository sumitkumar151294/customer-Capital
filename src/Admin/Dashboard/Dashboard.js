import React, { useState } from 'react'
import '../HomeAdmin/Admin.css'
import category from '../../assets/img/category.png'
import product from '../../assets/img/product1.png'
import customer from '../../assets/img/customer1.png'
import Loader from '../Loader/Loader'
import ReactApexChart from 'react-apexcharts';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState('false')

    const revenueChartOptions = {
        chart: {
            type: 'area',
            height: 230,
            toolbar: {
                show: false,
            },

        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        colors: ['var(--primary)'],
        dataLabels: {
            enabled: false,
        },
        markers: {
            shape: "circle",
        },

        legend: {
            show: false,
        },
        stroke: {
            show: true,
            width: 4,
            curve: 'smooth',
            colors: ['var(--primary)'],
        },

        grid: {
            borderColor: '#eee',
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        xaxis: {

            categories: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
            labels: {
                style: {
                    colors: '#7E7F80',
                    fontSize: '13px',
                    fontFamily: 'Poppins',
                    fontWeight: 100,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
            crosshairs: {
                show: false,
            }
        },
        yaxis: {
            show: true,
            labels: {
                offsetX: -15,
                style: {
                    colors: '#7E7F80',
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: 100,

                },
                formatter: function (y) {
                    return y.toFixed(0) + "";
                }
            },
        },
        fill: {
            type: "solid",
            opacity: 1,
            colors: 'var(--primary)'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    };
    const revenueChartSeries = [
        {
            name: 'Net Profit',
            data: [20, 30, 20, 30, 20, 30, 20, 30],
            //radius: 12,	
        },
    ]

    return (
        <div className="content-body">
            {!isLoading ? (
                <Loader />
            ) : (
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
                                                    <img className="w-35px" src={category} alt="file not exist" />
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
                                                    <img className="w-35px" src={product} alt="file not exist" />
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
                                                    <img className="w-35px" src={customer} alt="file not exist" />
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
                                                    <img className="w-35px" src={category} alt="file not exist" />
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
                                    {/* <div id="revenueChart"></div> */}
                                    <ReactApexChart options={revenueChartOptions} series={revenueChartSeries} className="revenueChart" height={250} />
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
            )}
        </div>
    )
}

export default Dashboard
