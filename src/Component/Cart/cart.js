import React, { useState } from "react";
import tanisq from '../../Images/tanishq.png'
import bata from '../../Images/bata.png'
import bigBasket from '../../Images/bigbasket.png'
import coin from '../../Images/coin.png'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { onCouponSubmit } from "../../redux/modules/User/couponSlice";

const Cart = () => {

  const cartData = [
    {
      image: tanisq,
      discountInfo: "5% Discount & 10 Reward Points",
      storeName: "Myntra",
      productType: "E-Gift Card (Instant Vouchers)",
      discount: "100",
      youPay: "85",
      saving: "15",
      coin: 10
    },
    {
      image: bigBasket,
      discountInfo: "5% Discount & 10 Reward Points",
      storeName: "Big Basket",
      productType: "E-Gift Card (Instant Vouchers)",
      discount: "200",
      youPay: "186",
      saving: "14",
      coin: 13
    },
    {
      image: bata,
      discountInfo: "4% Discount & 18 Reward Points",
      storeName: "Bata",
      productType: "E-Gift Card (Instant Vouchers)",
      discount: "300",
      youPay: "272",
      saving: "22",
      coin: 18
    }
  ];

  const [quantities, setQuantities] = useState(cartData.map(() => 1));

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const dispatch = useDispatch();
  const [couponData, setCouponData] = useState({ name: '' })
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onCouponSubmit(couponData));
  }

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

      <section class="letshop3 mt-2">
        <div class="container   big-rr mb-2">
          <div class="row">
            <div class="col-lg-8">
              <h5 class="mt-1 mb-3 fs-3 fw-normal">Please Review Your Order</h5>

              {cartData.map((cart, index) => (
                <div className="row mx-0 border-bottom py-3 cartGrid bnn">
                  <div className="col-lg-3 pe-0 d-none d-lg-block">
                    <div className="d-flex w-100 h-100 align-items-center text-center">
                      <a href="/myntra" className="border">
                        <div className="w-100"><img alt="Myntra" src={cart.image} /></div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-9 col-12 mt-3">
                    <div className="row justify-content-between pb-3">
                      <div className="col-6 fs-12 pt-1 text-muted">{cart.discountInfo}</div>
                      <div className="col-6 col-md-auto lh-1 ps-0">
                        <div className="text-nowrap text-end">
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="d-flex no-flex align-items-center"><small className="text-muted pe-1 fs-12"></small> Earn <img src={coin} className="w-24px" /> <span className="fs-18 fw-500 the-greenrupee">{cart.coin}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between pb-2">
                      <div className="col-6 col-md-auto lh-1 fs-6 fw-500">{cart.storeName}</div>
                      <div className="col-12 fs-12 pt-1 text-muted">{cart.productType}</div>
                    </div>
                    <div className="row justify-content-between align-items-end">
                      <div className="col-6 col-md-auto lh-1 fs-6 fw-500">You Pay</div>
                      <div className="col-6 col-md-auto lh-1 ps-0">
                        <div className="text-nowrap text-end">
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="d-flex no-flex align-items-center"><span className="fs-18 fw-500 the-greenrupee"><s className="font-blk">₹{cart.discount}</s> ₹{cart.youPay}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between mt-2">
                      <div className="col-6 col-md-auto lh-1 fs-6 fw-500">Saving</div>
                      <div className="col-6 col-md-auto lh-1 ps-0">
                        <div className="text-nowrap text-end">
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="d-flex no-flex align-items-center"><span className="fs-18 fw-500 ">₹{cart.saving}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-end mt-2">
                      <div className="col-md-auto col-12">
                        <ul className="list-inline mt-2">
                          <div className="mass">
                            <div className="input-group">
                              <input type="button" value="-" className="button-minus" data-field="quantity" onClick={() => decrementQuantity(index)} />
                              <input type="number" step="1" max="" name="quantity" className="quantity-field" value={quantities[index]} />
                              <input type="button" value="+" className="button-plus" data-field="quantity" onClick={() => incrementQuantity(index)} />
                            </div>
                          </div>
                        </ul>
                      </div>
                      <div className="col-md-auto text-end col-12 ps-0 pt-2">
                        <button className="text-danger fs-12 btn p-0 border-0"><i className="fa fa-trash" aria-hidden="true"></i> Remove</button></div>
                    </div>
                  </div>
                </div>
              ))}
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
                      onChange={(e) => setCouponData({ ...couponData, name: e.target.value })}
                      placeholder="Enter coupon/gift code"
                      style={{ borderRadius: "4px" }}
                    />
                  </div>
                </div>

                <form className="applyvc" onSubmit={handleSubmit} >
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
                </form>
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
                    <Link to='/finalcart' className="cnt-shop-blue">
                      <button className=
                        "btn py-md-2 btss2"
                        style={{
                          backgroundColor
                            :
                            '#0072fd'
                        }}>Proceed to Checkout &nbsp;
                        <i className="fa fa-arrow-right "></i>
                      </button>
                    </Link>
                  </div>

                  <div className="p-md-2 d-grid ">
                    <Link to='/productcart' className="cnt-shop">
                      <button className="btn py-3 py-md-2 btss "
                        style={{
                          backgroundColor
                            :
                            'white'
                        }}>
                        Continue Shopping &nbsp;
                        <i className="fa fa-arrow-right"></i>
                      </button>
                    </Link>
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