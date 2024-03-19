// import React, { useEffect, useState } from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import {
//    ISld1, ISld2, ISld3, ISld4, ISld5, Bedroom1, Bedroom3,
//    D1, D2, D3, D4, D5, D6, D7
// } from "../../Data/Images/index";
// const Slider = () => {
//    const [images, setImages] = useState([ISld1, ISld2, Bedroom1, ISld3, ISld4, ISld5, Bedroom3]);

//    useEffect(() => {
//       window.addEventListener('resize', () => {
//          if (window.innerWidth >= 650) {
//             setImages([ISld1, ISld2, Bedroom1, ISld3, ISld4, ISld5, Bedroom3]);
//          } else {
//             setImages([D1, D2, D3, D4, D5, D6, D7]);
//          }
//       })
//    }, []);
//    let descriptions = [
//       "Introducing the Sunday Modular Leather Chaise - The Ultimate Relaxation Spot!",
//       "New Arrivals: Modular Leather Chaise - Redefining Comfort and Style!",
//       "Sunday Special: Leather Chaise - Luxurious Seating for Your Home!",
//       "Customize Your Space: Sunday Modular Chaise - Elegance and Versatility!",
//       "Crafted to Perfection: Sunday Modular Leather - Unmatched Quality!",
//       "Enhance Your Living Room: Modular Leather Chaise - A Must-Have!",
//       "Last Day Offer: Sunday Chaise - Comfort and Beauty Combined!"
//    ];
//    return (
//       <Splide options={{ perPage: 1, rewind: true, }}>
//          {images.map((item, index) => (
//             <SplideSlide key={index}>
//                <img src={item} alt={`Image ${index}`}
//                   style={{
//                      width: '100vw',
//                      objectFit: 'cover',
//                      height: '90vh'
//                   }}
//                />
//                <div className="home_slider-content">
//                   <h1>{descriptions[index]}</h1>
//                   <p>Your Sofa is where you let your guard down, put your feet up, and just relax</p>
//                   <button >
//                      <a href="/shop">
//                         SHOP NOW
//                      </a>
//                   </button>
//                </div>
//             </SplideSlide>
//          ))
//          }
//       </Splide>
//    );
// };

// export default Slider;
