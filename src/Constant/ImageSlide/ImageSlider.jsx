import React, { useState, useRef, useEffect } from 'react'
import "./imageSlider.css";
const delay = 2500;

const ImageSlider = ({ offerData }) => {
   const [images, setImages] = useState(offerData.desktopImg);
   let descriptions = offerData.descriptions;
   const [index, setIndex] = useState(0);
   const timeoutRef = useRef(null);

   useEffect(() => {
      function handleResize() {
         if (window.innerWidth <= 650) {
            setImages(offerData.mobileImg);
         } else {
            setImages(offerData.desktopImg);
         }
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   function resetTimeout() {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
      }
   }

   useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
         () =>
            setIndex((prevIndex) =>
               prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
         delay
      );

      return () => {
         resetTimeout();
      };
   }, [index]);

   return (
      <div className="slideshow">
         <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {images.map((col, index) => (
               <div className="slide" key={index} style={{ backgroundImage: `url(${col})` }}>
                  <div className="slider-content">
                     <h1>{descriptions[index]}</h1>
                     <p>Your Sofa is where you let your guard down, put your feet up, and just relax</p>
                     <button >
                        <a href="/shop">
                           SHOP NOW
                        </a>
                     </button>
                  </div>
               </div>
            ))}
         </div>

         <div className="slideshowDots">
            {images.map((_, idx) => (
               <div key={idx} onClick={() => { setIndex(idx); }}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
               ></div>
            ))}
         </div>
      </div>
   );
}

export default ImageSlider

