import React from 'react'
import { Link } from "react-router-dom";

const FinalCartContent = () => {
  return (
    <>
    <section className="hh-grayBox">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 hh-grayBox pb20">
                            <div className="row justify-content-between">
                                <div className="order-tracking completed">
                                    <span className="is-complete"></span>

                                    <p>Add to Cart</p>
                                </div>

                                <div className="order-tracking completed">
                                    <span className="is-complete"></span>

                                    <p>Checkout</p>
                                </div>

                                <div className="order-tracking">
                                    <span className="is-complete"></span>

                                    <p>Order Placed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="letshop3 pb-3">
                <div className="d-flex">
                    <div className="container big-rr mb-2">
                        <div className="row bnn pt-33">
                            <div className="col-lg-12">
                                <h5>Your order summary</h5>

                                <div className="container p-0">
                                    <div className="row">
                                        {/* Repeat this block for each item */}
                                        {/* Example */}

                                        <div className="col-lg-12 col-12 d-flex justify-content-between pad mt-1">
                                            <div className="the-pricecard text-center">
                                                <h6 className="grf">Amazon Gift Card</h6>

                                                <p className="vouch99 mb-2">₹ 5,000</p>
                                            </div>

                                            <div className="thebtncart2 text-center">
                                                <div className="d-flex justify-content-between text-center">
                                                    <div className="font-blk mr-10">
                                                        <p>Points</p>
                                                    </div>

                                                    <div className="font-blk">
                                                        <p className="fnt-15">Pts 120</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="font-blk mr-10">
                                                        <p>Quantity</p>
                                                    </div>

                                                    <div className="">
                                                        <p className="fnt-15">2</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="thedetails2">
                                                <div className="d-flex justify-content-between text-center">
                                                    <div className="font-blk mr-10">
                                                        <p>Selling Price</p>
                                                    </div>

                                                    <div className="font-grn">
                                                        <p className="fnt-15">₹4,850</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="font-blk mr-10">
                                                        <p>Saving</p>
                                                    </div>

                                                    <div className="font-blk">
                                                        <p className="fnt-15">₹150</p>
                                                    </div>
                                                </div>

                                                <div className="didi text-center mt-2">
                                                    <span className="price-rmn5">Discount Flat 5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12 d-flex justify-content-between pad mt-1">
                                            <div className="the-pricecard text-center">
                                                <h6 className="grf">Amazon Pay
                                                </h6>

                                                <p className="vouch99 mb-2">₹ 12000</p>
                                            </div>

                                            <div className="thebtncart2 text-center">
                                                <div className="d-flex justify-content-between text-center">
                                                    <div className="font-blk mr-10">
                                                        <p>Points</p>
                                                    </div>

                                                    <div className="font-blk">
                                                        <p className="fnt-15">Pts120</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="font-blk mr-10">
                                                        <p>Quantity</p>
                                                    </div>

                                                    <div>
                                                        <p className="fnt-15">2</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="thedetails2">
                                                <div className="d-flex justify-content-between text-center">
                                                    <div className="font-blk mr-10">
                                                        <p>Selling Price</p>
                                                    </div>

                                                    <div className="font-grn">
                                                        <p className="fnt-15">₹11,698</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="font-blk mr-10">
                                                        <p>Saving</p>
                                                    </div>

                                                    <div className="font-blk">
                                                        <p className="fnt-15">₹302</p>
                                                    </div>
                                                </div>

                                                <div className="didi text-center mt-2">
                                                    <span className="price-rmn5">Discount flat 12%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12 d-flex justify-content-between pad mt-1">
                                            <div className="the-pricecard text-center">
                                                <h6 className="grf">Amazon Gift Card</h6>

                                                <p className="vouch99 mb-2">₹ 5,000</p>
                                            </div>

                                            <div className="thebtncart2 text-center">
                                                <div className="d-flex justify-content-between text-center">
                                                    <div className="font-blk mr-10">
                                                        <p>Points</p>
                                                    </div>

                                                    <div className="font-blk">
                                                        <p className="fnt-15">Pts 120</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="font-blk mr-10">
                                                        <p>Quantity</p>
                                                    </div>

                                                    <div className="">
                                                        <p className="fnt-15">2</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="thedetails2">
                                                <div className="d-flex justify-content-between text-center">
                                                    <div className="font-blk mr-10">
                                                        <p>Selling Price</p>
                                                    </div>

                                                    <div className="font-grn">
                                                        <p className="fnt-15">₹4,850</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="font-blk mr-10">
                                                        <p>Saving</p>
                                                    </div>

                                                    <div className="font-blk">
                                                        <p className="fnt-15">₹150</p>
                                                    </div>
                                                </div>

                                                <div className="didi text-center mt-2">
                                                    <span className="price-rmn5">Discount Flat 5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12 d-flex justify-content-between pad mt-1">
                                            <div className="the-pricecard text-center">
                                                <h6 className="grf">Amazon Pay
                                                </h6>

                                                <p className="vouch99 mb-2">₹ 12000</p>
                                            </div>

                                            <div className="thebtncart2 text-center">
                                                <div className="d-flex justify-content-between text-center">
                                                    <div className="font-blk mr-10">
                                                        <p>Points</p>
                                                    </div>

                                                    <div className="font-blk">
                                                        <p className="fnt-15">Pts120</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="font-blk mr-10">
                                                        <p>Quantity</p>
                                                    </div>

                                                    <div>
                                                        <p className="fnt-15">2</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="thedetails2">
                                                <div className="d-flex justify-content-between text-center">
                                                    <div className="font-blk mr-10">
                                                        <p>Selling Price</p>
                                                    </div>

                                                    <div className="font-grn">
                                                        <p className="fnt-15">₹11,698</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="font-blk mr-10">
                                                        <p>Saving</p>
                                                    </div>

                                                    <div className="font-blk">
                                                        <p className="fnt-15">₹302</p>
                                                    </div>
                                                </div>

                                                <div className="didi text-center mt-2">
                                                    <span className="price-rmn5">Discount flat 12%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ghh">
                            <div className="d-flex justify-content-between ">
                                <div className="gt">
                                    <span className="fnt-15">Saving</span>
                                </div>

                                <div className="t-m">
                                    <span className="fnt-15">₹ 1056</span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between ">
                                <div className="gt">
                                    <span className="gtt">Sub Total</span>
                                </div>

                                <div className="t-m">
                                    <span className="amtgt">₹ 32040</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 mt-37px   ">
                        <div className="thepoints mb-4 ml-28 ">
                            <div className="d-flex justify-content-between the-bd points-div">
                                <h6>Redeem Your</h6>

                                <span className="thelcpts">480 Pts</span>
                            </div>

                            <div className="container">
                                <div className="range-slider">
                                    <span id="rs-bullet" className="rs-label">
                                        0
                                    </span>

                                    <input
                                        id="rs-range-line"
                                        className="rs-range"
                                        type="range"
                                        value="0"
                                        min="0"
                                        max="10000"
                                    />
                                </div>

                                <div className="box-minmax">
                                    <span>Pts 0</span>
                                    <span>Pts 10000</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 userpagesbox ml-28">
                            <div className="bg-white rightCart bnb">
                                <div className="row m-0  " >
                                    <div className="col-12 fs-18 py-4  fw-400 -div">
                                        <div className="summryHeader d-flex justify-content-between align-items-center py-1 ">
                                            <div>
                                                <i className="fa-solid fa-cart-shopping fnt-15px"></i>
                                                &nbsp;
                                                <span className="fnt-15px">Amount Due</span>
                                            </div>

                                            <div className="amtgt">₹ 31560</div>
                                        </div>
                                    </div>
                                </div>

                                <h5 className="mt-2 mb-2 p-2">Payment Methods</h5>

                                <div className="d-flex justify-content-start">
                                    <div className="sec1">
                                        <div className="two">
                                            <img
                                                className="w-36px"
                                                src="https://www.mastercard.co.in/content/dam/public/mastercardcom/sg/en/consumers/find-a-card/images/platinum-mastercard-card_1280x720.png"
                                                alt="Mastercard"
                                            />
                                        </div>

                                        <div className="two">
                                            <span>Credit Card</span>
                                        </div>
                                    </div>

                                    <div className="sec1">
                                        <div className="two">
                                            <img
                                                className="w-36px"
                                                src="https://d2g7ragyj76kvw.cloudfront.net/app/eg-ui-components/checkout/payment-options-icons/google-pay-icon.svg"
                                                alt="Google Pay"
                                            />
                                        </div>

                                        <div className="two">
                                            <span>Google Pay</span>
                                        </div>
                                    </div>

                                    <div className="sec1">
                                        <div className="two">
                                            <img
                                                className="w-36px"
                                                src="https://nuvei.com/wp-content/uploads/2021/06/phonepe.png"
                                                alt="Phone Pe"
                                            />
                                        </div>

                                        <div className="two">
                                            <span>Phone Pay</span>
                                        </div>
                                    </div>

                                    <div className="sec1">
                                        <div className="two">
                                            <img
                                                className="w-36px"
                                                src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg"
                                                alt="Paytm"
                                            />
                                        </div>

                                        <div className="two">
                                            <span>Paytm</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-md-2 d-grid mt-4">
                                    <Link to='/orderconfirm' className="cnt-shop-blue">
                                        <button className="btn py-3 py-md-2 btss2">
                                            Confirm & Pay Now &nbsp;
                                            <i className="fa fa-arrow-right "></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
    </>
  )
}

export default FinalCartContent