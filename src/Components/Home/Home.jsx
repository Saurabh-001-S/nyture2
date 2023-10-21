import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { AiOutlineInstagram } from "react-icons/ai";
import { ImageSlider, ProductSlider } from '../../Constant/index';
import { addToCart } from '../../Store/StoreCart/StoreCart';
import { LazyImgLoad } from "../../Constant/index";
import { recommendation, offer } from "../../Data/ItemData";
import {
    sofaBedio, Special_img,
    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12,
    LRoomMain, Bedroom2, Livingroom, Office,
} from "../../Data/Images/index";

const Home = () => {
    // const items = useSelector((state) => state.allCart.item.recommendation);
    const items = recommendation;
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

    const [perPageItem, setperPageItem] = useState('5')
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 950 && window.innerWidth <= 1150) {
                setperPageItem(4);
            }
            else if (window.innerWidth >= 760) {
                setperPageItem(3);
            }
            else if (window.innerWidth >= 470) {
                setperPageItem(2);
            }
            else if (window.innerWidth <= 470) {
                setperPageItem(1);
            }
        })
    }, []);
    // const offer = useSelector((state) => state.allCart.item.offer);
    let desktopImg = [];
    let mobileImg = [];
    let descriptions = [];
    offer.map((oData) => {
        desktopImg.push(oData.src);
        mobileImg.push(oData.srcResponsive);
        descriptions.push(oData.title);
    });
    const offerData = {
        desktopImg: desktopImg,
        mobileImg: mobileImg,
        descriptions: descriptions,
    }
    return (
        <div className='home' id='home'>

            {/* -----------------------------IMG SLIDER SECTION-------------------------------------   */}
            <ImageSlider offerData={offerData} />

            {/* -----------------------------Work Display SECTION-------------------------------------   */}
            <div className="home_work flex-col">
                <div className="home_work_heading">
                    <h4>Some Of Our Interiors That We</h4>
                    <h4>provide For You</h4>
                </div>
                <div className="home_work_details">
                    <div className="work_mainImg">
                        <LazyImgLoad src={LRoomMain} CName={'none'} />
                    </div>
                    <div className="work_sidebar">
                        <div className="work_sb_box">
                            <div className="work_sb_box-img">
                                <LazyImgLoad src={Livingroom} CName={'none'} />
                            </div>
                            <div className="work_sb_box-details flex-col">
                                <h2>Living Room</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus porro.</p>
                            </div>
                        </div>

                        <div className="work_sb_box">
                            <div className="work_sb_box-img">
                                <LazyImgLoad src={Bedroom2} CName={'none'} />
                            </div>
                            <div className="work_sb_box-details flex-col">
                                <h2>Bed Room</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus porro.</p>
                            </div>
                        </div>

                        <div className="work_sb_box">
                            <div className="work_sb_box-img">
                                <LazyImgLoad src={Office} CName={'none'} />
                            </div>
                            <div className="work_sb_box-details flex-col">
                                <h2>Office</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus porro .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -----------------------------Vedio SECTION-------------------------------------   */}
            <div className="home_vedio">
                <div className="vedio_left">
                    <div className="vedio_left_bg" >
                        <div className="vedio_left_text">
                            <p>Lether Chair</p>
                            <p>$145.23</p>
                            <button className="btn" type='button'
                                onClick={() => dispatch(addToCart(recommendation[5]))}
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
                    <LazyImgLoad src={Special_img} CName={'none'} />
                </div>
            </div >

            {/*  -----------------------------Recommendation SECTION-------------------------------------   */}
            <div className="home_recommendation">
                <ProductSlider items={items} perPageItem={perPageItem} />
            </div>

            {/*  -----------------------------Social SECTION-------------------------------------   */}
            <div className="home_social">
                <div className="social_container">
                    <div className="social_link">
                        <a className="social_overlay_link" >
                            <AiOutlineInstagram fontSize={28} />
                            <p> Follow <span>@nyture</span></p>
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
