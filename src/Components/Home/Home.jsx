import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { AiOutlineInstagram } from "react-icons/ai";
import { ImageSlider } from "../../Constant/index";
import { ProductSlider } from '../../Constant/index';
import { addToCart } from '../../Store/StoreCart/StoreCart';
import { LazyImgLoad } from "../../Constant/index";
import data from "../../Data/ItemData";
import {
      h1, h2, h3, h4, h5, sofaBedio, Chair, Table, Sofa, Jhoola, Special_img,
      s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12
} from "../../Data/Images/index";

const Home = () => {
      let images = [h1, h2, h3, h4, h5];
      let descriptions = [
            "Sunday Modular Lether Chaise", " Modular Lether Chaise", "Sunday  Lether Chaise",
            "Sunday Modular  Chaise", "Sunday Modular Lether"
      ];

      const items = useSelector((state) => state.allCart.item.recommendation);
      const dispatch = useDispatch();

      const [playVideo, setPlayVideo] = useState(false)
      const vidRef = useRef();
      const handlevideo = () => {
            setPlayVideo((prevPlayVideo) => !prevPlayVideo)
            if (playVideo) {
                  vidRef.current.pause();
            } else {
                  vidRef.current.play();

            }
      }

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
                              <LazyImgLoad src={Chair} CName={''} />
                              <p>Lether Chair</p>
                        </div>
                        <div className="home_offer-items item-2">
                              <LazyImgLoad src={Table} CName={''} />
                              <p>Coffee Table</p>
                        </div>
                        <div className="home_offer-items item-3">
                              <LazyImgLoad src={Jhoola} CName={''} />
                              <p>Ceiling Jhula</p>
                        </div>
                        <div className="home_offer-items item-4">
                              <LazyImgLoad src={Sofa} CName={''} />
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
                              <LazyImgLoad src={Special_img} CName={''} />
                        </div>
                  </div >

                  {/*  -----------------------------Recommendation SECTION-------------------------------------   */}
                  <div className="home_recommendation">
                        <ProductSlider items={items} />
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
                                    <LazyImgLoad src={s1} CName={'img'} />
                                    <LazyImgLoad src={s2} CName={'img'} />
                                    <LazyImgLoad src={s3} CName={'img'} />
                                    <LazyImgLoad src={s4} CName={'img'} />
                                    <LazyImgLoad src={s5} CName={'img'} />
                                    <LazyImgLoad src={s6} CName={'img'} />
                                    <LazyImgLoad src={s7} CName={'img'} />
                                    <LazyImgLoad src={s8} CName={'img'} />
                                    <LazyImgLoad src={s9} CName={'img'} />
                                    <LazyImgLoad src={s10} CName={'img'} />
                                    <LazyImgLoad src={s11} CName={'img'} />
                                    <LazyImgLoad src={s12} CName={'img'} />
                              </div>
                        </div>
                  </div>
            </div >
      )
}

export default Home
