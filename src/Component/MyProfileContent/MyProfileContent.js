import React from 'react'
import img1 from '../../Images/amazon.png'
import img2 from '../../Images/amazon.com.png'
const MyProfileContent = () => {
  return (
    <>
    <section class="py-3 header1">
    <div class="container">
       

        <div class="row">
            <div class="col-md-3">
                
                <div class="nav  nav-pills nav-pills-custom flex-dir" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link1 mb-3 p-3 shadow active mr-2" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        <i class="fa fa-user "></i>
                        <span class="font-weight-bold small text-uppercase">Dashboard</span></a>

                    <a class="nav-link1 mb-3 p-3 shadow mr-2" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="font-weight-bold small text-uppercase">My Orders</span></a>


                           <a class="nav-link1 mb-3 p-3 shadow mr-2" id="v-pills-wish-tab" data-toggle="pill" href="#wishlist" role="tab" aria-controls="v-wish-profile" aria-selected="false">
                      <i class="fa-solid fa-heart"></i>
                        <span class="font-weight-bold small text-uppercase">Wishlist</span></a>

                   
                    <a class="nav-link1 mb-3 p-3 shadow mr-2" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                       <i class="las la-headset"></i>
                        <span class="font-weight-bold small text-uppercase">Customer Help Desk</span></a>

                         <a class="nav-link1 mb-3 p-3 shadow mr-2" id="v-pills-messages-tab" >
                       <i class="fa-solid fa-right-from-bracket"></i>
                        <span class="font-weight-bold small text-uppercase">Logout</span></a>

                    </div>
            </div>


            <div class="col-md-9">
                
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                        <div class="row">
                            <h5>Personal Information</h5>
                            <br/>
                        <div class="col-lg-4">
                            <div class="card1 mb-3 widget-content bg-midnight-bloom">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Total Points</div>
                                            <div class="widget-subheading">1 Pts = ₹ 1</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white"><span>800 Pts</span></div>
                                        </div>
                                    </div>
                                </div>

                       
                         
                           <div class="card1 mb-3 widget-content bg-premium-dark">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Total Orders</div>
                                            <div class="widget-subheading">All orders till date</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white"><span>15</span></div>
                                        </div>
                                    </div>
                                </div>

                                  <div class="card1 mb-3 widget-content bg-midnight-bloom">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Pending Order</div>
                                            <div class="widget-subheading">All Pending orders till date</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white"><span>15</span></div>
                                        </div>
                                    </div>
                                </div>
                       
                                </div>




                       <div class="col-12 col-lg-8 float-right kls">

    <div class="row text-nowrap pt-2">
        <div class="col-4 py-1">Name</div>
        <div class="col-8 py-1">jaswant</div>
        <div class="col-4 py-1">Mobile</div>
        <div class="col-8 py-1">+91 9650531790</div>
        <div class="col-4 py-1">E-mail</div>
        <div class="col-8 py-1">jaswant@test.com</div>
        <div class="col-4 py-1">DOB</div>
        <div class="col-8 py-1">---</div>
        <div class="col-4 py-1">Password</div>
        <div class="col-8 py-1">********</div>
        <div class="col-12 col-lg-8 d-grid gap-2 pt-3 d-flex justify-content-between"><button type="button" data-bs-toggle="modal" data-bs-target="#signupmodal" class="btn btn-light rounded-0">EDIT</button><button type="button" data-bs-toggle="modal" data-bs-target="#forgetpassword" class="btn btn-alice rounded-0">CHANGE PASSWORD</button></div>
    </div>
</div>

</div>
                    </div>
                    
                    <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h4 class="font-italic mb-4">My Orders</h4>
                         

<div class="row bnn">

<div class="sixthing">
<div class="firstthing">
    <span>Order Placed</span>
    <span>10 Jun 2023</span>

</div>




<div class="firstthing">
    <span>Placed By</span>
    <span class="theg">Jaswant Rawat</span>

</div>


<div class="firstthing">
    <span>Total</span>
    <span class="the-greenrupee">₹ 300</span>

</div>


<div class="firstthing">
<span>By Points</span>
    <span class="the-greenrupee">Pts 60</span>
</div>


<div class="firstthing">
    <span>By Cash</span>
    <span class="the-greenrupee">₹ 240</span>

</div>

</div>

<div class="row mx-0 border-bottom py-3 cartGrid">
    <div class="col-lg-2 pe-0 wishh">
        <div class="border w-100 align-items-center text-center lj">
            <a href="/myntra">
                <div class="w-100"><img class="w-130px"  src={img1}/></div>
            </a>
        </div>
    </div>
    <div class="col-lg-10 col-12 mt-3">
        <div class="row justify-content-between pb-3">
            <div class="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Shopping Voucher
			
			</div>
			
            <div class="col-6 col-md-auto lh-1 ps-0">
                <div class="text-nowrap text-end">
                    <div class="d-flex align-items-center justify-content-end">
                        
                        <div class="d-flex no-flex align-items-center"><small class="text-muted pe-1 fs-12"></small><span class="gnt-vou"><i class="fa-solid fa-turn-up"></i> &nbsp;Resend</span></div>
                    </div>
                </div>
            </div>
            <div class="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
            <div class=" ">
            <div class="d-flex justify-content-between text-center">
                <div class="font-blk mr-10">
                    <p>Price</p>
                </div>
                 <div class="font-grn">
                    <p class="fnt-15">₹100</p>

                </div>
            </div>
             

           
           <div class="didi mt-2">
                <span class="price-rmn">Discount Flat 0.2%</span>
            </div>
            

        </div>
            <a href="productcart.html" class="vouch2">Order Again &nbsp;<i class="fa-solid fa-arrows-spin"></i>
          </a>
		    <span class="klg">Gift ID- 568955</span>
		  
        </div>
      <div class="text-success pb-3 fs-14">5% OFF</div>
       
        
</div>
</div>


<div class="row mx-0 border-bottom py-3 cartGrid">
    <div class="col-lg-2 pe-0 wishh">
        <div class="border w-100 align-items-center text-center lj">
            <a href="/myntra">
                <div class="w-100"><img class="w-130px"   src={img2}/></div>
            </a>
        </div>
    </div>
    <div class="col-lg-10 col-12 mt-3">
        <div class="row justify-content-between pb-3">
            <div class="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Gift Card</div>
			
            <div class="col-6 col-md-auto lh-1 ps-0">
                <div class="text-nowrap text-end">
                    <div class="d-flex align-items-center justify-content-end">
                        
                        <div class="d-flex no-flex align-items-center"><small class="text-muted pe-1 fs-12"></small><span class="gnt-vou"><i class="fa-solid fa-turn-up"></i> &nbsp;Resend</span></div>
                    </div>
                </div>
            </div>
            <div class="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
             <div class=" ">
            <div class="d-flex justify-content-between text-center">
                <div class="font-blk mr-10">
                    <p>Price</p>
                </div>
                 <div class="font-grn">
                    <p class="fnt-15">₹100</p>

                </div>
            </div>
             
           
           <div class="didi mt-2">
                <span class="price-rmn">Discount Flat 0.2%</span>
            </div>
            

        </div>
             <a href="productcart.html" class="vouch2">Order Again &nbsp;<i class="fa-solid fa-arrows-spin"></i></a>
			   <span class="klg">Gift ID- 568955</span>
			
        </div>
     <div class="text-success pb-3 fs-14">5% OFF</div>
       
        
</div>
</div>

</div>




<div class="row bnn">

<div class="sixthing">
<div class="firstthing">
    <span>Order Placed</span>
    <span>10 Jun 2023</span>

</div>




<div class="firstthing">
    <span>Placed By</span>
    <span class="theg">Jaswant Rawat</span>

</div>


<div class="firstthing">
    <span>Total</span>
    <span class="the-greenrupee">₹ 300</span>

</div>


<div class="firstthing">
<span>By Points</span>
    <span class="the-greenrupee">Pts 60</span>
</div>


<div class="firstthing">
    <span>By Cash</span>
    <span class="the-greenrupee">₹ 240</span>

</div>

</div>


<div class="row mx-0 border-bottom py-3 cartGrid">
    <div class="col-lg-2 pe-0 wishh">
        <div class="border w-100 align-items-center text-center lj">
            <a href="/myntra">
                <div class="w-100"><img class="w-130px"  src={img1}/></div>
            </a>
        </div>
    </div>
    <div class="col-lg-10 col-12 mt-3">
        <div class="row justify-content-between pb-3">
            <div class="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Shopping Voucher</div>
			
            <div class="col-6 col-md-auto lh-1 ps-0">
                <div class="text-nowrap text-end">
                    <div class="d-flex align-items-center justify-content-end">
                        
                        <div class="d-flex no-flex align-items-center"><small class="text-muted pe-1 fs-12"></small><span class="gnt-vou"><i class="fa-solid fa-turn-up"></i> &nbsp;Resend</span></div>
                    </div>
                </div>
            </div>
            <div class="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
             <div class=" ">
            <div class="d-flex justify-content-between text-center">
                <div class="font-blk mr-10">
                    <p>Price</p>
                </div>
                 <div class="font-grn">
                    <p class="fnt-15">₹100</p>

                </div>
            </div>
             
           
           <div class="didi mt-2">
                <span class="price-rmn">Discount Flat 0.2%</span>
            </div>
            

        </div>
            <a href="productcart.html" class="vouch2">Order Again &nbsp;<i class="fa-solid fa-arrows-spin"></i>
          </a>
		  
		  <span class="klg" >Gift ID- 568955</span>
		
        </div>
      <div class="text-success pb-3 fs-14">5% OFF</div>
       
        
</div>
</div>


</div>





           </div>
                    
                 

                    <div class="tab-pane fade shadow rounded bg-white p-5" id="wishlist" role="tabpanel" aria-labelledby="v-pills-wish-tab">
                        <h4 class="font-italic mb-4">My Wishlist</h4>
                         

<div class="row bnn">


<div class="row mx-0 border-bottom py-3 cartGrid">
    <div class="col-lg-2 pe-0 wishh">
        <div class="border w-100 align-items-center text-center lj">
            <a href="/myntra">
                <div class="w-100"><img class="w-130px" src={img1} /></div>
            </a>
        </div>
    </div>
    <div class="col-lg-10 col-12">
        <div class="row justify-content-between pb-3">
            <div class="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Shopping Voucher</div>

            
            <div class="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
             <div class=" ">
            <div class="d-flex justify-content-between text-center">
                <div class="font-blk mr-10">
                    <p>Price</p>
                </div>
                 <div class="font-grn">
                    <p class="fnt-15">₹100</p>

                </div>
            </div>
             
           
           <div class="didi mt-2">
                <span class="price-rmn">Discount Flat 0.2%</span>
            </div>
            

        </div>
            <a href="productcart.html" class="vouch4">Move to Cart &nbsp;<i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
    <div class="text-success pb-3 fs-14">5% OFF</div>
       
        
</div>
</div>



</div>


<div class="row bnn">
<div class="row mx-0 border-bottom py-3 cartGrid">
    <div class="col-lg-2 pe-0 wishh">
        <div class="border w-100 align-items-center text-center lj">
            <a href="/myntra">
                <div class="w-100"><img class="w-130px"  src={img2}/></div>
            </a>
        </div>
    </div>
    <div class="col-lg-10 col-12">
        <div class="row justify-content-between pb-3">
            <div class="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Gift Card</div>
          
            <div class="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
             <div class=" ">
            <div class="d-flex justify-content-between text-center">
                <div class="font-blk mr-10">
                    <p>Price</p>
                </div>
                 <div class="font-grn">
                    <p class="fnt-15">₹100</p>

                </div>
            </div>
            
           <div class="didi  mt-2">
                <span class="price-rmn">Discount Flat 0.2%</span>
            </div>
            

        </div>
             <a href="productcart.html" class="vouch4">Move to cart &nbsp;<i class="fa-solid fa-cart-shopping"></i></a>
        </div>
     <div class="text-success pb-3 fs-14">5% OFF</div>
       
        
</div>
</div>
</div>


<div class="row bnn">




<div class="row mx-0 border-bottom py-3 cartGrid">
    <div class="col-lg-2 pe-0 wishh">
        <div class="border w-100 align-items-center text-center lj">
            <a href="/myntra">
                <div class="w-100"><img class="w-130px"  src={img1} /></div>
            </a>
        </div>
    </div>
    <div class="col-lg-10 col-12">
        <div class="row justify-content-between pb-3">
            <div class="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Shopping Voucher</div>
           
            <div class="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
             <div class=" ">
            <div class="d-flex justify-content-between text-center">
                <div class="font-blk mr-10">
                    <p>Price</p>
                </div>
                 <div class="font-grn">
                    <p class="fnt-15">₹100</p>

                </div>
            </div>
             
           
           <div class="didi  mt-2">
                <span class="price-rmn">Discount Flat 0.2%</span>
            </div>
            

        </div>
            <a href="productcart.html" class="vouch4">Move to cart &nbsp;<i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      <div class="text-success pb-3 fs-14">5% OFF</div>
       
        
</div>
</div></div>








           </div>

                    
                    <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <h4 class="font-italic mb-4">Customer Help Desk</h4>
                        <section class="">
   
      <div class="footer_get_touch_inner grid-70-30">
        <div class="colmun-70 get_form">
          <div class="get_form_inner">
           
            <form action="#" class="lis">
              <div class="grid-50-50">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="Email"/>
                <input type="tel" placeholder="Phone/Skype"/>
              </div>
              <div class="grid-full">
                <textarea placeholder="About Your Project" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
        <div class="colmun-30 get_say_form">
          <h5>Hi! Jaswant Rawat</h5>
          <ul class="get_say_info_sec">
            <li>
              <i class="fa fa-envelope"></i>
              <a href="mailto:">hello@contact.com</a>
            </li>
            <li>
              <i class="fab fa-whatsapp"></i>
              <a href="tel:">+919870223180</a>
            </li>

            <li>
              <i class="fa fa-phone"></i>
              <a href="tel:">+919870223180</a>
            </li>
          
          </ul>  
          <ul class="get_say_social-icn">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          </ul>          
        </div>        
      </div>
      </section>
    </div>
 
                    </div>
                </div>
            </div>
        </div>
    
</section>
    </>
  )
}

export default MyProfileContent