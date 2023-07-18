import React, { useEffect } from 'react';
import { addToCart, buyNow } from '../../Store/StoreCart/StoreCart';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { RxCross1 } from 'react-icons/rx';

import './modal.css';
import { useState } from 'react';

const Modal = ({ item, closeModal }) => {
   useLockBodyScroll();

   const dispatch = useDispatch();
   const [toggleModal, settoggleModal] = useState(false)
   const OnClickCallBack = (id) => {
      if (id === 0) {
         dispatch(addToCart(item));
      } else if (id === 1) {
         dispatch(buyNow(item));
      }
   };
   useEffect(() => {
      const handleResize = () => {
         const mediaQuery = window.matchMedia('(max-width: 480px)'); // Specify your media query here

         if (mediaQuery.matches) {
            settoggleModal(true);
            console.log("fire")
         } else {
            settoggleModal(false);
         }
      };

      handleResize(); // Check initial size
      window.addEventListener('resize', handleResize); // Add event listener for resize

      return () => {
         window.removeEventListener('resize', handleResize); // Cleanup on unmount
      };
   }, []);
   return (<>{!toggleModal ?
      <div className="modal" >
         <div className="modal_det" >
            <div className="modal_img">
               <img src={item.img} id="imgload" className="img" alt="image" />
            </div>
            <div className="modal_detail">
               <h1>{item.name}</h1>
               <p className='details_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aliquam et iure placeat maxime, ratione repudiandae quam dolor cum sit assumenda incidunt? Corporis ad ratione culpa magni recusandae maxime sint.</p>
               <p className="modal_price">${item.price}</p>
               <div className="modal_det_btn">
                  <button type="button" onClick={() => OnClickCallBack(0)}>
                     Add to cart
                  </button>
                  <button onClick={() => OnClickCallBack(1)}>
                     <Link to="/buy">Buy Now</Link>
                  </button>
               </div>
            </div>
            <RxCross1 className="close-icon" onClick={closeModal} />
         </div>
      </div>
      :
      <div className="modal" >
         <div className="modal_det" >
            <div className='modal_det_details'>
               <div className="modal_img">
                  <img src={item.img} id="imgload" className="img" alt="image" />
               </div>
               <div className="modal_detail">
                  <h1>{item.name}</h1>
                  <p className='details_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem rerum sint nemo tenetur dolorum.</p>
                  <p className="modal_price">${item.price}</p>
                  <div className="modal_det_btn">
                     <button type="button" onClick={() => OnClickCallBack(0)}>
                        Add to cart
                     </button>
                     <button onClick={() => OnClickCallBack(1)}>
                        <Link to="/buy">Buy Now</Link>
                     </button>
                  </div>
               </div>
            </div>
            <RxCross1 className="close-icon" onClick={closeModal} />
         </div>
      </div>
   }</>);
};

export default Modal;
