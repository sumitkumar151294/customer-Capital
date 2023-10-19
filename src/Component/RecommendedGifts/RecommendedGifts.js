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
        redirect:'/productcart'
        
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img2,
        redirect:''
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img3,
        redirect:''
    },
    {
        productType: 'New',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img4,
        redirect:''
    },
    {
        productType: 'New',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img5,
        redirect:''
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img6,
        redirect:''
    },
    {
        productType: 'New',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img7,
        redirect:''
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img8,
        redirect:''
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img9,
        redirect:''
    },
    {
        productType: 'New',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img10,
        redirect:''
    },
    {
        productType: '',
        discount: 'Upto 15% Discount',
        product: "Domino's Shopping Voucher",
        img: img11,
        redirect:''
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
                            <div class="col-lg-2 col-3 text-center">
                                <Link to={cart.redirect}>
                                    <div class="offer-box1">
                                        <img class="w-100" src={cart.img} />
                                        <div class="bagde-flag-wrap2">
                                            <Link to={cart.redirect} class="bagde-flag2">{cart.productType}</Link>
                                        </div>
                                        <div class="coupendis mt-4">
                                            <div class="fnt-12px text-dark ">{cart.discount}&nbsp;</div>
                                            <div class="fnt-12px text-muted mb-1 ">{cart.product}</div>

                                        </div>
                                    </div>
                                </Link>
                            </div>

                        ))}
                        {/* 

                        <div class="col-lg-2 col-3 text-center">
                            <div class="offer-box1">
                                <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/airbnb-uk-approved-nov21-0dc0dee1-607a-48c5-84a0-0a7d4b104b3e/airbnb-uk-approved-nov21.jpg" />
                                <div class="coupendis mt-4">
                                    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-3 text-center">
                            <div class="offer-box1">
                                <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/prezzee-uk-themes-0-copy-ad2f252-af6b8fe0-e189-47f3-bcea-c82182489cae/prezzee-uk-themes-0-copy-ad2f252.jpg" />
                                <div class="coupendis mt-4">
                                    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>

                                </div>
                            </div>
                        </div>


                        <div class="col-lg-2 col-3 text-center">
                            <div class="offer-box1">
                                <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/asos-62bfbd29-2c20-4328-ac41-fb4ceef953f8/asos.jpg" />
                                <div class="bagde-flag-wrap2">
                                    <a href="#" class="bagde-flag2">New</a>
                                </div>
                                <div class="coupendis mt-4">
                                    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-3 text-center">
                            <div class="offer-box1">
                                <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/john-lewis-partners-uk-1120-e34de00f-9964-4ce1-9836-2d9c0a4c9aef/john-lewis-partners-uk-1120.jpg" />
                                <div class="bagde-flag-wrap2">
                                    <a href="#" class="bagde-flag2">New</a>
                                </div>
                                <div class="coupendis mt-4">
                                    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div class="fnt-12px text-muted mb-1  ">Domino's Shopping Voucher</div>

                                </div>
                            </div>
                        </div>


                        <div class="col-lg-2 col-3 text-center mt-25">
                            <div class="offer-box1">
                                <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/john-lewis-partners-uk-1120-e34de00f-9964-4ce1-9836-2d9c0a4c9aef/john-lewis-partners-uk-1120.jpg" />
                                <div class="coupendis mt-4">
                                    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div class="fnt-12px text-muted mb-1  ">Domino's Shopping Voucher</div>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-3 text-center mt-25">
                            <a >
                                <div class="offer-box1">
                                    <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/prezzee-card-new-red-bd2e2a90-1d56-4742-b731-79eb42dea47f/prezzee-card-new-red.jpg" />
                                    <div class="bagde-flag-wrap2">
                                        <a href="#" class="bagde-flag2">New</a>
                                    </div>
                                    <div class="coupendis mt-4">
                                        <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                        <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>

                                    </div>
                                </div>
                            </a>
                        </div>


                        <div class="col-lg-2 col-3 text-center mt-25">
                            <div class="offer-box1">
                                <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/airbnb-uk-approved-nov21-0dc0dee1-607a-48c5-84a0-0a7d4b104b3e/airbnb-uk-approved-nov21.jpg" />
                                <div class="coupendis mt-4">
                                    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-3 text-center mt-25 ">
                            <div class="offer-box1">
                                <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/prezzee-uk-themes-0-copy-ad2f252-af6b8fe0-e189-47f3-bcea-c82182489cae/prezzee-uk-themes-0-copy-ad2f252.jpg" />
                                <div class="coupendis mt-4">
                                    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>

                                </div>
                            </div>
                        </div>


                        <div class="col-lg-2 col-3 text-center mt-25">
                            <div class="offer-box1">
                                <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/asos-62bfbd29-2c20-4328-ac41-fb4ceef953f8/asos.jpg" />
                                <div class="bagde-flag-wrap2">
                                    <a href="#" class="bagde-flag2">New</a>
                                </div>
                                <div class="coupendis mt-4">
                                    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-3 text-center mt-25">
                            <div class="offer-box1">
                                <img class="w-100" src="https://files.prezzee.uk/media/sku-theme-designs/john-lewis-partners-uk-1120-e34de00f-9964-4ce1-9836-2d9c0a4c9aef/john-lewis-partners-uk-1120.jpg" />
                                <div class="coupendis mt-4">
                                    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div class="fnt-12px text-muted mb-1  ">Domino's Shopping Voucher</div>

                                </div>
                            </div>
                        </div> */}




                    </div>
                </div >
            </section >
        </>
    )
}