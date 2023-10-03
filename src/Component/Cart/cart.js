import React from "react";
import tanisq from '../../Images/tanishq.png'
import bata from '../../Images/bata.png'
import bigBasket from '../../Images/bigbasket.png'
import coin from '../../Images/coin.png'
import { Link } from "react-router-dom";




const Cart = () => {
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
                <div className="order-tracking">
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

      <section className="letshop3 mt-2">
        <div className="container big-rr mb-2">
          <div className="row">
            <div className="col-lg-8">
              <h5 className="mt-1 mb-3">Please Review Your Order</h5>

              <div className="row mx-0 border-bottom py-3 cartGrid bnn">
                <div className="col-lg-3 pe-0 d-none d-lg-block">
                  <div className="d-flex w-100 h-100 align-items-center text-center">
                    <a href="/myntra" className="border">
                      <div className="w-100"><img alt="Myntra" src={tanisq} /></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-12 mt-3">
                  <div className="row justify-content-between pb-3">
                    <div className="col-6 fs-12 pt-1 text-muted">5% Discount & 10 Reward Points</div>
                    <div className="col-6 col-md-auto lh-1 ps-0">
                      <div className="text-nowrap text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="d-flex no-flex align-items-center"><small className="text-muted pe-1 fs-12"></small> Earn <img src={coin} className="w-24px" /> <span className="fs-18 fw-500 the-greenrupee">10</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between pb-2">
                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Myntra</div>
                    <div className="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
                  </div>
                  <div className="row justify-content-between align-items-end">
                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">You Pay</div>
                    <div className="col-6 col-md-auto lh-1 ps-0">
                      <div className="text-nowrap text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="d-flex no-flex align-items-center"><span className="fs-18 fw-500 the-greenrupee"><s className="font-blk">₹100</s> ₹85</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between mt-2">
                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Saving</div>
                    <div className="col-6 col-md-auto lh-1 ps-0">
                      <div className="text-nowrap text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="d-flex no-flex align-items-center"><span className="fs-18 fw-500 ">₹14</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-end mt-2">
                    <div className="col-md-auto col-12">
                      <ul className="list-inline mt-2">
                        <div className="mass">
                          <div className="input-group">
                            <input type="button" value="-" className="button-minus" data-field="quantity" />
                            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                            <input type="button" value="+" className="button-plus" data-field="quantity" />
                          </div>
                        </div>
                      </ul>
                    </div>
                    <div className="col-md-auto text-end col-12 ps-0 pt-2"><button className="text-danger fs-12 btn p-0 border-0"><i className="fa fa-trash" aria-hidden="true"></i> Remove</button></div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 border-bottom py-3 cartGrid bnn">
                <div className="col-lg-3 pe-0 d-none d-lg-block">
                  <div className="d-flex w-100 h-100 align-items-center text-center">
                    <a href="/myntra" className="border">
                      <div className="w-100"><img alt="bigBasket" src={bigBasket} /></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-12 mt-3">
                  <div className="row justify-content-between pb-3">
                    <div className="col-6 fs-12 pt-1 text-muted">3% Discount & 13 Reward Points</div>
                    <div className="col-6 col-md-auto lh-1 ps-0">
                      <div className="text-nowrap text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="d-flex no-flex align-items-center"><small className="text-muted pe-1 fs-12"></small> Earn <img src={coin} className="w-24px" /> <span className="fs-18 fw-500 the-greenrupee">13</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between pb-2">
                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Myntra</div>
                    <div className="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
                  </div>
                  <div className="row justify-content-between align-items-end">
                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">You Pay</div>
                    <div className="col-6 col-md-auto lh-1 ps-0">
                      <div className="text-nowrap text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="d-flex no-flex align-items-center"><span className="fs-18 fw-500 the-greenrupee"><s className="font-blk">₹200</s> ₹186</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between mt-2">
                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Saving</div>
                    <div className="col-6 col-md-auto lh-1 ps-0">
                      <div className="text-nowrap text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="d-flex no-flex align-items-center"><span className="fs-18 fw-500 ">₹15</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-end mt-2">
                    <div className="col-md-auto col-12">
                      <ul className="list-inline mt-2">
                        <div className="mass">
                          <div className="input-group">
                            <input type="button" value="-" className="button-minus" data-field="quantity" />
                            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                            <input type="button" value="+" className="button-plus" data-field="quantity" />
                          </div>
                        </div>
                      </ul>
                    </div>
                    <div className="col-md-auto text-end col-12 ps-0 pt-2"><button className="text-danger fs-12 btn p-0 border-0"><i className="fa fa-trash" aria-hidden="true"></i> Remove</button></div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 border-bottom py-3 cartGrid bnn">
                <div className="col-lg-3 pe-0 d-none d-lg-block">
                  <div className="d-flex w-100 h-100 align-items-center text-center">
                    <a href="/myntra" className="border">
                      <div className="w-100"><img alt="Myntra" src={bata} /></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-12 mt-3">
                  <div className="row justify-content-between pb-3">
                    <div className="col-6 fs-12 pt-1 text-muted">4% Discount & 18 Reward Points</div>
                    <div className="col-6 col-md-auto lh-1 ps-0">
                      <div className="text-nowrap text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="d-flex no-flex align-items-center"><small className="text-muted pe-1 fs-12"></small> Earn <img src={coin} className="w-24px" /> <span className="fs-18 fw-500 the-greenrupee">18</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between pb-2">
                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Myntra</div>
                    <div className="col-12 fs-12 pt-1 text-muted">E-Gift Card (Instant Vouchers)</div>
                  </div>
                  <div className="row justify-content-between align-items-end">
                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">You Pay</div>
                    <div className="col-6 col-md-auto lh-1 ps-0">
                      <div className="text-nowrap text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="d-flex no-flex align-items-center"><span className="fs-18 fw-500 the-greenrupee"><s className="font-blk">₹300</s> ₹272</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between mt-2">
                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">Saving</div>
                    <div className="col-6 col-md-auto lh-1 ps-0">
                      <div className="text-nowrap text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="d-flex no-flex align-items-center"><span className="fs-18 fw-500 ">₹22</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-end mt-2">
                    <div className="col-md-auto col-12">
                      <ul className="list-inline mt-2">
                        <div className="mass">
                          <div className="input-group">
                            <input type="button" value="-" className="button-minus" data-field="quantity" />
                            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                            <input type="button" value="+" className="button-plus" data-field="quantity" />
                          </div>
                        </div>
                      </ul>
                    </div>
                    <div className="col-md-auto text-end col-12 ps-0 pt-2"><button className="text-danger fs-12 btn p-0 border-0"><i className="fa fa-trash" aria-hidden="true"></i> Remove</button></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-45px">
              <div
                className="userpagesbox d-flex justify-content-between"
                id="ctl00_ContentPlaceHolder1_acoupn"
              >
                <div className="voucher-new">
                  <div className="input-box">
                    <input
                      type="text"
                      id="ctl00_ContentPlaceHolder1_txtcouponcode"
                      name="ctl00$ContentPlaceHolder1$txtcouponcode"
                      placeholder="Enter coupon/gift code"
                      style={{ borderRadius: "4px" }}
                    />
                  </div>
                </div>

                <a href="#" className="applyvc" onClick={"handleApplyCoupon"}>
                  <div
                    className="couponsubmit"
                    style={{
                      borderRadius: "4px",
                    }}
                  >
                    <input
                      type="submit"
                      id="ctl00_ContentPlaceHolder1_btnaddcoupon"
                      name="ctl00$ContentPlaceHolder1$btnaddcoupon"
                      value="Apply"
                      onClick={"handleApplyCoupon"}
                    />
                  </div>
                </a>
              </div>

              <div className="mt-4">
                <div className="bg-white rightCart bnb">
                  <div className="row m-0">
                    <div className="col-12 fs-18 py-4 fw-400 points-div">
                      <div className="summryHeader d-flex justify-content-between align-items-center py-1">
                        <div>
                          <i className="fa-solid fa-cart-shopping fa-2x"></i>
                          &nbsp;
                          <span className="fnt-24px">3 Item(s)</span>
                        </div>

                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: "24px",
                          }}
                        >
                          ₹ 548
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="info">
                    <div
                      className="d-flex justify-content-between jlkk"
                      style={{
                        background: "#0088ff",
                        color: "white",
                      }}
                    >
                      <div>Edit User Details</div>

                      <div
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between jlkk">
                      <div>Deliver to:</div>

                      <div
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        Jaswant Rawat
                      </div>
                    </div>

                    <div className="d-flex justify-content-between jlkk">
                      <div>Mobile No:</div>

                      <div
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        9650531790
                      </div>
                    </div>

                    <div className="d-flex justify-content-between jlkk">
                      <div>Email:</div>

                      <div
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        jaswant@way2webworld.com
                      </div>
                    </div>
                  </div>

                  <div className="p-md-2 d-grid ">
                    <a href="finalcart.html" className="cnt-shop-blue">
                      <Link to="/finalcart"  className=
                        "btn py-md-2 btss2"
                        style={{
                          backgroundColor
                            :
                            '#0072fd'
                        }}>            Proceed to Checkout &nbsp;
                        <i className="fa fa-arrow-right "></i>
                      </Link>
                    </a>
                  </div>

                  <div className="p-md-2 d-grid ">
                    <a href="productcart.html" className="cnt-shop">

                      <Link to="/productcart"  className="btn py-3 py-md-2 btss "
                        style={{
                          backgroundColor
                            :
                            'white'
                        }}>
                        Continue Shopping &nbsp;
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>;

          </div>
        </div>
      </section>
    </>
  )
}

export default Cart;
