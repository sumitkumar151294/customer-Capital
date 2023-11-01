import React from 'react'

const OrderSummary = () => {
  return (
    <section className="letshop">
<div className="container   big-rr mb-2">
  
  <div className="row justify-content-center">
    <div className="col-lg-5 col-12">
        <div className="text-center">
            <h1 className='point-heading' >THANK YOU</h1>
    <h4 style={{marginBottom:'5px',fontWeight:'400',color:'#8b8a8a',lineHeight:'1.2',fontSize:'calc(1.275rem + .3vw)'}} >Your order has been placed successfully</h4>
    <h6 style={{fontSize:'1rem'}} >Order Number - <strong>Z15254</strong></h6>
    <h6 style={{fontSize:'1rem'}} >Total Amount - <strong>₹5122</strong></h6>
</div>
</div>
</div>
</div>
</section>
  )
}

export default OrderSummary