import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faTwitter, faVimeo, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight,faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            {/* Footer Top */}
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer">
                                <h2>About Us</h2>
                                <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                                {/* Social */}
                                <ul className="social">
                                    <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li><a href="https://plus.google.com"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                                    <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="https://vimeo.com"><FontAwesomeIcon icon={faVimeo} /></a></li>
                                    <li><a href="https://www.pinterest.com"><FontAwesomeIcon icon={faPinterest} /></a></li>
                                </ul>
                                {/* End Social */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link" >
                                <h2>Quick Links</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">Home</a></li>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">About Us</a></li>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">Services</a></li>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">Our Cases</a></li>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">Other Links</a></li>  
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">Consulting</a></li>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">Finance</a></li>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">Testimonials</a></li>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">FAQ</a></li>
                                            <li><FontAwesomeIcon icon={faCaretRight} /><a href="#">Contact Us</a></li>  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer">
                                <h2>Open Hours</h2>
                                <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                                <ul className="time-sidual">
                                    <li className="day">Monday - Friday <span>8.00-20.00</span></li>
                                    <li className="day">Saturday <span>9.00-18.30</span></li>
                                    <li className="day">Monday - Thursday <span>9.00-15.00</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer">
                                <h2>Newsletter</h2>
                                <p>Subscribe to our newsletter to get all our news in your inbox. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <form action="mail/mail.php" method="post" target="_blank" className="newsletter-inner">
    <input name="email" placeholder="Email Address" className="common-input" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Your email address'} required="" type="email" />
    <button className="button"><FontAwesomeIcon icon={faPaperPlane} /></button>
</form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Top */}
            {/* Copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="copyright-content">
                                <p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Copyright */}
        </footer>
    );
}

export default Footer;
