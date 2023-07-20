import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LazyImgLoad } from "../index";

const ImageSlider = ({ images, descriptions }) => {

      const [currentSlide, setCurrentSlide] = useState(0);
      const nextSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      };
      const prevSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
      };
      useEffect(() => {
            const interval = setInterval(() => {
                  setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
            }, 1500);

            return () => {
                  clearInterval(interval);
            };
      }, [images.length]);

      return (
            <div className="home_img-slider">
                  <div className="home_slider-content">
                        <h1>{descriptions[currentSlide]}</h1>
                        <p>Your Sofa is where you let your guard down, put your feet up, and just relax</p>
                        <a href="/shop">SHOP NOW</a>
                        <div className="img_slide-button">
                              <button type="button" onClick={prevSlide}>
                                    <MdOutlineKeyboardArrowLeft fontSize={30} />
                              </button>
                              <button type="button" onClick={nextSlide}>
                                    <MdOutlineKeyboardArrowRight fontSize={30} />
                              </button>
                        </div>
                  </div>
                  <div className="home_slider-img">
                        <LazyImgLoad src={images[currentSlide]} CName={''} />
                  </div>
            </div>
      );
};

export default ImageSlider;