import React from 'react'
import img1 from '../../Images/amazon.png'
import img2 from '../../Images/dominoz.png'
import img3 from '../../Images/bigbasket.png'
import img4 from '../../Images/pantaloons.png'
import img5 from '../../Images/flipcart.png'
import img6 from '../../Images/cafecoffee.png'
import img7 from '../../Images/bata.png'
import img8 from '../../Images/giftpay.png'
import img9 from '../../Images/prestige.png'
import img10 from '../../Images/trollbads.png'


const LetShop = () => {
    return (
        <>
            <section className="letshop">
                <div className="container big-rr mb-2">
                    <div className="row text-center pt-4rem mb-4">

                        <span className="big-head text-center">Recommended Gifts for you</span>
                        <span className="big-head2 mt-2">Buy, Send & Claim Gift Cards. Chip in with Friends. Store & Manage Gift Cards.</span>
                    </div>
                    <div className="row ">

                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="img-sec">
                                    <img src={img1} />
                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1">Amazon</div>
                                    <div className="price-rr">₹300 - ₹600 </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="img-sec">
                                    <div className="bagde-flag-wrap">
                                        <a href="#" className="bagde-flag"> 2.5% Off</a>
                                    </div>
                                    <img className="w-144" src={img2} />

                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1">Domino's</div>
                                    <div className="price-rr mb-1">₹1050 - ₹2300 </div>
                                    <div className="price-rmn"><img src="img/coin.png" className="w-24px" /> 0.5% Rewards Earned</div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="bagde-flag-wrap">
                                    <a href="#" className="bagde-flag"> 0.5% Off</a>
                                </div>
                                <div className="img-sec">
                                    <img className="w-144" src={img3} />
                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1">Big Basket </div>
                                    <div className="price-rr">₹990 - ₹1599  </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="img-sec">
                                    <img className="w-144" src={img4} />
                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1">Pantaloons</div>
                                    <div className="price-rr mb-1">₹3000 - ₹4500</div>
                                    <div className="price-rmn"> <img src="img/coin.png" className="w-24px" />11% Rewards Earned</div>


                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="bagde-flag-wrap">
                                    <a href="#" className="bagde-flag"> 10.5% Off</a>
                                </div>
                                <div className="img-sec">
                                    <img className="w-144" src={img5} />
                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1">Flipcart </div>
                                    <div className="price-rr mb-1">₹670 - ₹1500</div>
                                    <div className="price-rmn"> <img src="img/coin.png" className="w-24px" />11.5% Rewards Earned</div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-2 mobile-hide " style={{display:'flex'}}>
                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="img-sec">
                                    <img className="w-144" src={img6} />
                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1">CafeCoffee</div>
                                    <div className="price-rr">₹199 - ₹500 </div>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="img-sec">
                                    <img className="w-144" src={img7} />
                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1">Bata </div>
                                    <div className="price-rr mb-1">₹450 - ₹950 </div>
                                    <div className="price-rmn"> <img src="img/coin.png" className="w-24px" />11.5% Rewards Earned</div>


                                </div>
                            </div>
                        </div>


                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="bagde-flag-wrap">
                                    <a href="#" className="bagde-flag"> 8% Off</a>
                                </div>
                                <div className="img-sec">
                                    <img className="w-144" src={img8} />
                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1">Amazon </div>
                                    <div className="price-rr">₹890 - ₹2000 </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="bagde-flag-wrap">
                                    <a href="#" className="bagde-flag"> 15% Off</a>
                                </div>
                                <div className="img-sec">
                                    <img className="w-144" src={img9} />
                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1 ">Prestige</div>
                                    <div className="price-rr mb-1">₹890 - ₹1200 </div>
                                    <div className="price-rmn"> <img src="img/coin.png" className="w-24px" />11.5% Rewards Earned</div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 mb-3">
                            <div className="box-coupen3">
                                <div className="bagde-flag-wrap">
                                    <a href="#" className="bagde-flag"> 5.5% Off</a>
                                </div>
                                <div className="img-sec">
                                    <img className="w-144" src={img10} />
                                </div>

                                <div className="coupendis">
                                    <div className="fnt-12px mb-1 ">Trollbads</div>
                                    <div className="price-rr">₹590 - ₹2600 </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className=" text-center pt-4rem mb-4 mt-4">


                        <a href="#" className="vouch mt-4"
                        > Buy more gift cards &nbsp;<i className="fa fa-arrow-right"></i>
                        </a>

                    </div>
                </div>
            </section>
        </>
    )
}

export default LetShop