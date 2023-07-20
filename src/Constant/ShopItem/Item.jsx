import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, buyNow } from '../../Store/StoreCart/StoreCart';
import { Link } from 'react-router-dom';
import { CgDetailsMore } from "react-icons/cg";
import { star, Emptystar } from "../../Data/Images/index";
import './shopitem.css';

const Item = ({ item, callModal }) => {
      console.log(item)
      const dispatch = useDispatch();

      const handleImageLoad = () => { return; };

      const OnClickCallBack = (id) => {
            if (id === 0) {
                  dispatch(addToCart(item))
                  console.log("added")
            } else if (id === 1) {
                  dispatch(buyNow(item))
            } else {
                  callModal(item)
            }
      }

      const showRating = () => {
            const ratingStars = [];
            const filledStars = Math.round(item.rating.avgRating);
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
                              <img src={item.image.url} id='imgload' className='img' alt="image" onLoad={handleImageLoad} />
                        </div>
                        <div className="item_detail">
                              <p>{item.productTitle}</p>
                              <p className='rating_star'>{showRating()}</p>
                              <div className='flex-row details-price'>
                                    <p className='price'>${item.prices.regularPrice.minPrice}</p>
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

export default Item

