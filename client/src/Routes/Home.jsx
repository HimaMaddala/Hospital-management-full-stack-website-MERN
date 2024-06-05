import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'
import section_img from '../img/section-img.png'
import contact_img from '../img/contact-img.png'
import pf1 from "../img/pf1.jpg"
import pf2 from "../img/pf2.jpg"
import pf3 from "../img/pf3.jpg"
import pf4 from "../img/pf4.jpg"
import blog1 from "../img/blog1.jpg"
import blog2 from "../img/blog2.jpg"
import blog3 from "../img/blog3.jpg"
import client1 from "../img/client1.png"
import client2 from "../img/client2.png"
import client3 from "../img/client3.png"
import client4 from "../img/client4.png"
import client5 from "../img/client5.png"


import slider from '../img/slider.jpg'
import slider2 from '../img/slider2.jpg'
import slider3 from '../img/slider3.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,faAmbulance, faLongArrowRight, faCaretRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/bootstrap.min.css';
import '../css/nice-select.css';
import '../css/font-awesome.min.css';
import '../css/icofont.css';
import '../css/slicknav.min.css';
import '../css/owl-carousel.css';
import '../css/datepicker.css';
import '../css/animate.min.css';
import '../css/magnific-popup.css';
import '../css/normalize.css';
import '../style.css';
import '../css/responsive.css';
import Slider from '../Components/Slider';



const Home = () => (
  <>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" content="Site keywords here" />
      <meta name="description" content="" />
      <meta name="copyright" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <title>Mediplus - Free Medical and Doctor Directory HTML Template.</title>

      <link rel="icon" href="../img/favicon.png" />

      <link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet" />

    </head>

    <body>
      {/* Preloader */}
       {/* <div className="preloader">
        <div className="loader">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
          <div className="indicator">
            <svg width="16px" height="12px">
              <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
              <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
            </svg>
          </div>
        </div>
      </div> */}

      {/* Pro Features Section */}
      <ul className="pro-features">
        <li className="big-title">Pro Version Available on Themeforest</li>
        <li className="title">Pro Version Features</li>
        <li>2+ premade home pages</li>
        <li>20+ html pages</li>
        <li>Color Plate With 12+ Colors</li>
        <li>Sticky Header / Sticky Filters</li>
        <li>Working Contact Form With Google Map</li>
      </ul>

      <Header/>

      {/* Slider Area */}
      <Slider/>
      
      {/* Schedule Area */}
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* single-schedule */}
                <div className="single-schedule first">
                  <div className="inner">
                  <div className="icon">
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="single-content">
                      <span>Call hospitals</span>
                      <h4>Emergency Cases</h4>
                      <p>In case of emergency, don't hesitate to call our hospital hotline. Our expert team is ready to provide immediate assistance</p>
                      <a href="#">LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* single-schedule */}
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="single-content">
                      <span>Time table</span>
                      <h4>Doctors shifts</h4>
                      <p>Experience our round-the-clock care with dedicated physicians working in rotational shifts</p>
                      <a href="#">LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                {/* single-schedule */}
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock"></i>
                    </div>
                    <div className="single-content">
                      <span>Appointments</span>
                      <h4>Working Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">Monday - Friday <span>8.00-20.00</span></li>
                        <li className="day">Saturday <span>9.00-18.30</span></li>
                        <li className="day">Monday - Thursday <span>9.00-15.00</span></li>
                      </ul>
                      <a href="#">LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Features */}
    <section className="Features section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Are Always Ready to Help You & Your Family</h2>
              <img src={section_img} alt="#" />
              <p>Our commitment to providing exceptional medical services ensures that you and your loved ones receive the highest standard of care, every step of the way</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12">
            {/* Start Single features */}
            <div className="single-features">
              
              <h3>Emergency Help</h3>
              <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
            </div>
            {/* End Single features */}
          </div>
          <div className="col-lg-4 col-12">
            {/* Start Single features */}
            <div className="single-features">
              
              <h3>Enriched Pharmacy</h3>
              <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
            </div>
            {/* End Single features */}
          </div>
          <div className="col-lg-4 col-12">
            {/* Start Single features */}
            <div className="single-features last">
              
              <h3>Medical Treatment</h3>
              <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
            </div>
            {/* End Single features */}
          </div>
        </div>
      </div>
    </section>
    {/* End Features */}
    
    {/* Start Fun-facts */}
    <div id="fun-facts" className="fun-facts section overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Fun */}
            <div className="single-fun">
              <div className="content">
              <i className="bi bi-house-door"></i>
                <span className="counter">3468</span>
                <p>Hospital Rooms</p>
              </div>
            </div>
            {/* End Single Fun */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Fun */}
            <div className="single-fun">
              
              <div className="content">
              <i class="bi bi-person-check-fill"></i>
                <span className="counter">557</span>
                <p>Specialist Doctors</p>
              </div>
            </div>
            {/* End Single Fun */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Fun */}
            <div className="single-fun">
              
              <div className="content">
              <i class="bi bi-heart"></i>
                <span className="counter">4379</span>
                <p>Happy Patients</p>
              </div>
            </div>
            {/* End Single Fun */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Fun */}
            <div className="single-fun">
              <div className="content">
              <i class="bi bi-calendar-check"></i>
                <span className="counter">32</span>
                <p>Years of Experience</p>
              </div>
            </div>
            {/* End Single Fun */}
          </div>
        </div>
      </div>
    </div>
    {/* End Fun-facts */}
    
    {/* Start Why choose */}
    <section className="why-choose section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Offer Different Services To Improve Your Health</h2>
              <img src={section_img} alt="#" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            {/* Start Choose Left */}
            <div className="choose-left">
              <h3>Who We Are</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.</p>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list">
                    <li><i class="bi bi-caret-right-fill"></i>Maecenas vitae luctus nibh.</li>
                    <li><i class="bi bi-caret-right-fill"></i>Duis massa massa.</li>
                    <li><i class="bi bi-caret-right-fill"></i>Aliquam feugiat interdum.</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list">
                    <li><i class="bi bi-caret-right-fill"></i>Maecenas vitae luctus nibh.</li>
                    <li><i class="bi bi-caret-right-fill"></i>Duis massa massa.</li>
                    <li><i class="bi bi-caret-right-fill"></i>Aliquam feugiat interdum.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Choose Left */}
          </div>
          <div className="col-lg-6 col-12">
            {/* Start Choose Right */}
            <div className="choose-right">
              <div className="video-image">
                {/* Video Animation */}
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
                {/* End Video Animation */}
                <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" className="video video-popup mfp-iframe"><i class="bi bi-caret-right-fill"></i></a>
              </div>
            </div>
            {/* End Choose Right */}
          </div>
        </div>
      </div>
    </section>
    {/* End Why choose */}
    {/* Start Call to action */}
