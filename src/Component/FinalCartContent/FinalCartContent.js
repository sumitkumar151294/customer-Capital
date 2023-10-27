import React from 'react'
import { Link } from "react-router-dom";

const FinalCartContent = () => {
    const cartData = [
        {
            product: "Amazon Gift Card",
            amount: "₹ 5,000",
            points: "Pts 120",
            quantity: 2,
            sellingPrice: "₹4,850",
            saving: "₹150",
            discount: "Discount Flat 5%"
        },
        {
            product: "Amazon Pay",
            amount: "₹ 12,000",
            points: "Pts120",
            quantity: 2,
            sellingPrice: "₹11,698",
            saving: "₹302",
            discount: "Discount flat 12%"
        },
        {
            product: "Amazon Gift Card",
            amount: "₹ 5,000",
            points: "Pts 120",
            quantity: 2,
            sellingPrice: "₹4,850",
            saving: "₹150",
            discount: "Discount Flat 5%"
        },
        {
            product: "Amazon Pay",
            amount: "₹ 12,000",
            points: "Pts120",
            quantity: 2,
            sellingPrice: "₹11,698",
            saving: "₹302",
            discount: "Discount flat 12%"
        }
    ];

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

            <section class="letshop3 pb-3">
                <div class="container   big-rr mb-2 ">
                    <div class="row bnn pt-33">
                        <div class="col-lg-7">
                            <h5 class="fs-3 fw-normal">Your order summary</h5>
                            <div class="container p-0">
                            <div className="row">
                                        {cartData.map((product, index) => (
                                            <div className="col-lg-12 col-12 d-flex justify-content-between pad mt-1" key={index}>
                                                <div className="the-pricecard text-center">
                                                    <h6 className="grf">{product.product}</h6>
                                                    <p className="vouch99 mb-2">{product.amount}</p>
                                                </div>

                                                <div className="thebtncart2 text-center">
                                                    <div className="d-flex justify-content-between text-center">
                                                        <div className="font-blk mr-10">
                                                            <p>Points</p>
                                                        </div>
                                                        <div className="font-blk">
                                                            <p className="fnt-15">{product.points}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="font-blk mr-10">
                                                            <p>Quantity</p>
                                                        </div>
                                                        <div>
                                                            <p className="fnt-15">{product.quantity}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="thedetails2">
                                                    <div className="d-flex justify-content-between text-center">
                                                        <div className="font-blk mr-10">
                                                            <p>Selling Price</p>
                                                        </div>
                                                        <div className="font-grn">
                                                            <p className="fnt-15">{product.sellingPrice}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="font-blk mr-10">
                                                            <p>Saving</p>
                                                        </div>
                                                        <div className="font-blk">
                                                            <p className="fnt-15">{product.saving}</p>
                                                        </div>
                                                    </div>
                                                    <div className="didi text-center mt-2">
                                                        <span className="price-rmn5">{product.discount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))};
                                    </div>
                            </div>

                            <div class="ghh">
                                <div class="d-flex justify-content-between ">
                                    <div class="gt">
                                        <span class="fnt-15">Saving</span>
                                    </div>

                                    <div class="t-m">
                                        <span class="fnt-15">₹ 1056</span>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between ">
                                    <div class="gt">
                                        <span class="gtt">Sub Total</span>
                                    </div>

                                    <div class="t-m">
                                        <span class="amtgt">₹ 32040</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5 mt-37px ">
                            <div class="thepoints mb-4">
                                <div class="d-flex justify-content-between the-bd points-div">
                                    <h6 class="">Redeem Your </h6>
                                    <span class="thelcpts">480 Pts</span>
                                </div>

                                <div class="container">
                                    <div class="range-slider">
                                        <span id="rs-bullet" class="rs-label">0</span>
                                        <input id="rs-range-line" class="rs-range" type="range" value="0" min="0" max="10000" />
                                    </div>

                                    <div class="box-minmax">
                                        <span>Pts 0</span><span>Pts 10000</span>
                                    </div>
                                </div>

                                <div class="container userpagesbox d-none">
                                    <div class="row">
                                        <div class="range-slider">
                                            <span class="rs-label1">
                                                25400
                                            </span>
                                            <span id="rs-bullet" class="rs-label">0</span>
                                            <input id="rs-range-line" class="rs-range" type="range" value="0" min="0" max="150" />
                                        </div>

                                        <div class="box-minmax">
                                            <span>0</span><span>150</span>
                                        </div>
                                        <span class="note-pts">Note: 1Pt - ₹ 1</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 userpagesbox">
                                <div class="bg-white rightCart bnb">
                                    <div class="row m-0">
                                        <div class="col-12 fs-18 py-4  fw-400 -div">
                                            <div class="summryHeader d-flex justify-content-between align-items-center py-1 ">
                                                <div><i class="fa-solid fa-cart-shopping fnt-15px"></i> &nbsp; <span
                                                    class="fnt-15px">Amount Due</span></div>
                                                <div class="amtgt">₹ 31560
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 class="mt-2 mb-2 p-2">Payment Methods</h5>
                                    <div class="d-flex justify-content-start">
                                        <div class="sec1">
                                            <div class="two">
                                                <img class="w-36px" src="https://www.mastercard.co.in/content/dam/public/mastercardcom/sg/en/consumers/find-a-card/images/platinum-mastercard-card_1280x720.png"/>
                                            </div>

                                            <div class="two">
                                                <span>Credit Card</span>
                                            </div>
                                        </div>

                                        <div class="sec1">
                                            <div class="two">
                                                <img class="w-36px" src="https://d2g7ragyj76kvw.cloudfront.net/app/eg-ui-components/checkout/payment-options-icons/google-pay-icon.svg"/>
                                            </div>

                                            <div class="two">
                                                <span>Google Pay</span>
                                            </div>
                                        </div>

                                        <div class="sec1">
                                            <div class="two">
                                                <img class="w-36px" src="https://nuvei.com/wp-content/uploads/2021/06/phonepe.png"/>
                                            </div>

                                            <div class="two">
                                                <span>Phone Pay</span>
                                            </div>
                                        </div>

                                        <div class="sec1">
                                            <div class="two">
                                                <img class="w-36px" src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg"/>
                                            </div>

                                            <div class="two">
                                                <span>Paytm</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-md-2 d-grid mt-4"><Link to="/orderconfirm" class="cnt-shop-blue"><button
                                        class="btn py-3 py-md-2 btss2">Confirm & Pay Now &nbsp; <i
                                            class="fa fa-arrow-right "></i></button></Link></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12 mt-4 d-none">
                            <div class="last-sec">
                                <h6 style={{fontSize:'12px',fontWeight: '600'}}>The funds from your purchase will be applied to an LC
                                    Reward Gift and will remain on that card until such time the Retailer Gift Card is Claimed by
                                    the Purchaser or Recipient.

                                </h6>
                                <span>Subject to LC Reward Gift Terms of Service, if after thirty-six (36) months of inactivity of
                                    an LC Reward Gift Choice Card, or if it has not been redeemed toward the purchase of eligible
                                    Retailer Gift Card during this period of time, then anytime thereafter, LC Reward Gift, may
                                    expire or apply dormancy fees to the LC Reward Gift Choice Card in accordance with applicable
                                    laws, or automatically redeem such LC Reward Gift Choice Card a for a Retailer Gift Card
                                    selected by LC Reward Gift at LC Reward Gift's sole discretion, and send the LC Reward Gift
                                    selected Retailer Gift Card to the Purchaser or Recipient email address or SMS number on
                                    file.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default FinalCartContent