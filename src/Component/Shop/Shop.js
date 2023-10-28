import React, { useEffect } from 'react'
import img1 from '../../Images/prezzee-card-new-red.png'
import img2 from '../../Images/airbnb-uk-approved-nov21.png'
import img3 from '../../Images/prezzee-uk-themes-0-copy-ad2f252.png'
import img4 from '../../Images/asos.png'
import img5 from '../../Images/john-lewis-partners-uk-1120.jpg'
import { Link } from 'react-router-dom'
import { onProductSubmit } from '../../redux/modules/Admin/productSlice'
import { useDispatch } from 'react-redux'

const Shop = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    debugger
    dispatch(onProductSubmit());
  },[])
  return (
<>
<section class="letshop pt-4rem">
<div class="container   big-rr mb-2">
  
  <div class="row ">
    <div class="d-flex justify-content-between mb-4">
        <div class="first w-70">
            <h5 
            style={{fontWeight:700}}
            >You Choose the gift card They choose where to spend it!</h5>
    <p class="the-para-magic2 mobile-hide">Just your kind of shopping – your go-to brands, your wish-list products, all with irresistible offers.</p>
  
</div>


<div class="second">
<a class="avail2  mt-4" href="#">View All &nbsp;<i class="fa fa-arrow-right"></i></a>
    </div>

</div>

<div class="col-lg-2 col-3 text-center">
    <Link to="/productcart" >
    <div class="offer-box1">
    <img class="w-100" src={img1} />

    <div class="bagde-flag-wrap2">
      <a href="#" class="bagde-flag2">New</a>
    </div>
 <div class="coupendis mt-4">
    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
        <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>
       
      </div>
</div>
</Link>
</div>


<div class="col-lg-2 col-3 text-center">
    <div class="offer-box1">
    <img class="w-100" src={img2} />

 <div class="coupendis mt-4">
    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
        <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>
       
      </div>
</div>
</div>

<div class="col-lg-2 col-3 text-center">
    <div class="offer-box1">
    <img class="w-100" src={img3} />
 <div class="coupendis mt-4">
    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
        <div class="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>
       
      </div>
</div>
</div>


<div class="col-lg-2 col-3 text-center">
    <div class="offer-box1">
    <img class="w-100" src={img4} />
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
    <img class="w-100" src={img5} />
    <div class="bagde-flag-wrap2">
      <a href="#" class="bagde-flag2">New</a>
    </div>
 <div class="coupendis mt-4">
    <div class="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
        <div class="fnt-12px text-muted mb-1  ">Domino's Shopping Voucher</div>
       
      </div>
</div>
</div>




  </div>
</div>
</section>

</>
  )
}

export default Shop