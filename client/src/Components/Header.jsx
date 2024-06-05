import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'; // Update the path to your logo

const Header = () => {
  return (
    <header className="header">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ul className="top-link">
                <li><a href="#">About</a></li>
                <li><a href="#">Doctors</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              <ul className="top-contact">
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  +880 1234 56789
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:support@yourmail.com" style={{marginLeft:'8px'}}>contact@yourmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <div className="logo">
                  <a><img src={Logo} alt="Logo" /></a>
                </div>
                <div className="mobile-nav"></div>
              </div>
              <div className="col-lg-7 col-md-9 col-12">
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active"><Link to="/home">Home</Link></li>
                      <li><Link to="/doctors_login" className="active">Doctors</Link></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Pages</a></li>
                      <li><a href="#">Blogs</a>
                      </li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-2 col-12">
                <div className="get-quote">
                  <Link to="/appointment" className="btn">Book Appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
