import React, { useEffect } from 'react';
import { addToCart, buyNow } from '../../Store/StoreCart/StoreCart';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { RxCross1 } from 'react-icons/rx';
import { star, Emptystar } from "../../Data/Images/index";
import { GrCart } from "react-icons/gr";

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
      const mediaQuery = window.matchMedia('(max-width: 480px)');

      if (mediaQuery.matches) {
        settoggleModal(true);
      } else {
        settoggleModal(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showRating = () => {
    const ratingStars = [];
    const filledStars = item.rating;
    const emptyStars = 5 - filledStars;

    for (let i = 0; i < filledStars; i++) {
      ratingStars.push(<img key={i} src={star} alt="star" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      ratingStars.push(<img key={i + filledStars} src={Emptystar} alt="Emptystar" />);
    }

    return ratingStars;
  };

  return (<>{!toggleModal ?
    <div className="modal" >
      <div className="modal_det" >
        <div className="modal_img">
          <img src={item.img} id="imgload" className="img" alt="image" />
        </div>
        <div className="modal_detail">
          <h1>{item.name}</h1>
          <p className='details_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aliquam et iure placeat maxime, ratione repudiandae quam dolor cum sit assumenda incidunt.</p>
          <p className='rating_star'>{showRating()}</p>
          <p className='modal_price  flex-row'>
            <span className='discount_price'> ${parseFloat(item.price - 25).toFixed(2)}</span>
            <span className='original_price'> ${item.price}</span>
          </p>
          <div className="modal_det_btn">
            <GrCart fontSize={30} onClick={() => OnClickCallBack(0)} />
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
            <h1>{item.name.slice(0, 60)}</h1>
            <p className='details_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem rerum sint nemo tenetur dolorum.</p>
            <p className='rating_star'>{showRating()}</p>
            <p className='modal_price  flex-row'>
              <span className='discount_price'> ${parseFloat(item.price - 25).toFixed(2)}</span>
              <span className='original_price'> ${item.price}</span>
            </p>
            <div className="modal_det_btn">
              <GrCart fontSize={30} onClick={() => OnClickCallBack(0)} />
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