<section className="call-action overlay" data-stellar-background-ratio="0.5">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
                <div className="content">
                    <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
                    <div className="button">
                        <a href="#" className="btn">Contact Now</a>
                        <a href="#" className="btn second">Learn More<i class="bi bi-caret-right-fill"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/*/ End Call to action */}

{/* Start portfolio */}
<section className="portfolio section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                    <img src={section_img} alt="#" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/*/ End portfolio */}

{/* Start service */}
<section className="services section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h2>We Offer Different Services To Improve Your Health</h2>
                    <img src={section_img} alt="#" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                <i class="bi bi-bookmark-check"></i>
                    <h4><a href="service-details.html">General Treatment</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>    
                </div>
                {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                <i class="bi bi-check2"></i>
                    <h4><a href="service-details.html">Teeth Whitening</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>    
                </div>
                {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                <i class="bi bi-heart"></i>
                    <h4><a href="service-details.html">Heart Surgery</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>    
                </div>
                {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                <i class="bi bi-ear-fill"></i>
                    <h4><a href="service-details.html">Ear Treatment</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>    
                </div>
                {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                <i class="bi bi-eye-fill"></i>
                    <h4><a href="service-details.html">Vision Problems</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>    
                </div>
                {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                <i class="bi bi-droplet-half"></i>
                    <h4><a href="service-details.html">Blood Transfusion</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>    
                </div>
                {/* End Single Service */}
            </div>
        </div>
    </div>
</section>
{/*/ End service */}

   
 {/* End Pricing Table */}
  {/* Start Blog Area */}
<section className="blog section" id="blog">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h2>Keep up with Our Most Recent Medical News.</h2>
                    <img src={section_img} alt="#" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
                {/* Single Blog */}
                <div className="single-news">
                    <div className="news-head">
                        <img src={blog1} alt="#" />
                    </div>
                    <div className="news-body">
                        <div className="news-content">
                            <div className="date">22 Aug, 2020</div>
                            <h2><a href="blog-single.html">We have annnocuced our new product.</a></h2>
                            <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                        </div>
                    </div>
                </div>
                {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                {/* Single Blog */}
                <div className="single-news">
                    <div className="news-head">
                        <img src={blog2} alt="#" />
                    </div>
                    <div className="news-body">
                        <div className="news-content">
                            <div className="date">15 Jul, 2020</div>
                            <h2><a href="blog-single.html">Top five way for solving teeth problems.</a></h2>
                            <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                        </div>
                    </div>
                </div>
                {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                {/* Single Blog */}
                <div className="single-news">
                    <div className="news-head">
                        <img src={blog3} alt="#" />
                    </div>
                    <div className="news-body">
                        <div className="news-content">
                            <div className="date">05 Jan, 2020</div>
                            <h2><a href="blog-single.html">We provide highly business soliutions.</a></h2>
                            <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                        </div>
                    </div>
                </div>
                {/* End Single Blog */}
            </div>
        </div>
    </div>
</section>
{/* End Blog Area */}

{/* Start clients */}
<div className="clients overlay">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
                <div className="owl-carousel clients-slider">
                    <div className="single-clients">
                        <img src={client1} alt="#" />
                    </div>
                    <div className="single-clients">
                        <img src={client2} alt="#" />
                    </div>
                    <div className="single-clients">
                        <img src={client3} alt="#" />
                    </div>
                    <div className="single-clients">
                        <img src={client4} alt="#" />
                    </div>
                    <div className="single-clients">
                        <img src={client4} alt="#" />
                    </div>
                    <div className="single-clients">
                        <img src={client5} alt="#" />
                    </div>
                    <div className="single-clients">
                        <img src={client4} alt="#" />
                    </div>
                    <div className="single-clients">
                        <img src={client3} alt="#" />
                    </div>
                    <div className="single-clients">
                        <img src={client4} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/*/Ens clients */}

{/* Start Appointment */}
<section className="appointment">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                    <img src={section_img} alt="#" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
                <form className="form" action="#">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                                <input name="name" type="text" placeholder="Name" />
                            </div>
                        </div>
                        {/* Other form inputs */}
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-4 col-12">
                            <div className="form-group">
                                <div className="button">
                                    <button type="submit" className="btn">Book An Appointment</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-12">
                            <p>( We will be confirm by an Text Message )</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-6 col-md-12 ">
                <div className="appointment-image">
                    <img src={contact_img} alt="#" />
                </div>
            </div>
        </div>
    </div>
</section>
{/* End Appointment */}
  {/* Start Newsletter Area */}
<section className="newsletter section">
    <div className="container">
        <div className="row ">
            <div className="col-lg-6  col-12">
                {/* Start Newsletter Form */}
                <div className="subscribe-text ">
                    <h6>Sign up for newsletter</h6>
                    <p className="">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br /> homero alterum.</p>
                </div>
                {/* End Newsletter Form */}
            </div>
            <div className="col-lg-6  col-12">
                {/* Start Newsletter Form */}
                <div className="subscribe-form ">
                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                        <input name="EMAIL" placeholder="Your email address" className="common-input" onFocus="this.placeholder = ''"
                            onBlur="this.placeholder = 'Your email address'" required="" type="email" />
                        <button className="btn">Subscribe</button>
                    </form>
                </div>
                {/* End Newsletter Form */}
            </div>
        </div>
    </div>
</section>
{/* /End Newsletter Area */}

{/* Footer Area */}
<Footer/>
    </body>
  </>
);

export default Home;
