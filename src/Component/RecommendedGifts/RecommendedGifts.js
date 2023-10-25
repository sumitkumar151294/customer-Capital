import React from 'react'
import { Link } from 'react-router-dom';
// import bata from '../../Images/bata.png'
import img1 from '../../Images/prezzee-card-new-red.png'
import img2 from '../../Images/airbnb-uk-approved-nov21.png'
import img3 from '../../Images/prezzee-uk-themes-0-copy-ad2f252.png'
import img4 from '../../Images/asos.png'
import img5 from '../../Images/john-lewis-partners-uk-1120.jpg'
import img6 from '../../Images/john-lewis-partners-uk-1120.jpg'
import img7 from '../../Images/prezzee-card-new-red.png'
import img8 from '../../Images/airbnb-uk-approved-nov21.png'
import img9 from '../../Images/prezzee-uk-themes-0-copy-ad2f252.png'
import img10 from '../../Images/asos.png'
import img11 from '../../Images/john-lewis-partners-uk-1120.jpg'

const data = [
    {
        productType: 'New',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img1,
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img2,
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img3,
    },
    {
        productType: 'New',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img4
    },
    {
        productType: 'New',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img5
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img6
    },
    {
        productType: 'New',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img7
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img8
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img9
    },
    {
        productType: 'New',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img10
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img11
    },
    
];

export const RecommendedGifts = () => {
    return (
        <>
            <section class="letshop pt-4rem">
                <div class="container   big-rr mb-2 pt-0">
                    <div class="row text-center mb-4">
                        <span class="big-head text-center">Recommended Gifts for you</span>
                        <span class="big-head2 mt-2">Buy, Send &amp; Claim Gift Cards. Chip in with Friends. Store &amp; Manage Gift Cards.</span>
                    </div>
                    <div class="row ">
                        {data.map((cart) => (
                            <div class="col-lg-2 col-3 text-center mb-4">
                                <Link to='/productcart'>
                                    <div class="offer-box1">
                                        <img class="w-100" src={cart.img} />
                                        <div class="bagde-flag-wrap2">
                                            <Link to={cart.redirect} class="bagde-flag2">{cart.productType}</Link>
                                        </div>
                                        <div class="coupendis mt-4">
                                            <div class="fnt-12px text-dark1 ">{cart.discount}&nbsp;</div>
                                            <div class="fnt-12px text-muted mb-1 ">{cart.product}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div >
            </section >
        </>
    )
}