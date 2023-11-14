import React from 'react'

const FailedOrders = () => {
  return (
    <>
    <div className="content-body">
            <div className="container-fluid">
				
               
                <div className="row">
                    <div className="col-xl-12 col-xxl-12">
                        <div className="card">
                           <div className="container-fluid">

<div className="d-flex justify-content-between align-items-center flex-wrap">
    <div className="card-header">
                                <h4 className="card-title order-details"  >Failed Orders</h4>


                             

                            </div>



           <div className="customer-search mb-sm-0 mb-3">
                <div className="input-group search-area">
                    <input type="text" className="form-control only-high" placeholder="Mobile/Email/Name"/>
                    <span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2"></i></a></span>
                </div>
            </div>


            <div className="example">
                                  
                                    <input type="text" className="form-control input-daterange-timepicker" name="daterange" value="01/01/2015 1:30 PM - 01/01/2015 2:00 PM"/>
                                </div>


            <div className="d-flex align-items-center flex-wrap">
                <a href="javascript:void(0);" className="btn btn-primary btn-sm btn-rounded me-3 mb-2"><i className="fa fa-file-excel me-2"></i>Export</a>
              
            </div>
        </div>

    
   
                                <div className="card-body p-0 main">
                            <div className="d-flex justify-content-between weak1">
                                <div className="1st">
                                   <h6>Order ID</h6>
                                   <p className='head-value head-color' >ALP4525</p>
                                </div>
                                <div className="1st">
                                   <h6>Name</h6>
                                   <p className='head-value head-color' >Jaswant Rawat</p>
                                </div>

                                <div className="1st">
                                    <h6>Email</h6>
                                    <p className='head-value head-color' >jaswantjojo21@gmail.com</p>
                                </div>


                                <div className="1st">
                                    <h6>Mobile</h6>
                                    <p className='head-value head-color'>9876543210</p>
                                </div>



                                <div className="1st">
                                    <h6>Total Cart Value</h6>
                                    <p className='head-value head-color'>₹5000</p>
                                </div>



                                <div className="1st">
                                    <h6>Order Status</h6>
                                    <span className="btn btn-danger btn-xxs">Partial Complete</span>
                                </div>

                                <div className="1st">
                                    
                            </div>

                </div>
                 <div className="d-flex justify-content-between weak1">
                                <div className="1st">
                                   <h6>Date of Order</h6>
                                   <p className='head-value head-color'>12-09-2023</p>
                                </div>
                                <div className="1st">
                                   <h6>Total Order Amount</h6>
                                   <p className='head-value head-color'>₹5000</p>
                                </div>

                                <div className="1st">
                                    <h6>Payment ID</h6>
                                    <p className='head-value head-color'>PAY_4566</p>
                                </div>


                                <div className="1st">
                                    <h6>Points Reedmed</h6>
                                    <p className='head-value head-color'>Pts 1200</p>
                                </div>



                                <div className="1st">
                                    <h6>Paid Amount</h6>
                                    <p className='head-value head-color'>₹3800</p>
                                </div>



                             

                            </div>


     <div className="card-body theorder">
 <div className="row">
    <div className="col-lg-1">
        <h5 className='txt txxt' >S.NO</h5>
        <p className='head-value head-color'>1</p>

    </div>

    <div className="col-lg-3">
        <h5 className='txt txxt' >Brand Name</h5>
        <p className='head-value head-color'>Amazon</p>

    </div>


    <div className="col-lg-3">
        <h5 className='txt txxt'>Face Value</h5>
        <p className='head-value head-color'>₹2000</p>

    </div>


    <div className="col-lg-1">
        <h5 className='txt txxt'>QTY</h5>
        <p className='head-value head-color' >3</p>
    </div>

    <div className="col-lg-2">
        <h5 className='txt txxt'>SKU</h5>
        <p className='head-value head-color' >#45555</p>

    </div>


    <div className="col-lg-2">
        <h5 className='txt txxt'>Discounted Amt.</h5>
        <p className='head-value head-color' >₹250</p>

    </div>

 </div>

  <div className="row">
    <div className="col-lg-1">
        <h5 className='txt txxt'>S.NO</h5>
        <p className='head-value head-color' >2</p>

    </div>

    <div className="col-lg-3">
        <h5 className='txt txxt'>Brand Name</h5>
        <p className='head-value head-color' >Amazon</p>

    </div>


    <div className="col-lg-3">
        <h5 className='txt txxt'>Face Value</h5>
        <p className='head-value head-color' >₹5000</p>

    </div>


    <div className="col-lg-1">
        <h5 className='txt txxt'>QTY</h5>
        <p className='head-value head-color' >1</p>
    </div>

    <div className="col-lg-2">
        <h5 className='txt txxt'>SKU</h5>
        <p className='head-value head-color' >#45555</p>

    </div>


    <div className="col-lg-2">
        <h5 className='txt txxt'>Discounted Amt.</h5>
        <p className='head-value head-color' >₹500</p>

    </div>

 </div>

 <div className="row weak justify-content-end pb-0">
    <div className="col-lg-2">
        <h4 className="card-title order-details">Suborder ID</h4>
        <p className='head-value head-color' >LOP455</p>

    </div>

    <div className="col-lg-2">
        <h4 className="card-title order-details">Reference ID</h4>
        <p className='head-value head-color' >Ref-125</p>

    </div>



    <div className="col-lg-2">
        <h4 className="card-title order-details">Sub-Order Status</h4>
                                    <span className="btn btn-success btn-xxs">Completed</span>

    </div>

      <div className="col-lg-2">
        <h4 className="card-title order-details">QTY</h4>
        <p className='head-value head-color' >4</p>

    </div>

      <div className="col-lg-2">
        <h4 className="card-title order-details">Amount</h4>
        <p className='head-value head-color' >₹6000</p>

    </div>
 <div className="col-lg-2">
     
    </div>
   

 </div>
 

 <div className="row mt-3">
    <div className="col-lg-1">
        <h5 className='txt txxt'>S.NO</h5>
        <p className='head-value head-color' >3</p>

    </div>

    <div className="col-lg-3">
        <h5 className='txt txxt'>Brand Name</h5>
        <p className='head-value head-color' >Flipcart</p>

    </div>


    <div className="col-lg-3">
        <h5 className='txt txxt'>Face Value</h5>
        <p className='head-value head-color' >₹2000</p>

    </div>


    <div className="col-lg-1">
        <h5 className='txt txxt'>QTY</h5>
        <p className='head-value head-color' >3</p>
    </div>

    <div className="col-lg-2">
        <h5 className='txt txxt'>SKU</h5>
        <p className='head-value head-color' >#45555</p>

    </div>


    <div className="col-lg-2">
        <h5 className='txt txxt'>Discounted Amt.</h5>
        <p className='head-value head-color' >₹250</p>

    </div>

 </div>


 <div className="row weak justify-content-end pb-0">
    <div className="col-lg-2">
        <h4 className="card-title order-details">Suborder ID</h4>
        <p className='head-value head-color' >LOP455</p>

    </div>

    <div className="col-lg-2">
        <h4 className="card-title order-details">Reference ID</h4>
        <p className='head-value head-color' >-</p>

    </div>

    <div className="col-lg-2">
        <h4 className="card-title order-details">Sub-Order Status</h4>
  <span className="btn btn-danger btn-xxs">Pending</span>

    </div>

      <div className="col-lg-2">
        <h4 className="card-title order-details">QTY</h4>
        <p className='head-value head-color' >6</p>

    </div>

      <div className="col-lg-2">
        <h4 className="card-title order-details">Amount</h4>
        <p className='head-value head-color' >₹6000</p>

    </div>


     <div className="col-lg-2">
    <a href="#" className="btn btn-primary btn-sm float-right bttn">Re-Process</a>
     
    </div>



 </div>

                            </div>
</div>



                                                            <div className="card-body p-0 main">
                            <div className="d-flex justify-content-between weak">
                                <div className="1st">
                                   <h6>Order ID</h6>
                                   <p className='head-value head-color' >ALP4525</p>
                                </div>
                                <div className="1st">
                                   <h6>Name</h6>
                                   <p className='head-value head-color' >Jaswant Rawat</p>
                                </div>

                                <div className="1st">
                                    <h6>Email</h6>
                                    <p className='head-value head-color' >jaswantjojo21@gmail.com</p>
                                </div>


                                <div className="1st">
                                    <h6>Mobile</h6>
                                    <p className='head-value head-color' >9876543210</p>
                                </div>



                                <div className="1st">
                                    <h6>Total Cart Value</h6>
                                    <p className='head-value head-color' >₹5000</p>
                                </div>



                                <div className="1st">
                                    <h6>Order Status</h6>
                                    <span className="btn btn-danger btn-xxs">Pending</span>
                                </div>

                               <div className="1st">
    <a href="#" className="btn btn-primary btn-sm float-right bttn ">Re-Process</a>
     
    </div>

                            </div>

                             <div className="d-flex justify-content-between weak1">
                                <div className="1st">
                                   <h6>Date of Order</h6>
                                   <p className='head-value head-color' >12-09-2023</p>
                                </div>
                                <div className="1st">
                                   <h6>Total Order Amount</h6>
                                   <p className='head-value head-color' >₹5000</p>
                                </div>

                                <div className="1st">
                                    <h6>Payment ID</h6>
                                    <p className='head-value head-color' >PAY_4566</p>
                                </div>


                                <div className="1st">
                                    <h6>Points Reedmed</h6>
                                    <p className='head-value head-color' >Pts 1200</p>
                                </div>



                                <div className="1st">
                                    <h6>Paid Amount</h6>
                                    <p className='head-value head-color' >₹3800</p>
                                </div>



                             

                            </div>

               

     <div className="card-body theorder">
 <div className="row">
    <div className="col-lg-1">
        <h5 className='txt txxt'>S.NO</h5>
        <p className='head-value head-color' >1</p>

    </div>

    <div className="col-lg-3">
        <h5 className='txt txxt'>Brand Name</h5>
        <p className='head-value head-color' >Amazon</p>

    </div>


    <div className="col-lg-3">
        <h5 className='txt txxt'>Face Value</h5>
        <p className='head-value head-color' >₹2000</p>

    </div>


    <div className="col-lg-1">
        <h5 className='txt txxt'>QTY</h5>
        <p className='head-value head-color' >3</p>
    </div>

    <div className="col-lg-2">
        <h5 className='txt txxt'>SKU</h5>
        <p className='head-value head-color' >#45555</p>

    </div>


    <div className="col-lg-2">
        <h5 className='txt txxt'>Discounted Amt.</h5>
        <p className='head-value head-color' >₹250</p>

    </div>

 </div>

  <div className="row">
    <div className="col-lg-1">
        <h5 className='txt txxt'>S.NO</h5>
        <p className='head-value head-color' >2</p>

    </div>

    <div className="col-lg-3">
        <h5 className='txt txxt'>Brand Name</h5>
        <p className='head-value head-color' >Amazon</p>

    </div>


    <div className="col-lg-3">
        <h5 className='txt txxt'>Face Value</h5>
        <p className='head-value head-color' >₹5000</p>

    </div>


    <div className="col-lg-1">
        <h5 className='txt txxt'>QTY</h5>
        <p className='head-value head-color' >1</p>
    </div>

    <div className="col-lg-2">
        <h5 className='txt txxt'>SKU</h5>
        <p className='head-value head-color' >#45555</p>

    </div>


    <div className="col-lg-2">
        <h5 className='txt txxt'>Discounted Amt.</h5>
        <p className='head-value head-color' >₹500</p>

    </div>

 </div>

 <div className="row weak justify-content-end pb-0">
    <div className="col-lg-2">
        <h4 className="card-title order-details">Suborder ID</h4>
        <p className='head-value head-color' >LOP455</p>

    </div>

    <div className="col-lg-2">
        <h4 className="card-title order-details">Reference ID</h4>
        <p className='head-value head-color' >-</p>
    </div>



    <div className="col-lg-2">
        <h4 className="card-title order-details">Sub-Order Status</h4>
                                    <span className="btn btn-danger btn-xxs">Pending</span>

    </div>

      <div className="col-lg-2">
        <h4 className="card-title order-details">QTY</h4>
        <p className='head-value head-color' >6</p>

    </div>

      <div className="col-lg-2">
        <h4 className="card-title order-details">Amount</h4>
        <p className='head-value head-color' >₹6000</p>

    </div>
 <div className="col-lg-2">
     
    </div>
   

 </div>
 

 <div className="row mt-3">
    <div className="col-lg-1">
        <h5 className='txt txxt'>S.NO</h5>
        <p className='head-value head-color' >3</p>

    </div>

    <div className="col-lg-3">
        <h5 className='txt txxt'>Brand Name</h5>
        <p className='head-value head-color' >Flipcart</p>

    </div>


    <div className="col-lg-3">
        <h5 className='txt txxt'>Face Value</h5>
        <p className='head-value head-color' >₹2000</p>

    </div>


    <div className="col-lg-1">
        <h5 className='txt txxt'>QTY</h5>
        <p className='head-value head-color' >3</p>
    </div>

    <div className="col-lg-2">
        <h5 className='txt txxt'>SKU</h5>
        <p className='head-value head-color' >#45555</p>

    </div>


    <div className="col-lg-2">
        <h5 className='txt txxt'>Discounted Amt.</h5>
        <p className='head-value head-color' >₹250</p>

    </div>

 </div>


 <div className="row weak justify-content-end pb-0">
    <div className="col-lg-2">
        <h4 className="card-title order-details">Suborder ID</h4>
        <p className='head-value head-color' >LOP455</p>

    </div>

    <div className="col-lg-2">
        <h4 className="card-title order-details">Reference ID</h4>
        <p className='head-value head-color' >-</p>

    </div>

    <div className="col-lg-2">
        <h4 className="card-title order-details">Sub-Order Status</h4>
  <span className="btn btn-danger btn-xxs">Pending</span>

    </div>

      <div className="col-lg-2">
        <h4 className="card-title order-details">QTY</h4>
        <p className='head-value head-color' >6</p>

    </div>

      <div className="col-lg-2">
        <h4 className="card-title order-details">Amount</h4>
        <p className='head-value head-color' >₹6000</p>

    </div>

 <div className="col-lg-2">
       

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
    </>
  )
}

export default FailedOrders