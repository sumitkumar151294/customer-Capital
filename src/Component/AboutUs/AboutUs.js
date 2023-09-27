import React from 'react'
import img from '../../Images/carttop.png'
const AboutUs = () => {

  return (
    <>
      <section className="letshop">
        <div className="container big-rr mb-2">

          <div className="row ">
            <div className="">
              <div className="text-center">
                <h4 className="gou">About LC-Reward Gift</h4>
              </div>
              <img className="w-100 hip" src={img} />
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true" aria-controls="collapseOne">
                    <strong>About LC- Customer Capital - Gifts</strong>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Are you looking for online Gift Cards? If so, LC Reward Customer Capital - Gifts is the place for you. Discover online Gift Vouchers of more than 200 brands in a single place with some amazing deals and discounts. Whether you are seeking discounted Gift Cards codes for your loved ones or corporate Gift Vouchers for clients, you will find it all here. No hassles! No convenience fee! No logistics issue. Buying and redeeming these vouchers is a breeze.</p>

                    <span><strong>What are Gift Cards?</strong></span>
                    <p>
                      Gift Cards are prepaid Cards of brands with a certain value. You can buy products or services from that brand to redeem the existing value of the Cards. For example, if you have a Pizza Hut voucher of Rs. 1000, you can use it to order a meal of up to Rs. 1000 from one of its outlets.
                    </p>



                    <span><strong>Why Choose LC Reward Customer Capital - Gifts to Buy Gift Cards?</strong></span>
                    <p>
                      The Gift vouchers online from LC Reward Customer Capital - Gifts come with many advantages. The primary benefit is that you can get loads of discounts on different brands listed in its catalog. In fact, the discounted Gift Vouchers are available with up to 40% OFF. And, you can use debit or credit cards from any bank. There are also other online payment options, including UPI and net banking.
                    </p>

                    <p>With LC Reward Customer Capital - Gifts, you can send digital Gift vouchers to your loved ones directly. Just enter their contact details (email/phone number), and they will receive the Gift voucher within a few minutes.
                    </p>

                    <p>The e-gift Cards from LC Reward Customer Capital - Gifts also come with other exciting offers. When you purchase a voucher, you can get offers, such as free subscriptions to streaming services, online fitness sessions, or discounts on other brands. These offers vary by the brand you have chosen. We keep on updating these offers, which is why you should check our Offers page regularly.
                    </p>









                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default AboutUs