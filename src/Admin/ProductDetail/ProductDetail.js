import React from 'react'

const ProductDetail = () => {
  return (
   <>
   <div class="content-body">
           <div class="container-fluid">
       
        <div class="row">
            <div class="col-lg-12 col-xl-12">
                <div class="card">
                    <div class="card-body pt-4" >
                        <div class="menu-product d-flex">
                            <img src="img/pizz1.jpg"/>
                            <div class="content-detail-wrap">   
                                <div>
                                    <h4><strong>Amazon Shopping</strong></h4>
                                    <span>SKU ID - 5621335</span>
                                </div>
                                <p class="mt-1 clr-blk">An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms. An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms.</p>

                                        <h5 class="mb-0"><span class="fs-14 me-2">Type - </span><strong class="text-danger">DIGITAL</strong></h5>
                                    <div class="d-flex justify-content-between mt-2">
                            <div class="prange mt-3">
                                <h6>Price Range</h6>
                                <h4>₹10 - ₹10000</h4>
                            </div>

                            <div class="pdeno">
                                  <h6>Price Denominations</h6>
                                <div class="d-flex justify-content-between">
                                    <button type="button" class="btn btn-rounded btn-secondary btn-sm mr-10">₹100</button>
                                    <button type="button" class="btn btn-rounded btn-secondary btn-sm mr-10">₹200</button>
                                    <button type="button" class="btn btn-rounded btn-secondary btn-sm  mr-10">₹300</button>
                                    <button type="button" class="btn btn-rounded btn-secondary btn-sm mr-10">₹400</button>
                                    <button type="button" class="btn btn-rounded btn-secondary btn-sm mr-10">₹500</button>
                                   </div> 
                            </div>

                         </div>

                         <div class="tc mt-2">
                            <h6>Terms and Conditions</h6>
                            <p>An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms. An AmaAn Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms. An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms.zon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms.An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms. An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms.An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms. An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms.</p>
                         </div>

                         <div class=" tc mt-2">
                             <h6>Redemption Terms</h6>

                             <h6><strong>1 - Redemption Information</strong></h6>
                            <p>An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms.</p>

                            <h6><strong>2 - In Store Information</strong></h6>
                            <p>An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms.</p>
                         </div>

                         <div class="only-right mt-2">
                            <a href="" class="mr-10 on-link">*Terms and Conditions</a>
                            <a href="" class="mr-10 on-link">*Store Locator</a>

                         </div>
                                
                            </div>  
                        </div>

                        
                    </div>
                </div>
            </div>
           
            
           
            
            
            
            <div class="modal fade" id="reviewModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Review</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="text-center mb-4">
                                    <img class="img-fluid rounded" width="78" src="https://lezato.w3itexpert.com/laravel/demo/images/avatar/1.jpg" alt="DexignZone"/>
                                </div>
                                <div class="mb-3">
                                    <div class="rating-widget mb-4 text-center">
                                        
                                        <div class="rating-stars">
                                            <ul id="stars">
                                                <li class="star" title="Poor" data-value="1">
                                                    <i class="fa fa-star fa-fw"></i>
                                                </li>
                                                <li class="star" title="Fair" data-value="2">
                                                    <i class="fa fa-star fa-fw"></i>
                                                </li>
                                                <li class="star" title="Good" data-value="3">
                                                    <i class="fa fa-star fa-fw"></i>
                                                </li>
                                                <li class="star" title="Excellent" data-value="4">
                                                    <i class="fa fa-star fa-fw"></i>
                                                </li>
                                                <li class="star" title="WOW!!!" data-value="5">
                                                    <i class="fa fa-star fa-fw"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control" placeholder="Comment" rows="5"></textarea>
                                </div>
                                <button class="btn btn-success btn-block">RATE</button>
                            </form>
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

export default ProductDetail