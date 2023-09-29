import React from 'react'
import img from '../../Images/carttop.png'

const ContactusContent = () => {
    return (
        <>
            <section class="letshop">
                <div class="container big-rr mb-2">

                    <div class="row ">
                        <div >
                            <div class="text-center">
                                <h4 class="gou">Contact us for your query!</h4>
                            </div>
                            <img class="w-100 hip" src={img} />
                        </div>

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>Contact us </strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">

                                        <section class="">

                                            <div class="footer_get_touch_inner grid-70-30">
                                                <div class="colmun-70 get_form">
                                                    <div class="get_form_inner">

                                                        <form action="#" class="lis">
                                                            <div class="grid-50-50">
                                                                <input type="text" placeholder="First Name" />
                                                                <input type="text" placeholder="Last Name" />
                                                                <input type="email" placeholder="Email" />
                                                                <input type="tel" placeholder="Phone/Skype" />
                                                            </div>
                                                            <div class="grid-full">
                                                                <textarea placeholder="About Your Project" cols="30" rows="10"></textarea>
                                                                <input type="submit" value="Submit" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="colmun-30 get_say_form">
                                                    <h5>Hi! Jaswant Rawat</h5>
                                                    <ul class="get_say_info_sec">
                                                        <li>
                                                            <i class="fa fa-envelope"></i>
                                                            <a href="mailto:">hello@contact.com</a>
                                                        </li>
                                                        <li>
                                                            <i class="fab fa-whatsapp"></i>
                                                            <a href="tel:">+919870223180</a>
                                                        </li>

                                                        <li>
                                                            <i class="fa fa-phone"></i>
                                                            <a href="tel:">+919870223180</a>
                                                        </li>

                                                    </ul>
                                                    <ul class="get_say_social-icn">
                                                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            </section>

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

                            export default ContactusContent