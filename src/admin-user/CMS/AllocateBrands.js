import React from 'react'

export const AllocateBrands = () => {
  return (
    <>
    <div class="content-body">
<div class="container-fluid">
                
               
                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                      <div class="card">
                             
                             <div class="container-fluid ">

<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
    <div class="card-header">
                                <h4 class="card-title">Allocate Brands</h4>
                            </div>
            <div class="customer-search mb-sm-0 mb-3">
                <div class="input-group search-area">
                    <input type="text" class="form-control only-high" placeholder="Search here......"/>
                    <span class="input-group-text"><a href="javascript:void(0)"><i class="flaticon-381-search-2"></i></a></span>
                </div>
            </div>
         
        </div>
    </div>
                            <div class="card-body pt-0">
                                <div class="table-responsive">
                                    <table class="table header-border table-responsive-sm">
                                        <thead>
                                            <tr>
                                                <th>Brands Name</th>
                                               <th>Display Order</th>
                                                <th>Action</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Amazon Pay</td>
                                               <td><div class="input-group mb-2 w-11">
  <input type="number" class="form-control" placeholder="1" pattern="/^-?\d+\.?\d*$/" onkeypress="if(this.value.length==2) return false;"/>

</div></td>
                                                
                                                <td><div class="can-toggle">
  <input id="a" type="checkbox"/>
  <label for="a">
    <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
  </label>
</div></td>
                                                   
                                            </tr>
                                            <tr>
                                                <td>Flipcart Gifts</td>
                                                 <td><div class="input-group mb-2 w-11">
  <input type="number" class="form-control" placeholder="2" pattern="/^-?\d+\.?\d*$/" onkeypress="if(this.value.length==2) return false;"/>

</div></td>
                                                <td><div class="can-toggle">
  <input id="b" type="checkbox"/>
  <label for="b">
    <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
  </label>
</div></td>
                                                    

                                            </tr>
                                            <tr>
                                                <td>Nykaa Shopping</td>
                                                 <td><div class="input-group mb-2 w-11">
  <input type="number" class="form-control" placeholder="3" pattern="/^-?\d+\.?\d*$/" onkeypress="if(this.value.length==2) return false;"/>

</div></td>
                                                <td><div class="can-toggle">
  <input id="c" type="checkbox"/>
  <label for="c">
    <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
  </label>
</div></td>
                                                   

                                            </tr>
                                            <tr>
                                                <td>Behrouz 50</td>
                                                 <td><div class="input-group mb-2 w-11">
  <input type="number" class="form-control" placeholder="4" pattern="/^-?\d+\.?\d*$/" onkeypress="if(this.value.length==2) return false;"/>

</div></td>
                                                <td><div class="can-toggle">
  <input id="d" type="checkbox"/>
  <label for="d">
    <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
  </label>
</div></td>
                                                  

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button class="btn btn-primary float-right pad-aa">Submit <i class="fa fa-arrow-right"></i></button>
                            </div>
                        </div>                    </div>
                </div>
            </div>







        </div>
    </>
  )
}
