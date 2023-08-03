import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, buyNow } from '../../Store/StoreCart/StoreCart';
import { Link } from 'react-router-dom';
import { AiOutlineAlignRight } from "react-icons/ai";
import { star, Emptystar } from "../../Data/Images/index";
import './shopitem.css';
import { LazyImgLoad } from "../../Constant/index";
import { GrCart } from "react-icons/gr";

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
         <div className="shopItem_glassBg">
            <div className="r1_rating">
               <p className='rating_star'>{showRating()}</p>
               <GrCart fontSize='28' onClick={() => OnClickCallBack(0)} />
            </div>

            <div className="r2_img">
               <LazyImgLoad src={item.img} CName={'img'} />
            </div>

            <div className="r3_detail flex-col">
               <div className="r3_title">
                  <p>{item.name.slice(0, 50)}</p>
               </div>

               <div className="r3_ordernow flex-row">
                  <p className='price flex-row'>
                     <span className='discount_price'> ${parseFloat(item.price - 25).toFixed(2)}</span>
                     <span className='original_price'> ${item.price}</span>
                  </p>
                  <div className="r3_btn flex-row">
                     <AiOutlineAlignRight fontSize={30} onClick={() => OnClickCallBack(3)} />
                     <button onClick={() => OnClickCallBack(1)}>
                        <Link to='/buy' > Buy Now</Link>
                     </button>
                  </div>
               </div>

            </div>
         </div>
      </li>
   )
}

export default ShopItem