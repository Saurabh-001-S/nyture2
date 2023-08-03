import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { AiOutlineInstagram } from "react-icons/ai";
import { ImageSlider } from "../../Constant/index";
import { ProductSlider } from '../../Constant/index';
import { addToCart } from '../../Store/StoreCart/StoreCart';
import { LazyImgLoad } from "../../Constant/index";
import data from "../../Data/ItemData";
import {
    sofaBedio, Special_img, ISld1, ISld2, ISld3, ISld4, ISld5,
    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12,
    LRoomMain, Bedroom1, Bedroom2, Bedroom3, Livingroom, Office,
    D1, D2, D3, D4, D5, D6, D7
} from "../../Data/Images/index";

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (window.innerWidth >= 650) {
            setImages([ISld1, ISld2, Bedroom1, ISld3, ISld4, ISld5, Bedroom3]);
        } else {
            setImages([D1, D2, D3, D4, D5, D6, D7]);
        }
    }, []);

    let descriptions = [
        "Introducing the Sunday Modular Leather Chaise - The Ultimate Relaxation Spot!",
        "New Arrivals: Modular Leather Chaise - Redefining Comfort and Style!",
        "Sunday Special: Leather Chaise - Luxurious Seating for Your Home!",
        "Customize Your Space: Sunday Modular Chaise - Elegance and Versatility!",
        "Crafted to Perfection: Sunday Modular Leather - Unmatched Quality!",
        "Enhance Your Living Room: Modular Leather Chaise - A Must-Have!",
        "Last Day Offer: Sunday Chaise - Comfort and Beauty Combined!"
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

            {/* -----------------------------Work Display SECTION-------------------------------------   */}

            <div className="home_work flex-col">
                <div className="home_work_heading">
                    <h4>Some Of Our Interiors That We</h4>
                    <h4>provide For You</h4>
                </div>
                <dib className="home_work_details">
                    <div className="work_mainImg">
                        <LazyImgLoad src={LRoomMain} CName={''} />
                    </div>
                    <div className="work_sidebar">
                        <div className="work_sb_box">
                            <div className="work_sb_box-img">
                                <LazyImgLoad src={Livingroom} CName={''} />
                            </div>
                            <div className="work_sb_box-details flex-col">
                                <h2>Living Room</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus porro.</p>
                            </div>
                        </div>

                        <div className="work_sb_box">
                            <div className="work_sb_box-img">
                                <LazyImgLoad src={Bedroom2} CName={''} />
                            </div>
                            <div className="work_sb_box-details flex-col">
                                <h2>Bed Room</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus porro.</p>
                            </div>
                        </div>

                        <div className="work_sb_box">
                            <div className="work_sb_box-img">
                                <LazyImgLoad src={Office} CName={''} />
                            </div>
                            <div className="work_sb_box-details flex-col">
                                <h2>Office</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus porro .</p>
                            </div>
                        </div>
                    </div>
                </dib>
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
