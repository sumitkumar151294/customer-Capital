import React from "react";
import imageAmazon from '../../Images/amazon.com.png'
import coin from '../../Images/coin.png';
import flipkart from '../../Images/flipcart.png';
import dominos from '../../Images/dominoz.png'; 
import bata from '../../Images/bata.png';
import coffeeday from '../../Images/cafecoffee.png';
import amazon from '../../Images/amazon.png'
import { Link } from "react-router-dom";



const Productcard=()=>{
    return(
    
        <><section class="letshop mt-4">
            <div class="container big-rr mb-2 ">

                <div class="row justify-content-center bnn p-2">

                    <div class="col-lg-3 plusminus mb-4">

                        <div class="img-cart text-center">
                            <img class="w-100" src={imageAmazon}/>

                        </div>

                        <div class="text-center">
                            <span class="namecart">Amazon Gift Card</span>
                            <div class="mt-2"><span class="price-rmn p-2"><img src={coin} class="w-24px "/> 0.5% Rewards Earned</span></div>

                        </div>




                    </div>

                    <div class="col-lg-9 mb-4">
                        <div id="carouselBrandControls" class="carousel slide mt-40px" data-bs-ride="false" data-bs-touch="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="">
                                        <h4 class="mb-1 d-none d-md-block">Amazon Gift Card </h4>


                                    </div>
                                    <div>
                                        <div class="fs-14 pt-md-0 mobile-hide">
                                            <p style={{textAlign:"justify"}}>India’s largest fashion hub for all things trendy, Amazon Gift Card is the one-stop shop for all your fashion needs. Enjoy the best of the season’s fashion fest with thousands of items for you to pick from. Revamp your wardrobe with
                                                a Amazon Gift Card d Gift Voucher from GyFTR that lets you shop on Amazon Gift Card and save money by availing discounts.</p>
                                        </div>
                                        <div class="d-grid gap-2 imp-btns d-flex justify-content-end mt-4">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#instruction"><span class="fnt-12px" style={{borderBottom:"1px solid"}}>** Instructions</span></a>
                                            <a href="" data-bs-toggle="modal" data-bs-target="#instruction"><span class="fnt-12px" style={{borderBottom:"1px solid"}}>Terms & Conditions</span></a>
                                            <a href="" data-bs-toggle="modal" data-bs-target="#instruction"><span class="fnt-12px" style={{borderBottom:"1px solid"}}>How to Redeem?</span></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-12 d-flex justify-content-between pad mt-2">
                                <div class="the-pricecard text-center">
                                    <h6 class="grf">Amazon Gift Card</h6>

                                    <p class="vouch99 mb-2">₹ 5,000</p>



                                </div>

                                <div class="thedetails ">
                                    <div class="d-flex justify-content-between text-center">
                                        <div class="font-blk mr-10">
                                            <p>Selling Price</p>
                                        </div>
                                        <div class="font-grn">
                                            <p class="fnt-15">₹4,850</p>

                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="font-blk mr-10">
                                            <p>Saving</p>
                                        </div>
                                        <div class="font-blk">
                                            <p class="fnt-15">₹150</p>

                                        </div>

                                    </div>
                                    <div class="didi text-center mt-2">
                                        <span class="price-rmn5">Discount Flat 5%</span>
                                    </div>


                                </div>



                                <div class="thebtncart text-center">
                                    <a href="#">

                                        <Link to="/cartInfo" class="avail2 " href="cart.html">Add &nbsp;<i class="fa fa-arrow-right"></i></Link>


                                    </a>
                                </div>

                            </div>




                            <div class="col-lg-6 col-12 d-flex justify-content-between pad mt-2">
                                <div class="the-pricecard text-center">
                                    <h6 class="grf">Amazon Pay</h6>
                                    <p class="vouch99 mb-2">₹ 12,000</p>



                                </div>

                                <div class="thedetails ">
                                    <div class="d-flex justify-content-between text-center">
                                        <div class="font-blk mr-10">
                                            <p>Selling Price</p>
                                        </div>
                                        <div class="font-grn">
                                            <p class="fnt-15">₹11,698</p>

                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="font-blk mr-10">
                                            <p>Saving</p>
                                        </div>
                                        <div class="font-blk">
                                            <p class="fnt-15">₹302</p>

                                        </div>

                                    </div>
                                    <div class="didi text-center mt-2">
                                        <span class="price-rmn5">Discount Flat 12%</span>
                                    </div>


                                </div>



                                <div class="thebtncart text-center">
                                    <a href="#">

                                         <Link to="/cartInfo" class="avail2 " href="#">Add &nbsp;<i class="fa fa-arrow-right"></i></Link>


                                    </a>
                                </div>

                            </div>

                            <div class="col-lg-6 col-12 d-flex justify-content-between pad mt-2">
                                <div class="the-pricecard text-center">
                                    <h6 class="grf">Amazon Gift Card</h6>

                                    <p class="vouch99 mb-2">₹ 5,000</p>



                                </div>

                                <div class="thedetails ">
                                    <div class="d-flex justify-content-between text-center">
                                        <div class="font-blk mr-10">
                                            <p>Selling Price</p>
                                        </div>
                                        <div class="font-grn">
                                            <p class="fnt-15">₹4,850</p>

                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="font-blk mr-10">
                                            <p>Saving</p>
                                        </div>
                                        <div class="font-blk">
                                            <p class="fnt-15">₹150</p>

                                        </div>

                                    </div>
                                    <div class="didi text-center mt-2">
                                        <span class="price-rmn5">Discount Flat 5%</span>
                                    </div>


                                </div>



                                <div class="thebtncart text-center">
                                    <a href="#">

                                    <Link to="/cartInfo" class="avail2 " href="#">Add &nbsp;<i class="fa fa-arrow-right"></i></Link>


                                    </a>
                                </div>

                            </div>




                            <div class="col-lg-6 col-12 d-flex justify-content-between pad mt-2">
                                <div class="the-pricecard text-center">
                                    <h6 class="grf">Amazon Pay</h6>
                                    <p class="vouch99 mb-2">₹ 12,000</p>



                                </div>

                                <div class="thedetails ">
                                    <div class="d-flex justify-content-between text-center">
                                        <div class="font-blk mr-10">
                                            <p>Selling Price</p>
                                        </div>
                                        <div class="font-grn">
                                            <p class="fnt-15">₹12,000</p>

                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="font-blk mr-10">
                                            <p>Saving</p>
                                        </div>
                                        <div class="font-blk">
                                            <p class="fnt-15">₹302</p>

                                        </div>

                                    </div>
                                    <div class="didi text-center mt-2">
                                        <span class="price-rmn5">Discount Flat 12%</span>
                                    </div>


                                </div>



                                <div class="thebtncart text-center">
                                    <a href="#">

                                        
                                         <Link to="/cartInfo" class="avail2 " href="#">Add &nbsp;<i class="fa fa-arrow-right"></i></Link>


                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div class="container d-none">
                        <div class="row">
                            <div class="col-12">
                                <table class="table table-bordered magic-table">
                                    <thead>
                                        <tr style={{backgroundColor:"aliceblue"}}>
                                            <th scope="col" style={{width:"3%"}}>S.NO</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Discount</th>
                                            <th scope="col">Points Earning</th>
                                            <th scope="col">Saving</th>
                                            <th scope="col" style={{width:"16%"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Amazon Voucher 1</td>
                                            <td>₹ 100</td>
                                            <td>5%</td>
                                            <td class="ptsearn">Pts 5</td>
                                            <td>₹ 10</td>
                                            <td class="text-center">
                                                <a href="#">
                                                    <div class="qty-container">
                                                        <button class="qty-btn-minus btn-primary btn-rounded mr-1" type="button"><i class="fa fa-chevron-left"></i></button>
                                                        <input type="text" name="qty" value="0" class="input-qty input-rounded" />
                                                        <button class="qty-btn-plus btn-primary btn-rounded ml-1" type="button"><i class="fa fa-chevron-right"></i></button>
                                                    </div>


                                                </a>

                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Amazon Voucher 2</td>
                                            <td>₹ 200</td>
                                            <td>3%</td>
                                            <td class="ptsearn">Pts 10</td>
                                            <td>₹ 16</td>
                                            <td class="text-center">
                                                <div class="qty-container">
                                                    <button class="qty-btn-minus btn-primary btn-rounded mr-1" type="button"><i class="fa fa-chevron-left"></i></button>
                                                    <input type="text" name="qty" value="0" class="input-qty input-rounded" />
                                                    <button class="qty-btn-plus btn-primary btn-rounded ml-1" type="button"><i class="fa fa-chevron-right"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Amazon Voucher 3</td>
                                            <td>₹ 300</td>
                                            <td>2%</td>
                                            <td class="ptsearn">Pts 20</td>
                                            <td>₹ 26</td>
                                            <td class="text-center">
                                                <div class="qty-container">
                                                    <button class="qty-btn-minus btn-primary btn-rounded mr-1" type="button"><i class="fa fa-chevron-left"></i></button>
                                                    <input type="text" name="qty" value="0" class="input-qty input-rounded" />
                                                    <button class="qty-btn-plus btn-primary btn-rounded ml-1" type="button"><i class="fa fa-chevron-right"></i></button>
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Amazon Voucher 4</td>
                                            <td>₹ 400</td>
                                            <td>2%</td>
                                            <td class="ptsearn">Pts 22</td>
                                            <td>₹ 30</td>
                                            <td class="text-center">
                                                <div class="qty-container">
                                                    <button class="qty-btn-minus btn-primary btn-rounded mr-1" type="button"><i class="fa fa-chevron-left"></i></button>
                                                    <input type="text" name="qty" value="0" class="input-qty input-rounded" />
                                                    <button class="qty-btn-plus btn-primary btn-rounded ml-1" type="button"><i class="fa fa-chevron-right"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <a href="cart.html"><span class="cnt-shop-bluecart clr-white flr-ryt">Add to Cart</span></a>
                        </div>
                    </div>



                    <div class="fs-14 pt-md-0 desktop-hide mt-2">
                        <p style={{textAlign:"justify"}}>India’s largest fashion hub for all things trendy, Amazon Gift Card is the one-stop shop for all your fashion needs. Enjoy the best of the season’s fashion fest with thousands of items for you to pick from. Revamp your wardrobe with
                            a Amazon Gift Card d Gift Voucher from GyFTR that lets you shop on Amazon Gift Card and save money by availing discounts.</p>
                    </div>

                </div>




            </div>
        </section><section class="letshop pt-4rem">
                <div class="container big-rr mb-2">

                    <div class="row ">
                        <div class="d-flex justify-content-between mb-4">
                            <div class="first">

                                <h5 style={{fontSize:"26px",fontWeight:"700"}}>Handpicked For You</h5>

                                <p class="the-para-magic2">More and more suggestions for you</p>


                            </div>


                            <div class="second mt-4">
                                <a class="avail2  mt-4" href="#">View All &nbsp;<i class="fa fa-arrow-right"></i></a>
                            </div>

                        </div>


                        <div class="col-lg-2 col-4 mb-3">
                            <div class="box-coupen">
                                <div class="img-sec">
                                    <div class="bagde-flag-wrap">
                                        <a href="#" class="bagde-flag"> 2.5% Off</a>
                                    </div>
                                    <img class="w-144" src={amazon} />
                                </div>


                                <div class="coupendis">
                                    <div class="fnt-12px mb-1">Amazon</div>
                                    <div class="price-rr mb-1 ">₹780 - ₹2000</div>
                                    <div class="price-rmn"> <img src={coin} class="w-24px" />0.5% Rewards Earned</div>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-4 mb-3">
                            <div class="box-coupen mb-3">
                                <div class="img-sec">
                                    <div class="bagde-flag-wrap">
                                        <a href="#" class="bagde-flag"> 12.5% Off</a>
                                    </div>
                                    <img class="w-144" src={flipkart} />
                                </div>

                                <div class="coupendis">
                                    <div class="fnt-12px mb-1">Flipcart</div>
                                    <div class="price-rr mb-1">₹80 - ₹200</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-4 mb-3">
                            <div class="box-coupen">
                                <div class="img-sec">
                                    <img class="w-144" src={dominos}/>
                                </div>

                                <div class="coupendis">
                                    <div class="fnt-12px mb-1">Dominoz</div>
                                    <div class="price-rr mb-1">₹180 - ₹700</div>
                                    <div class="price-rmn"> <img src={coin} class="w-24px" />10% Rewards Earned</div>

                                </div>
                            </div>
                        </div>


                        <div class="col-lg-2 col-4 mb-3">
                            <div class="box-coupen">
                                <div class="img-sec">
                                    <img class="w-144" src={bata} />
                                </div>

                                <div class="coupendis">
                                    <div class="fnt-12px mb-1">Bata</div>
                                    <div class="price-rr mb-1">₹680 - ₹1200</div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-2 col-4 mb-3">
                            <div class="box-coupen">
                                <div class="img-sec">
                                    <img class="w-144" src={coffeeday} />
                                </div>

                                <div class="coupendis">
                                    <div class="fnt-12px mb-1">CafeCoffee</div>
                                    <div class="price-rr mb-1">₹999 - ₹3999</div>
                                    <div class="price-rmn"> <img src={coin} class="w-24px" />11.5% Rewards Earned</div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section></>
    )}

export default Productcard;