import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, buyNow } from '../../Store/StoreCart/StoreCart';
import { Link } from 'react-router-dom';
import { CgDetailsMore } from "react-icons/cg";
import './shopitem.css';

const ShopItem = ({ item, callModal }) => {
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

  return (
    <li className='shopItem'>
      <div className='shopItem_det'>
        <div className="item_img" >
          <img src={item.img} id='imgload' className='img' alt="image" onLoad={handleImageLoad} />
        </div>
        <div className="item_detail">
          <p>{item.name}</p>
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