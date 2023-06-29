import React, { useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { ImageSlider, ShopItem } from "../../Constant/index";
import {
      h1, h2, h3, h4, h5, sofaBedio, Chair, Table, Sofa, Jhoola, Special_img,
      s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13
} from "../../Data/Images/index";
import { addToCart } from '../../Store/StoreCart/StoreCart';
import data from "../../Data/ItemData";

import './home.css';

const Home = () => {
      let images = [h1, h2, h3, h4, h5];
      let descriptions = [
            "Sunday Modular Lether Chaise", " Modular Lether Chaise", "Sunday  Lether Chaise",
            "Sunday Modular  Chaise", "Sunday Modular Lether"
      ];

      const items = useSelector((state) => state.allCart.item.recommendation);
      const dispatch = useDispatch();

      const [playVideo, setPlayVideo] = useState(false)
      const vidRef = React.useRef();
      const handlevideo = () => {
            setPlayVideo((prevPlayVideo) => !prevPlayVideo)
            if (playVideo) {
                  vidRef.current.pause();
            } else {
                  vidRef.current.play();

            }
      }

      function itemPage() {
            let root = document.getElementById('root');
            if (root.clientWidth < 500) {
                  return 1;
            }
            else if (root.clientWidth < 750) {
                  return 2;
            }
            else if (root.clientWidth < 1000) {
                  return 3;
            }
            else if (root.clientWidth < 1300) {
                  return 4;
            }
            else {
                  return 5;
            }
      }
      const itemsPerPage = itemPage();
      const [currentSlide, setCurrentSlide] = useState(0);
      const nextSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide + itemsPerPage) % items.length);
      };
      const prevSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide - itemsPerPage + items.length) % items.length);
      };

      return (
            <div className='home' id='home'>

                  {/* -----------------------------IMG SLIDER SECTION-------------------------------------   */}
                  <ImageSlider images={images} descriptions={descriptions} />

                  {/* -----------------------------OFFER SECTION-------------------------------------   */}
                  <div className="home_offer">
                        <div className="home_offer-details details">
                              <div className="offer_datails" >
                                    <div className="offer_text">
                                          <p>SALE OFF </p>
                                          <p>40%</p>
                                    </div>
                              </div>
                        </div>
                        <div className="home_offer-items item-1">
                              <img src={Chair} alt="image" />
                              <p>Lether Chair</p>
                        </div>
                        <div className="home_offer-items item-2">
                              <img src={Table} alt="image" />
                              <p>Coffee Table</p>
                        </div>
                        <div className="home_offer-items item-3">
                              <img src={Jhoola} alt="image" />
                              <p>Ceiling Jhula</p>
                        </div>
                        <div className="home_offer-items item-4">
                              <img src={Sofa} alt="image" />
                              <p>Sofa</p>
                        </div>
                  </div>

                  {/* -----------------------------Vedio SECTION-------------------------------------   */}
                  <div className="home_vedio">
                        <div className="vedio_left">
                              <div className="vedio_left_bg" >
                                    <div className="vedio_left_text">
                                          <p>Lether Chair</p>
                                          <p>$145.23</p>
                                          <button type='button' className='btn'
                                                onClick={() => dispatch(addToCart(data.singlesofa[5]))}
                                          >Add to Cart</button>
                                    </div>
                              </div>
                        </div>
                        <div className="vedio_right">
                              <video className='vedio' src={sofaBedio} ref={vidRef} type="video/mp4" loop controls={false} muted />
                              <div className='home__video-overlay'>
                                    <div className='home__video-overlay_circle' onClick={handlevideo}>
                                          {playVideo
                                                ? <BsPauseFill color='#fff ' fontSize={30} />
                                                : <BsFillPlayFill color='#fff ' fontSize={30} />
                                          }
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/*  -----------------------------Special Item SECTION-------------------------------------   */}
                  <div className="home_special-item">
                        <div className="special_item_detail">
                              <span>Summer LookBook 2023</span>
                              <h1>Grace Serpentine</h1>
                              <h1>Two - Piece Sectional</h1>
                              <p>$ 2,999.00</p>
                              <a href='/buy' className='btn'>ShopNow</a>
                        </div>
                        <div className="special_item_img">
                              <img src={Special_img} alt="image" />
                        </div>
                  </div >

                  {/*  -----------------------------Recommendation SECTION-------------------------------------   */}
                  <div className="home_recommendation">
                        <div className='rec_slider_container'>
                              <button className='bton' type="button" onClick={prevSlide}>
                                    <MdOutlineKeyboardArrowLeft fontSize={30} />
                              </button>
                              <div className="rec_slider">
                                    <ul className="rec_slider_data" >
                                          {
                                                items.slice(currentSlide, currentSlide + itemsPerPage).map((item) => (
                                                      <ShopItem key={item.id} item={item} />
                                                ))
                                          }
                                    </ul>
                              </div>
                              <button className='bton' type="button" onClick={nextSlide}>
                                    <MdOutlineKeyboardArrowRight fontSize={30} />
                              </button>
                        </div>
                  </div>

                  {/*  -----------------------------Social SECTION-------------------------------------   */}
                  <div className="home_social">
                        <div className="social_container">
                              <div className="social_link">
                                    <a className="social_overlay_link" >
                                          <AiOutlineInstagram fontSize={28} />
                                          <p> Follow @nyture</p>
                                    </a>
                              </div>
                              <div className="social_img_container" id="social">
                                    <img src={s1} alt="image" className='img' />
                                    <img src={s2} alt="image" className='img' />
                                    <img src={s3} alt="image" className='img' />
                                    <img src={s4} alt="image" className='img' />
                                    <img src={s5} alt="image" className='img' />
                                    <img src={s6} alt="image" className='img' />
                                    <img src={s7} alt="image" className='img' />
                                    <img src={s8} alt="image" className='img' />
                                    <img src={s9} alt="image" className='img' />
                                    <img src={s10} alt="image" className='img' />
                                    <img src={s11} alt="image" className='img' />
                                    <img src={s12} alt="image" className='img' />
                              </div>
                        </div>
                  </div>
            </div >
      )
}

export default Home
