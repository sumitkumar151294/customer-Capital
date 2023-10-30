import React from 'react'
import img1 from '../../Images/amazon.png'
import img2 from '../../Images/amazon.com.png'
const MyProfileContent = ({wishList}) => {
    return (
        <>
            <section className="py-3 header1">
                <div className="container">


                    <div className="row">
                        <div className="col-md-3">

                            <div className="nav  nav-pills nav-pills-custom flex-dir" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {wishList ?
                                <a className="nav-link1 mb-3 p-3 shadow mr-2" id="v-pills-wish-tab" data-toggle="pill" href="#wishlist" role="tab" aria-controls="v-wish-profile" aria-selected="false">
                                    <i className="fa-solid fa-heart"></i>
                                    <span className="font-weight-bold small text-uppercase">Dashboard</span></a>
                                    :
                                <a className="nav-link1 mb-3 p-3 shadow active mr-2" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i className="fa fa-user "></i>
                                    <span className="font-weight-bold small text-uppercase">Dashboard</span></a>
}
                                <a className="nav-link1 mb-3 p-3 shadow mr-2" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className="font-weight-bold small text-uppercase">My Orders</span></a>
{wishList ?
                                    <a className="nav-link1 mb-3 p-3 shadow active mr-2" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i className="fa fa-user "></i>
                                    <span className="font-weight-bold small text-uppercase">Wishlist</span></a>
                                    :
                                <a className="nav-link1 mb-3 p-3 shadow mr-2" id="v-pills-wish-tab" data-toggle="pill" href="#wishlist" role="tab" aria-controls="v-wish-profile" aria-selected="false">
                                    <i className="fa-solid fa-heart"></i>
                                    <span className="font-weight-bold small text-uppercase">Wishlist</span></a>
}

                                <a className="nav-link1 mb-3 p-3 shadow mr-2" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                    <i className="las la-headset"></i>
                                    <span className="font-weight-bold small text-uppercase">Customer Help Desk</span></a>

                                <a className="nav-link1 mb-3 p-3 shadow mr-2" id="v-pills-messages-tab" >
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    <span className="font-weight-bold small text-uppercase">Logout</span></a>

                            </div>
                        </div>


                        <div className="col-md-9">

                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade shadow rounded-4 bg-white show active p-6" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                    <div className="row">
                                        <h5  >Personal Information</h5>
                                        <br />
                                        <div className="col-lg-4">
                                            <div className="card1 mb-3 widget-content bg-midnight-bloom">
                                                <div className="widget-content-wrapper text-white">
                                                    <div className="widget-content-left">
                                                        <div className="widget-heading">Total Points</div>
                                                        <div className="widget-subheading">1 Pts = ₹ 1</div>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="widget-numbers text-white"><span>800 Pts</span></div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="card1 mb-3 widget-content bg-premium-dark">
                                                <div className="widget-content-wrapper text-white">
                                                    <div className="widget-content-left">
                                                        <div className="widget-heading">Total Orders</div>
                                                        <div className="widget-subheading">All orders till date</div>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="widget-numbers text-white"><span>15</span></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card1 mb-3 widget-content bg-midnight-bloom">
                                                <div className="widget-content-wrapper text-white">
                                                    <div className="widget-content-left">
                                                        <div className="widget-heading">Pending Order</div>
                                                        <div className="widget-subheading">All Pending orders till date</div>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="widget-numbers text-white"><span>15</span></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>




                                        <div className="col-12 col-lg-8 float-right kls">

                                            <div className="row text-nowrap pt-2">
                                                <div className="col-4 py-1">Name</div>
                                                <div className="col-8 py-1">jaswant</div>
                                                <div className="col-4 py-1">Mobile</div>
                                                <div className="col-8 py-1">+91 9650531790</div>
                                                <div className="col-4 py-1">E-mail</div>
                                                <div className="col-8 py-1">jaswant@test.com</div>
                                                <div className="col-4 py-1">DOB</div>
                                                <div className="col-8 py-1">---</div>
                                                <div className="col-4 py-1">Password</div>
                                                <div className="col-8 py-1">********</div>
                                                <div className="col-12 col-lg-8 d-grid gap-2 pt-3 d-flex justify-content-between"><button type="button" data-bs-toggle="modal" data-bs-target="#signupmodal" className="btn btn-light rounded-0"  >EDIT</button><button type="button" data-bs-toggle="modal" data-bs-target="#forgetpassword" className="btn btn-alice rounded-0">CHANGE PASSWORD</button></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="tab-pane fade shadow rounded-4 bg-white p-6" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <h4  className="font-italic mb-4">My Orders</h4>


                                    <div className="row bnn">

                                        <div className="sixthing">
                                            <div className="firstthing">
                                                <span>Order Placed</span>
                                                <span>10 Jun 2023</span>

                                            </div>




                                            <div className="firstthing">
                                                <span>Placed By</span>
                                                <span className="theg">Jaswant Rawat</span>

                                            </div>


                                            <div className="firstthing">
                                                <span>Total</span>
                                                <span className="the-greenrupee">₹ 300</span>

                                            </div>


                                            <div className="firstthing">
                                                <span>By Points</span>
                                                <span className="the-greenrupee">Pts 60</span>
                                            </div>


                                            <div className="firstthing">
                                                <span>By Cash</span>
                                                <span className="the-greenrupee">₹ 240</span>

                                            </div>

                                        </div>

                                        <div className="row mx-0 border-bottom py-3 cartGrid">
                                            <div className="col-lg-2 pe-0 wishh">
                                                <div className="border w-100 align-items-center text-center lj">
                                                    <a href="/myntra">
                                                        <div className="w-100"><img className="w-130px" alt="Myntra"  src={img1} /></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-12 mt-3">
                                                <div className="row justify-content-between pb-3">
                                                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Shopping Voucher

                                                    </div>

                                                    <div className="col-6 col-md-auto lh-1 ps-0">
                                                        <div className="text-nowrap text-end">
                                                            <div className="d-flex align-items-center justify-content-end">

                                                                <div className="d-flex no-flex align-items-center"><small className="text-muted pe-1 fs-12"></small><span className="gnt-vou"><i className="fa-solid fa-turn-up"></i> &nbsp;Resend</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
                                                    <div className=" ">
                                                        <div className="d-flex justify-content-between text-center">
                                                            <div className="font-blk mr-10">
                                                                <p>Price</p>
                                                            </div>
                                                            <div className="font-grn">
                                                                <p className="fnt-15">₹100</p>

                                                            </div>
                                                        </div>



                                                        <div className="didi mt-2">
                                                            <span className="price-rmn">Discount Flat 0.2%</span>
                                                        </div>


                                                    </div>
                                                    <a  className="vouch2">Order Again &nbsp;<i className="fa-solid fa-arrows-spin"></i>
                                                    </a>
                                                    <span className="klg">Gift ID- 568955</span>

                                                </div>
                                                {/* <div className="text-success pb-3 fs-14">5% OFF</div> */}


                                            </div>
                                        </div>


                                        <div className="row mx-0 border-bottom py-3 cartGrid">
                                            <div className="col-lg-2 pe-0 wishh">
                                                <div className="border w-100 align-items-center text-center lj">
                                                    <a href="/myntra">
                                                        <div className="w-100"><img className="w-130px" alt="Myntra"  src={img2} /></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-12 mt-3">
                                                <div className="row justify-content-between pb-3">
                                                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Gift Card</div>

                                                    <div className="col-6 col-md-auto lh-1 ps-0">
                                                        <div className="text-nowrap text-end">
                                                            <div className="d-flex align-items-center justify-content-end">

                                                                <div className="d-flex no-flex align-items-center"><small className="text-muted pe-1 fs-12"></small><span className="gnt-vou"><i className="fa-solid fa-turn-up"></i> &nbsp;Resend</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
                                                    <div className=" ">
                                                        <div className="d-flex justify-content-between text-center">
                                                            <div className="font-blk mr-10">
                                                                <p>Price</p>
                                                            </div>
                                                            <div className="font-grn">
                                                                <p className="fnt-15">₹100</p>

                                                            </div>
                                                        </div>


                                                        <div className="didi mt-2">
                                                            <span className="price-rmn">Discount Flat 0.2%</span>
                                                        </div>


                                                    </div>
                                                    <a  className="vouch2">Order Again &nbsp;<i className="fa-solid fa-arrows-spin"></i></a>
                                                    <span className="klg">Gift ID- 568955</span>

                                                </div>
                                                {/* <div className="text-success pb-3 fs-14">5% OFF</div> */}


                                            </div>
                                        </div>

                                    </div>




                                    <div className="row bnn">

                                        <div className="sixthing">
                                            <div className="firstthing">
                                                <span>Order Placed</span>
                                                <span>10 Jun 2023</span>

                                            </div>




                                            <div className="firstthing">
                                                <span>Placed By</span>
                                                <span className="theg">Jaswant Rawat</span>

                                            </div>


                                            <div className="firstthing">
                                                <span>Total</span>
                                                <span className="the-greenrupee">₹ 300</span>

                                            </div>


                                            <div className="firstthing">
                                                <span>By Points</span>
                                                <span className="the-greenrupee">Pts 60</span>
                                            </div>


                                            <div className="firstthing">
                                                <span>By Cash</span>
                                                <span className="the-greenrupee">₹ 240</span>

                                            </div>

                                        </div>


                                        <div className="row mx-0 border-bottom py-3 cartGrid">
                                            <div className="col-lg-2 pe-0 wishh">
                                                <div className="border w-100 align-items-center text-center lj">
                                                    <a href="/myntra">
                                                        <div className="w-100"><img className="w-130px" alt="Myntra"  src={img1} /></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-12 mt-3">
                                                <div className="row justify-content-between pb-3">
                                                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Shopping Voucher</div>

                                                    <div className="col-6 col-md-auto lh-1 ps-0">
                                                        <div className="text-nowrap text-end">
                                                            <div className="d-flex align-items-center justify-content-end">

                                                                <div className="d-flex no-flex align-items-center"><small className="text-muted pe-1 fs-12"></small><span className="gnt-vou"><i className="fa-solid fa-turn-up"></i> &nbsp;Resend</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
                                                    <div className=" ">
                                                        <div className="d-flex justify-content-between text-center">
                                                            <div className="font-blk mr-10">
                                                                <p>Price</p>
                                                            </div>
                                                            <div className="font-grn">
                                                                <p className="fnt-15">₹100</p>

                                                            </div>
                                                        </div>


                                                        <div className="didi mt-2">
                                                            <span className="price-rmn">Discount Flat 0.2%</span>
                                                        </div>


                                                    </div>
                                                    <a  className="vouch2">Order Again &nbsp;<i className="fa-solid fa-arrows-spin"></i>
                                                    </a>

                                                    <span className="klg" >Gift ID- 568955</span>

                                                </div>
                                                {/* <div className="text-success pb-3 fs-14">5% OFF</div> */}


                                            </div>
                                        </div>


                                    </div>





                                </div>



                                <div className="tab-pane fade shadow rounded-4 bg-white p-6" id="wishlist" role="tabpanel" aria-labelledby="v-pills-wish-tab">
                                    <h4 className="font-italic mb-4">My Wishlist</h4>


                                    <div className="row bnn">


                                        <div className="row mx-0 border-bottom py-3 cartGrid">
                                            <div className="col-lg-2 pe-0 wishh">
                                                <div className="border w-100 align-items-center text-center lj">
                                                    <a href="/myntra">
                                                        <div className="w-100"><img className="w-130px" alt="Myntra"  src={img1} /></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-12">
                                                <div className="row justify-content-between pb-3">
                                                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Shopping Voucher</div>


                                                    <div className="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
                                                    <div className=" ">
                                                        <div className="d-flex justify-content-between text-center">
                                                            <div className="font-blk mr-10">
                                                                <p>Price</p>
                                                            </div>
                                                            <div className="font-grn">
                                                                <p className="fnt-15">₹100</p>

                                                            </div>
                                                        </div>


                                                        <div className="didi mt-2">
                                                            <span className="price-rmn">Discount Flat 0.2%</span>
                                                        </div>


                                                    </div>
                                                    <a  className="vouch4">Move to Cart &nbsp;<i className="fa-solid fa-cart-shopping"></i>
                                                    </a>
                                                </div>
                                                {/* <div className="text-success pb-3 fs-14">5% OFF</div> */}


                                            </div>
                                        </div>



                                    </div>


                                    <div className="row bnn">
                                        <div className="row mx-0 border-bottom py-3 cartGrid">
                                            <div className="col-lg-2 pe-0 wishh">
                                                <div className="border w-100 align-items-center text-center lj">
                                                    <a href="/myntra">
                                                        <div className="w-100"><img className="w-130px" alt="Myntra"  src={img2} /></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-12">
                                                <div className="row justify-content-between pb-3">
                                                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Gift Card</div>

                                                    <div className="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
                                                    <div className=" ">
                                                        <div className="d-flex justify-content-between text-center">
                                                            <div className="font-blk mr-10">
                                                                <p>Price</p>
                                                            </div>
                                                            <div className="font-grn">
                                                                <p className="fnt-15">₹100</p>

                                                            </div>
                                                        </div>

                                                        <div className="didi  mt-2">
                                                            <span className="price-rmn">Discount Flat 0.2%</span>
                                                        </div>


                                                    </div>
                                                    <a  className="vouch4">Move to cart &nbsp;<i className="fa-solid fa-cart-shopping"></i></a>
                                                </div>
                                                {/* <div className="text-success pb-3 fs-14">5% OFF</div> */}


                                            </div>
                                        </div>
                                    </div>


                                    <div className="row bnn">




                                        <div className="row mx-0 border-bottom py-3 cartGrid">
                                            <div className="col-lg-2 pe-0 wishh">
                                                <div className="border w-100 align-items-center text-center lj">
                                                    <a href="/myntra">
                                                        <div className="w-100"><img className="w-130px" alt="Myntra" src={img1} /></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-12">
                                                <div className="row justify-content-between pb-3">
                                                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Amazon Shopping Voucher</div>

                                                    <div className="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
                                                    <div className=" ">
                                                        <div className="d-flex justify-content-between text-center">
                                                            <div className="font-blk mr-10">
                                                                <p>Price</p>
                                                            </div>
                                                            <div className="font-grn">
                                                                <p className="fnt-15">₹100</p>

                                                            </div>
                                                        </div>


                                                        <div className="didi  mt-2">
                                                            <span className="price-rmn">Discount Flat 0.2%</span>
                                                        </div>


                                                    </div>
                                                    <a  className="vouch4">Move to cart &nbsp;<i className="fa-solid fa-cart-shopping"></i>
                                                    </a>
                                                </div>
                                                {/* <div className="text-success pb-3 fs-14">5% OFF</div> */}


                                            </div>
                                        </div></div>








                                </div>


                                <div className="tab-pane fade shadow rounded-4 bg-white p-6" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <h4 className="font-italic mb-4">Customer Help Desk</h4>
                                    <section className="">

                                        <div className="footer_get_touch_inner grid-70-30">
                                            <div className="colmun-70 get_form">
                                                <div className="get_form_inner">

                                                    <form action="#" className="lis">
                                                        <div className="grid-50-50">
                                                            <input type="text" placeholder="First Name" />
                                                            <input type="text" placeholder="Last Name" />
                                                            <input type="email" placeholder="Email" />
                                                            <input type="tel" placeholder="Phone/Skype" />
                                                        </div>
                                                        <div className="grid-full">
                                                            <textarea placeholder="About Your Project" cols="30" rows="10"></textarea>
                                                            <input type="submit" value="Submit" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="colmun-30 get_say_form">
                                                <h5>Hi! Jaswant Rawat</h5>
                                                <ul className="get_say_info_sec">
                                                    <li>
                                                        <i className="fa fa-envelope"></i>
                                                        <a href="mailto:">hello@contact.com</a>
                                                    </li>
                                                    <li>
                                                        <i className="fab fa-whatsapp"></i>
                                                        <a href="tel:">+919870223180</a>
                                                    </li>

                                                    <li>
                                                        <i className="fa fa-phone"></i>
                                                        <a href="tel:">+919870223180</a>
                                                    </li>

                                                </ul>
                                                <ul className="get_say_social-icn">
                                                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </section>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </section >

                </>
                )
}

                export default MyProfileContent