import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, buyNow } from '../../Store/StoreCart/StoreCart';
import { Link } from 'react-router-dom';
import { star, Emptystar } from "../../Data/Images/index";
import { LazyImgLoad } from "../../Constant/index";
import {
   Delivered, COD, Return, Brand, Warranty, FreeShipping, Payment
} from "../../Data/Images/index";
import './ItemDetail.css'

const ItemDetail = () => {
   const [relatedProducts, setRelatedProducts] = useState([])
   const products = useSelector((state) => state.allCart.item);
   const detItem = useSelector((state) => state.allCart.itemDetails);
   const dispatch = useDispatch();

   const RelatedData = (categ) => {
      setRelatedProducts(products.categ);
   }

   const OnClickCallBack = (id) => {
      if (id === 0) {
         dispatch(addToCart(detItem))
      } else if (id === 1) {
         dispatch(buyNow(detItem))
      }
   }

   const showRating = () => {
      const ratingStars = [];
      const filledStars = detItem.rating;
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
      <div className='itemdetails'>
         <div className="itemdetails_content flex-row">
            <div className="item_img">
               <LazyImgLoad src={detItem.img} CName={'img'} />
            </div>
            <div className="item-details flex-col">
               <p className='item-title'>{detItem.name}</p>
               <p className='rating_star'>{showRating()}</p>
               <div className='item-price flex-col'>
                  <p className='discount_price flex-row'>
                     <span style={{ color: "var(--c-cta)" }}>-10%</span>
                     <span > ${parseFloat(detItem.price - 25).toFixed(2)}</span>
                  </p>
                  <p className='original flex-row'>
                     <span> M.R.P : </span>
                     <span className='original_price'>${detItem.price}</span>
                  </p>
               </div>
               <div className="btn-container flex-row">
                  <button onClick={() => OnClickCallBack(0)}>
                     ADD To Cart
                  </button>
                  <button onClick={() => OnClickCallBack(1)}>
                     <Link to='/buy' > Buy Now</Link>
                  </button>
               </div>
               <div className="item-sercices" style={{ height: "98px" }}>
                  <ul className="sercices-ul flex-row" role="list">
                     <li className="li-carousel-card">
                        <div id="FREE_DELIVERY" className="a-column" >
                           <div className="img-section">
                              <img src={FreeShipping} alt="Free Delivery" />
                           </div>
                           <div className="icon-content">
                              <span> Free Delivery </span> </div>
                        </div>
                     </li>
                     <li className="li-carousel-card">
                        <div id="PAY_ON_DELIVERY" className="a-column">
                           <div className="img-section">
                              <img src={COD} alt="Pay on Delivery" />
                           </div>
                           <div className="icon-content">
                              <span> Pay on Delivery </span>
                           </div>
                        </div>
                     </li>
                     <li className="li-carousel-card">
                        <div id="RETURNS_POLICY" className="a-column" >
                           <span className="a-declarative">
                              <div className="img-section">
                                 <img src={Return} alt="7 days Service Centre Replacement" />
                              </div>
                              <div className="icon-content">
                                 <span>7 days Service Centre Replacement</span>
                              </div>
                           </span>
                        </div>
                     </li>
                     <li className="li-carousel-card">
                        <div id="WARRANTY" className="a-column" >
                           <div className="img-section">
                              <img src={Warranty} alt="1 Year Warranty" />
                           </div>
                           <div className="icon-content">
                              <span> 1 Year Warranty </span>
                           </div>
                        </div>
                     </li>
                     <li className="li-carousel-card">
                        <div id="TOP_BRAND" className="a-column" >
                           <div className="img-section">
                              <img src={Brand} alt="Top Brand" />
                           </div>
                           <div className="icon-content">
                              <span> Top Brand </span>
                           </div>
                        </div>
                     </li>
                     <li className="li-carousel-card">
                        <div id="AMAZON_DELIVERED" className="a-column" >
                           <div className="img-section">
                              <img src={Delivered} alt="Amazon Delivered" />
                           </div>
                           <div className="icon-content">
                              <span > Amazon Delivered </span>
                           </div>
                        </div>
                     </li>
                     <li className="li-carousel-card">
                        <div id="SAFE_PAYMENTS" className="a-column">
                           <div className="img-section ">
                              <img src={Payment} alt="Secure transaction" />
                           </div>
                           <div className="icon-content">
                              <span> Secure transaction </span>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="slider">

         </div>
         {/* <div className="review">
            {
               Data.singlesofa[0].reviews.map((item) => (
                  <>
                     <div>{item.name}</div>
                     <div>{item.rating}</div>
                     <div>{item.comment}</div>
                  </>
               ))
            }
         </div> */}
      </div >
   )
}

export default ItemDetail


// id = 203  i want only first number '2' how i can get in javascript?
