import React, { useState } from 'react'
import pizz1 from '../../assets/img/pizz1.jpg'
import Loader from '../Loader/Loader'
import ProductDetail from './ProductDetail'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ProductCategory = () => {
    const navigate=useNavigate();
    const [showProductDetail,setShowProductDetail]=useState(false)
        const handleClick=()=>{
            debugger
            setShowProductDetail(true)
            navigate('/LC-admin/productdetail')
    }
    const vouchers = [
        {
            name: 'Dominoz Voucher',
            img: pizz1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            date: '03-08-2023',
            selected: false,
        },
        {
            name: 'Dominoz Voucher',
            img: pizz1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            date: '03-08-2023',
            selected: false,
        },
        {
            name: 'Dominoz Voucher',
            img: pizz1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            date: '03-08-2023',
            selected: false,
        },
        {
            name: 'Dominoz Voucher',
            img: pizz1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            date: '03-08-2023',
            selected: false,
        },
    ]

    const [isLoading, setIsLoading] = useState('true')

    return (
       <>
                <div class="content-body">

                    {!isLoading ? (
                        <Loader />
                    ) : (
                        <><div class="container-fluid">

                            <div class="row">
                                <div class="col-xl-12 col-xxl-12">
                                    <div class="card pb-4">
                                        <div class="card-header">
                                            <h4 class="card-title">Product Categories</h4>
                                        </div>
                                        <div class="card-body bhh ">
                                            <div class="container mt-3">
                                                <form>
                                                    <div class="row">

                                                        <div class="col-lg-9 ">
                                                            <div class="d-flex justify-content-start">
                                                                <div class="one text-center mr-4">
                                                                    <img src={pizz1} /><br />
                                                                    <h4 class="mt-2"><strong>#ED3245</strong></h4>
                                                                </div>

                                                                <div class="desc" onClick={() => handleClick()}>
                                                                    <h4>Dominoz Voucher</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                                    <span>03-08-2023</span>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="col-lg-2 text-center">
                                                            <div class="ttl-sub">
                                                                <span>Total Subcategories</span>
                                                                <h5 class="dd">59</h5>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-1">
                                                            <div class="form-check mt-2">
                                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="container mt-1">
                                            {vouchers.map((voucher, index) => (
                                                <div class="row top-top mt-2">
                                                    <div class="col-lg-11 ">
                                                        <div class="d-flex justify-content-start">
                                                            <div class="one text-center mr-4">
                                                                <img src={voucher.img} style={{ width: '50px' }} /><br />
                                                            </div>

                                                            <div class="two">
                                                                <h4>{voucher.name}</h4>
                                                                <p>{voucher.description}</p>
                                                                <span>{voucher.date}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-1">
                                                        <div class="form-check mt-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="container-fluid">

                                <div class="row">
                                    <div class="col-xl-12 col-xxl-12">
                                        <div class="card pb-4">
                                   
                                            <div class="card-body bhh ">
                                                <div class="container mt-3">
                                                    <form>
                                                        <div class="row">

                                                            <div class="col-lg-9 ">
                                                                <div class="d-flex justify-content-start">
                                                                    <div class="one text-center mr-4">
                                                                        <img src={pizz1} /><br />
                                                                        <h4 class="mt-2"><strong>#ED3245</strong></h4>
                                                                    </div>

                                                                    <div class="desc" onClick={() => handleClick()}>
                                                                        <h4>Dominoz Voucher</h4>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                                        <span>03-08-2023</span>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div class="col-lg-2 text-center">
                                                                <div class="ttl-sub">
                                                                    <span>Total Subcategories</span>
                                                                    <h5 class="dd">59</h5>
                                                                </div>
                                                            </div>

                                                            <div class="col-lg-1">
                                                                <div class="form-check mt-2">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div class="container mt-1">
                                                {vouchers.map((voucher, index) => (
                                                    <div class="row top-top mt-2">
                                                        <div class="col-lg-11 ">
                                                            <div class="d-flex justify-content-start">
                                                                <div class="one text-center mr-4">
                                                                    <img src={voucher.img} style={{ width: '50px' }} /><br />
                                                                </div>

                                                                <div class="two">
                                                                    <h4>{voucher.name}</h4>
                                                                    <p>{voucher.description}</p>
                                                                    <span>{voucher.date}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-1">
                                                            <div class="form-check mt-2">
                                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></>
                    )}
                </div>
            </>
    )
}

export default ProductCategory
