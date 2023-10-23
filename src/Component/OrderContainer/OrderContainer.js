import React from 'react'
import img1 from '../../Images/amazon.png'
import img2 from '../../Images/amazon.com.png'
import img3 from '../../Images/coin.png'
import { Link } from 'react-router-dom'

const OrderContainer = () => {
    const orderItems = [
        {
            img: img1,
            pointsEarned: "120",
            title: "Amazon Shopping Voucher",
            type: "E-Gift Card (Instant Vouchers)",
            price: "800",
            saving: "120",
            code: "Z15254 - 1",
        },
        {
            img: img2,
            pointsEarned: "160",
            title: "Amazon Gift Card",
            type: "E-Gift Card (Instant Vouchers)",
            price: "500",
            saving: "160",
            code: "Z15254 - 2",
        },
        {
            img: img1,
            pointsEarned: "Pts 120",
            title: "Amazon Shopping Voucher",
            type: "E-Gift Card (Instant Vouchers)",
            price: "700",
            saving: "120",
            code: "Z15254 - 3",
          },  
    ];
    
    const points = 500;
    const subtotal = orderItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
    const grandtotla = subtotal-points;

    return (
        <div className="container">
            <h4 className="font-italic mb-4">Order Summary</h4>
            <div className="row bnn ">
                <div className="col-lg-8 border">
                    {orderItems.map((order) => (
                        <div className="row mx-0 border-bottom py-3 cartGrid">
                            <div className="col-lg-2 pe-0 wishh">
                                <div className="border w-100 align-items-center text-center lj">
                                    <a href="/myntra">
                                        <div className="w-100"><img className="w-130px" src={order.img} /></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-10 col-12 mt-3">
                                <div className="row justify-content-between pb-3">
                                    <div className="d-flex justify-content-between mb-2">
                                        <div className="font-blk mr-10">
                                            <p>Points Earned</p>
                                        </div>
                                        <div className="font-grn">
                                            <p className="fnt-15"><img src={img3} className="w-24px" />Pts {order.pointsEarned}</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-auto lh-1 fs-18 fw-500">{order.title}</div>
                                    <div className="col-12 fs-12 pt-1 text-muted">{order.type}</div>
                                    <div className=" ">
                                        <div className="d-flex justify-content-between text-center">
                                            <div className="font-blk mr-10">
                                                <p>Price</p>
                                            </div>
                                            <div className="font-blk">
                                                <p className="fnt-15">₹ {order.price}</p>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="font-blk mr-10">
                                                <p>Saving</p>
                                            </div>
                                            <div className="font-grn">
                                                <p className="fnt-15">₹ {order.saving}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="klg">{order.code}</span>
                                </div>
                                {/* <div className="text-success pb-3 fs-14">5% OFF</div> */}
                            </div>
                        </div>
                    ))}

                    <div className="ghh">
                        <div className="d-flex justify-content-between mb-1"
                            style={{ borderBottom: '1px solid #ededed' }}
                        //  "border-bottom:1px solid #ededed;"
                        >
                            <div className="gt">
                                <span className="fnt-15">Sub Total</span>
                            </div>
                            <div className="t-m">
                                <span className="fnt-15">₹ {subtotal}</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-1 "
                            style={{ borderBottom: '1px solid #ededed' }}
                        //  style="border-bottom:1px solid #ededed;"
                        >
                            <div className="gt">
                                <span className="fnt-15">Points Redeemed</span>
                            </div>
                            <div className="t-m">
                                <span className="fnt-15">₹ {points}</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between ">
                            <div className="gt">
                                <span className="gtt">Grand Total</span>
                            </div>
                            <div className="t-m">
                                <span className="amtgt">₹ {grandtotla}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="bg-white rightCart bnb">
                        <div className="info">
                            <div className="d-flex justify-content-between jlkk ">
                                <div>Deliver to:</div>
                                <div style={{ fontWeight: '700' }}>Jaswant Rawat</div>
                            </div>

                            <div className="d-flex justify-content-between jlkk">
                                <div>Mobile No:</div>
                                <div style={{ fontWeight: '700' }}>9650531790</div>
                            </div>

                            <div className="d-flex justify-content-between jlkk">
                                <div>Email:</div>
                                <div style={{ fontWeight: '700' }}>jaswant@way2webworld.com</div>
                            </div>
                        </div>

                        <div className="p-md-2 d-grid ">
                            <Link to='/myprofilecontent' className="cnt-shop-blue">
                                <button className="btn py-md-2 btss2" style={{ backgroundColor: '#0072fd' }}>
                                    Go to My Order &nbsp; <i className="fa fa-arrow-right "></i>
                                </button>
                            </Link></div>
                        <div className="p-md-2 d-grid ">
                            <a className="cnt-shop">
                                <button className="btn py-3 py-md-2 btss" style={{ backgroundColor: 'white' }}>Continue Shopping &nbsp; <i className="fa fa-arrow-right"></i></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderContainer