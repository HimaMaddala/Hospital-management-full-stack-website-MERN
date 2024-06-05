import React, { useState, useEffect } from 'react';
import slider from '../img/slider.jpg'
import slider2 from '../img/slider2.jpg'
import slider3 from '../img/slider3.jpg'
import './Slider.css'
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: slider,
      heading: 'We Provide Medical Services That You Can Trust!',
      text: ' Our commitment to providing exceptional medical services ensures that you and your loved ones receive the highest standard of care, every step of the way',      buttons: [
        { text: 'Get Appointment', link: '#' },
        { text: 'Learn More', link: '#', primary: true },
      ],
    },
    {
      image: slider2,
      heading: 'We Provide Medical Services That You Can Trust!',
      text: ' Our commitment to providing exceptional medical services ensures that you and your loved ones receive the highest standard of care, every step of the way',
      buttons: [
        { text: 'Get Appointment', link: '#' },
        { text: 'About Us', link: '#', primary: true },
      ],
    },
    {
      image: slider3,
      heading: 'We Provide Medical Services That You Can Trust!',
      text: ' Our commitment to providing exceptional medical services ensures that you and your loved ones receive the highest standard of care, every step of the way',
            buttons: [
        { text: 'Get Appointment', link: '#' },
        { text: 'Contact Now', link: '#', primary: true },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="slider">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`single-slider ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      {slide.heading.split(' ').map((word, i) => (
                        <span key={i}>{word} </span>
                      ))}
                    </h1>
                    <p>{slide.text}</p>
                    <div className="button">
                      {slide.buttons.map((button, i) => (
                        <a
                          key={i}
                          href={button.link}
                          className={`btn ${button.primary ? 'primary' : ''}`}
                        >
                          {button.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
