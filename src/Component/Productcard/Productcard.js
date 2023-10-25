import React from "react";
import imageAmazon from '../../Images/amazon.com.png';
import step1 from '../../assets/img/step1.png';
import step2 from '../../assets/img/step2.png';
import step3 from '../../assets/img/step3.png';
import coin from '../../Images/coin.png';
import flipkart from '../../Images/flipcart.png';
import dominos from '../../Images/dominoz.png';
import bata from '../../Images/bata.png';
import cafecoffee from '../../Images/cafecoffee.png';
import amazon from '../../Images/amazon.png'
import { Link } from "react-router-dom";
import { useState } from "react";


const data = [
    {
        discount: '2.5% Off',
        product: "Amazon",
        img: amazon,
        price: '₹780 - ₹2000',
        reward: '0.5% Rewards Earned'
    },
    {
        discount: '2.5% Off',
        product: "Flipcart",
        img: flipkart,
        price: '₹80 - ₹200',
        reward: ''
    },
    {
        discount: '',
        product: "Dominoz",
        img: dominos,
        price: '₹180 - ₹700',
        reward: '10% Rewards Earned'
    },
    {
        discount: '',
        product: "Bata",
        img: bata,
        price: '₹680 - ₹1200',
        reward: ''
    },
    {
        discount: '',
        product: "CafeCoffee",
        img: cafecoffee,
        price: '₹999 - ₹3999',
        reward: '11.5% Rewards Earned'
    }
]

const giftCard = [
    {
        product: "Amazon Gift Card",
        sellingPrice: '₹4,850',
        price: '₹ 5,000',
        reward: 'Discount Flat 5%',
        saving: '₹150',
        redirect: '/cartInfo'
    },
    {
        product: "Amazon Pay",
        sellingPrice: '₹11,698',
        price: '₹12,000',
        reward: 'Discount Flat 12%',
        saving: '₹302',
        redirect: ''
    },
    {
        product: "Amazon Gift Card",
        sellingPrice: '₹4,850',
        price: '₹ 5,000',
        reward: 'Discount Flat 5%',
        saving: '₹150',
        redirect: ''
    },
    {
        product: "Amazon Pay",
        sellingPrice: '₹12,000',
        price: '₹12,000',
        reward: 'Discount Flat 12%',
        saving: '₹302',
        redirect: ''
    },
]
const tabContent = {
    Instructions: [
        "This Voucher can be redeemed at all company authorized TITAN WORLD Stores.",
        "Multiple vouchers (up to 5) can be used against a single transaction.",
        "Gift Vouchers CANNOT be used Online.",
        "Voucher partial redemption is not allowed, single-time usage only.",
        "Voucher is not applicable on discounted products and cannot be clubbed with any other offer in the store.",
        "Voucher cannot be redeemed for Titan Nebula collection of Watches.",
        "Multiple vouchers (up to 5) can be used against a single transaction.",
        "Gift Vouchers CANNOT be used Online.",
    ],
    TermsAndConditions: [
        "The holder of the voucher is deemed to be the beneficiary.",
        "Beneficiary should announce the intent of using the voucher before making a purchase.",
        "Only valid vouchers at the sole discretion of TITAN shall be accepted for redemption.",
        "Multiple vouchers (upto 5) can be used against single transaction.",
        "Voucher partial redemption is not allowed, single time usage only",
        "No refund or credit note would be issued against unused or partially used voucher.",
        "Voucher is not applicable on discounted products and cannot be clubbed with any other offer in the store.",
        "Voucher cannot be redeemed for Titan Nebula collection of Watches",
        "Validity of the voucher is for a maximum of 6 months from the date of issuance.",
        "This Voucher can be redeemed at all company authorized TITAN WORLD Stores",
        "Voucher cannot be revalidated once expired.",
        "TITAN/ affiliates are not responsible on account of the beneficiary sharing the voucher number and the voucher getting redeemed on that account.",
        "The Brand may ask for a valid Government identity proof at the time of redeeming the voucher.",
        "Vouchers will be accepted across all at all company authorized TITAN WORLD Stores mentioned but TITAN at its sole discretion may add or remove an outlet from the list without giving any prior notice.",
        "TITAN makes full efforts to accept voucher but on account of any technical / administrative reasons an outlet may refuse to accept a voucher.",
        "This voucher cannot be redeemed on specific block out dates TITAN may add or delete any date on its sole discretion.",
        "For any queries / issues related to GV / GC, raise a request at www.dummydomain.com",
    ]
};

