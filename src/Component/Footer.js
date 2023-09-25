import logo from './logo.svg';
import './App.css';
import image from '.././src/Assets/whatsapp.png';

function Footer() {
  return (
    <footer class="footer">
    <section class="contact-area pb-3" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">

                        <p>LC Reward- Customer Capital Capital Gifts are prepaid Cards of brands with a certain value. You can buy products or services from that brand to redeem the existing value of the Cards. </p>
                        <div class="hr">
                        <h6>hello@contact.com</h6>
                        <h6>+9-19870223180</h6>
                        </div>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-youtube"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-twitter"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container-xl mt-2">
        <div class="row gx-0">
            <div class="col-12 col-md-8 pb-3 mb-3 border-bottom">
                <ul class="list-inline m-0 text-center text-md-start">
                    <li class="list-inline-item"><a href="contact.html" class="clr-white">Contact us</a></li>
                    <li class="list-inline-item" ><a href="about.html" class="clr-white">About us</a></li>
                    <li class="list-inline-item"><a href="faq.html" class="clr-white">FAQs</a></li>
                    <li class="list-inline-item"><a href="blog.html" class="clr-white">Blog</a></li>
                    <li class="list-inline-item"><a href="dashboard.html" class="clr-white">My Profile</a></li>
                    <li class="list-inline-item"><a href="dashboard.html#v-pills-profile" class="clr-white">My Orders</a></li>
                </ul>
            </div>
            <div class="col-5 col-md-4 pb-3 mb-3 border-bottom">
                <ul class="list-inline mb-0 text-start text-md-end">

                    <li class="list-inline-item d-none d-md-inline-block clr-white">Social Media:</li>
                    <li class="list-inline-item">
                        <a target="_blank" rel="noreferrer" aria-label="fb-logo" href="#"><i class={image}></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a target="_blank" rel="noreferrer" aria-label="instagram-logo" href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a target="_blank" rel="noreferrer" aria-label="twitter-logo" href="#"><i class="lab la-twitter clr-white" ></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a target="_blank" rel="noreferrer" aria-label="yt-logo" href="#"><i class="lab la-youtube clr-white"></i></a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-12 order-mobile-last text-center">
                <ul class="list-inline m-0 fs-12 text-center text-md-start">
                    <li class="list-inline-item"><a href="privacypolicy.html" class="clr-white">Privacy Policy</a></li>
                    <li class="list-inline-item"><a href="termsofuse.html" class="clr-white">Terms of Use</a></li>
                    <li class="list-inline-item"><a href="loyaltyprogram.html" class="clr-white">LC Loyalty-Program</a></li>
                    <li class="list-inline-item"><a href="#" class="clr-white">Site Map</a></li>
                </ul>
            </div>

        </div>
    </div>


</footer>
  );
}

export default Footer;