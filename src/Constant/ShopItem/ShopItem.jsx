import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, buyNow } from '../../Store/StoreCart/StoreCart';
import { Link } from 'react-router-dom';
import { CgDetailsMore } from "react-icons/cg";
import { star, Emptystar } from "../../Data/Images/index";
import './shopitem.css';
import { LazyImgLoad } from "../../Constant/index";


const ShopItem = ({ item, callModal }) => {
  const dispatch = useDispatch();

  const OnClickCallBack = (id) => {
    if (id === 0) {
      dispatch(addToCart(item))
    } else if (id === 1) {
      dispatch(buyNow(item))
    } else {
      callModal(item)
    }
  }

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

  return (
    <li className='shopItem'>
      <div className='shopItem_det'>
        <div className="item_img" >
          <LazyImgLoad src={item.img} CName={'img'} />
        </div>
        <div className="item_detail">
          <p>{item.name}</p>
          <p className='rating_star'>{showRating()}</p>
          <div className='flex-row details-price'>
            <p className='price'>${item.price}</p>
            <CgDetailsMore fontSize={32} onClick={() => OnClickCallBack(3)} />
          </div>
          <div className="det_btn">
            <button type='button' onClick={() => OnClickCallBack(0)}>Add to cart</button>
            <button onClick={() => OnClickCallBack(1)}>
              <Link to='/buy'> Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ShopItem