const Productcard = () => {
    const [activeTab, setActiveTab] = useState("");
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (

        <><section class="letshop mt-4">
            <div class="container big-rr mb-2 ">
                <div class="row justify-content-center bnn p-2">
                    <div class="col-lg-3 plusminus mb-4">
                        <div class="img-cart text-center">
                            <img class="w-100" src={imageAmazon} />
                        </div>
                        <div class="text-center">
                            <span class="namecart">Amazon Gift Card</span>
                            <div class="mt-2"><span class="price-rmn p-2"><img src={coin} class="w-24px " /> 0.5% Rewards Earned</span></div>
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
                                            <p style={{ textAlign: "justify" }}>India’s largest fashion hub for all things trendy, Amazon Gift Card is the one-stop shop for all your fashion needs. Enjoy the best of the season’s fashion fest with thousands of items for you to pick from. Revamp your wardrobe with
                                                a Amazon Gift Card d Gift Voucher from GyFTR that lets you shop on Amazon Gift Card and save money by availing discounts.</p>
                                        </div>
                                        <div className="d-grid gap-2 imp-btns d-flex justify-content-end mt-4">
                                            <a
                                                href=""
                                                onClick={() => handleTabClick('Instructions')}
                                                data-bs-toggle="modal"
                                                data-bs-target="#instruction"
                                            >
                                                <span
                                                    className={`fnt-12px ${activeTab === 'Instructions' ? 'active-tab' : ''}`}
                                                    style={{ borderBottom: "1px solid", color: "#0d6efd" }}
                                                >
                                                    ** Instructions
                                                </span>
                                            </a>
                                            <a
                                                href=""
                                                onClick={() => handleTabClick('TermsAndConditions')}
                                                data-bs-toggle="modal"
                                                data-bs-target="#instruction"
                                            >
                                                <span
                                                    className={`fnt-12px ${activeTab === 'TermsAndConditions' ? 'active-tab' : ''}`}
                                                    style={{ borderBottom: "1px solid", color: "#0d6efd" }}
                                                >
                                                    Terms & Conditions
                                                </span>
                                            </a>
                                            <a
                                                href=""
                                                onClick={() => handleTabClick('Redeem')}
                                                data-bs-toggle="modal"
                                                data-bs-target="#instruction"
                                            >
                                                <span
                                                    className={`fnt-12px ${activeTab === 'Redeem' ? 'active-tab' : ''}`}
                                                    style={{ borderBottom: "1px solid", color: "#0d6efd" }}
                                                >
                                                    How to Redeem?
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="instruction" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content rounded-3">
                                <div class="modal-header">
                                    <span class="" data-bs-dismiss="modal" aria-label="Close"><i class="fa-regular fa-circle-xmark fa-2x cross-icon"></i></span>
                                </div>
                                <div class="modal-body">
                                    <div class="">
                                        <div class="">
                                            <nav className="text-center">
                                                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                                    <button
                                                        className={`nav-link ${activeTab === 'Instructions' ? 'active' : ''}`}
                                                        onClick={() => handleTabClick('Instructions')}
                                                    >
                                                        <i className="fa-solid fa-book-open"></i> &nbsp;Instructions
                                                    </button>
                                                    <button
                                                        className={`nav-link ${activeTab === 'TermsAndConditions' ? 'active' : ''}`}
                                                        onClick={() => handleTabClick('TermsAndConditions')}
                                                    >
                                                        <i className="fa-solid fa-book-open-reader"></i> &nbsp;Terms & Conditions
                                                    </button>
                                                    <button
                                                        className={`nav-link ${activeTab === 'Redeem' ? 'active' : ''}`}
                                                        onClick={() => handleTabClick('Redeem')}
                                                    >
                                                        <i className="fa-solid fa-share-nodes"></i> &nbsp;How to Redeem?
                                                    </button>
                                                </div>
                                            </nav>
                                            <div class="tab-content p-3" id="nav-tabContent">
                                                {activeTab === 'Instructions' && (
                                                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                        <h5 class="fnt-bold">Important Instructions</h5>
                                                        <ul>
                                                            {tabContent.Instructions.map((item, index) => (
                                                                <li key={index} className="list-style">
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>)}
                                                {activeTab === 'TermsAndConditions' && (
                                                    <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                        <h5>Terms and Conditions</h5>
                                                        <ul>
                                                            {tabContent.TermsAndConditions.map((item, index) => (
                                                                <li key={index} className="list-style">
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                {activeTab === 'Redeem' && (
                                                    <div class="tab-pane fade show active" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                        <h5 class="fnt-bold">How to Redeem?</h5>
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <img class="w-100" src={step1} />

                                                                <h6>Go to Store or online platform</h6>
                                                            </div>

                                                            <div class="col-lg-4">
                                                                <img class="w-100" src={step2} />
                                                                <h6>Select your choice of product</h6>
                                                            </div>

                                                            <div class="col-lg-4">
                                                                <img class="w-100" src={step3} />

                                                                <h6>Share your coupen code or apply your code</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            {giftCard.map((cart) => (
                                <div class="col-lg-6 col-12 d-flex justify-content-between pad mt-2">
                                    <div class="the-pricecard text-center">
                                        <h6 class="grf">{cart.product}</h6>
                                        <p class="vouch99 mb-2">{cart.price}</p>
                                    </div>

                                    <div class="thedetails ">
                                        <div class="d-flex justify-content-between text-center">
                                            <div class="font-blk mr-10">
                                                <p>Selling Price</p>
                                            </div>
                                            <div class="font-grn">
                                                <p class="fnt-15">{cart.sellingPrice}</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <div class="font-blk mr-10">
                                                <p>Saving</p>
                                            </div>
                                            <div class="font-blk">
                                                <p class="fnt-15">{cart.saving}</p>
                                            </div>
                                        </div>
                                        <div class="didi text-center mt-2">
                                            <span class="price-rmn5">{cart.reward}</span>
                                        </div>
                                    </div>
                                    <div class="thebtncart text-center">
                                        <a href="#">
                                            <Link to={cart.redirect} class="avail2 " >Add &nbsp;<i class="fa fa-arrow-right"></i></Link>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div class="container d-none">
                        <div class="row">
                            <div class="col-12">
                                <table class="table table-bordered magic-table">
                                    <thead>
                                        <tr style={{ backgroundColor: "aliceblue" }}>
                                            <th scope="col" style={{ width: "3%" }}>S.NO</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Discount</th>
                                            <th scope="col">Points Earning</th>
                                            <th scope="col">Saving</th>
                                            <th scope="col" style={{ width: "16%" }}></th>
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
                            <a ><span class="cnt-shop-bluecart clr-white flr-ryt">Add to Cart</span></a>
                        </div>
                    </div>

                    <div class="fs-14 pt-md-0 desktop-hide mt-2">
                        <p style={{ textAlign: "justify" }}>India’s largest fashion hub for all things trendy, Amazon Gift Card is the one-stop shop for all your fashion needs. Enjoy the best of the season’s fashion fest with thousands of items for you to pick from. Revamp your wardrobe with
                            a Amazon Gift Card d Gift Voucher from GyFTR that lets you shop on Amazon Gift Card and save money by availing discounts.</p>
                    </div>
                </div>
            </div>
        </section>

            <section class="letshop pt-4rem">
                <div class="container big-rr mb-2">

                    <div class="row ">
                        <div class="d-flex justify-content-between mb-4">
                            <div class="first">
                                <h5 style={{ fontSize: "26px", fontWeight: "700" }}>Handpicked For You</h5>
                                <p class="the-para-magic2">More and more suggestions for you</p>
                            </div>
                            <div class="second mt-4">
                                <a class="avail2  mt-4" href="#">View All &nbsp;<i class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>

                        {data.map((cart) => (
                            <div class="col-lg-2 col-4 mb-3">
                                <div class="box-coupen">
                                    <div class="img-sec">
                                        <div class="bagde-flag-wrap">
                                            <a href="#" class="bagde-flag"> {cart.discount} </a>
                                        </div>
                                        <img class="w-144" src={cart.img} />
                                    </div>
                                    <div class="coupendis">
                                        <div class="fnt-12px mb-1">{cart.product}</div>
                                        <div class="price-rr mb-1 ">{cart.price}</div>
                                        <div class="price-rmn"> <img src={coin} class="w-24px" />{cart.reward}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Productcard;