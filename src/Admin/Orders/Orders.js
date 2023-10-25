import React, { useState } from 'react'
import pizz1 from '../../assets/img/pizz1.jpg'
import Loader from '../Loader/Loader'

const Orders = () => {
    const productList = [
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        },
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        },
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        },
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        },
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        }
    ]
    const [isLoading, setIsLoading] = useState('true')
    return (
        <div class="content-body">
            {!isLoading ? (
                <Loader />
            ) : (
                <div class="container-fluid">
                    
                    <div class="row">
                        <div class="col-xl-12 col-xxl-12">
                            <div class="card">
                                 <div class="container-fluid">
    
    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <div class="card-header">
                                    <h4 class="card-title">Orders</h4>
                                </div>
                <div class="customer-search mb-sm-0 mb-3">
                    <div class="input-group search-area">
                        <input type="text" class="form-control only-high" placeholder="Search here......"/>
                        <span class="input-group-text"><a href="javascript:void(0)"><i class="flaticon-381-search-2"></i></a></span>
                    </div>
                </div>
                <div class="d-flex align-items-center flex-wrap">
                    <a href="javascript:void(0);" class="btn btn-primary btn-sm btn-rounded me-3 mb-2"><i class="fa fa-file-excel me-2"></i>Export</a>
                  
                </div>
            </div>
        </div>
    <div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
    <div class="col-sm-3 form-group mb-2">
            <label for="name-f">Supplier</label>
          <select class="form-select" aria-label="Default select example">
      <option selected>Select</option>
      <option value="First Client">Quicksilver</option>
      <option value="Second Client">Supplier 2</option>
      <option value="Third Client">Supplier 3</option>
       
    </select>
          </div>
    
          <div class="col-sm-3 form-group mb-2">
            <label for="name-f">Client</label>
          <select class="form-select" aria-label="Default select example">
      <option selected>Select</option>
      <option value="First Client">Client 1</option>
      <option value="Second Client">Client 2</option>
      <option value="Third Client">Client 3</option>
       
    </select>
          </div>
    
         <div class="col-xl-3">
                                   <div class="example">
                                        <p class="mb-1">Date Range With Time</p>
                                        <input type="text" class="form-control input-daterange-timepicker" name="daterange" value="01/01/2015 1:30 PM - 01/01/2015 2:00 PM"/>
                                    </div>
                                </div>
    
    </div>
    </div>
    
    
                              
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table header-border table-responsive-sm">
                                            <thead>
                                                <tr>
                                                                                                    
    
                                                    <th>Brand</th>
                                                      <th>Total No. Vouchers </th>
                                                      <th>Total Face Value</th>
                                                    <th>Margin</th>
                                                    <th>Total Margin Value</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                   
                                                    <td>Amazon<a href="javascript:void();"></a>
                                                    </td>
                                                    <td>2</td>
                                                    <td> ₹1000
                                                    </td>
                                                    <td>5%</td>
                                                    <td>₹50
                                                    </td>
                                                </tr>
                                                 <tr>
                                                    
                                                    <td>Flipkart<a href="javascript:void();"></a>
                                                    </td>
                                                    <td>6</td>
                                                    <td> ₹500
                                                    </td>
                                                    <td>1%</td>
                                                    <td>₹10
                                                    </td>
                                                </tr>
                                                 <tr>
                                                    
                                                    <td>Nykaa<a href="javascript:void();"></a>
                                                    </td>
                                                    <td>3</td>
                                                    <td> ₹1000
                                                    </td>
                                                    <td>10%</td>
                                                    <td>₹100
                                                    </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Myntra<a href="javascript:void();"></a>
                                                    </td>
                                                    <td>2</td>
                                                    <td> ₹500
                                                    </td>
                                                    <td>5%</td>
                                                    <td>₹50
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default Orders
