import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, buyNow } from '../../Store/StoreCart/StoreCart';
import { Link } from 'react-router-dom';
import './shopitem.css';
const ShopItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleImageLoad = () => { return; };
  return (
    <li className='shopItem'>
      <div className='shopItem_det'>
        <div className="item_img" >
          <img src={item.img} id='imgload' className='img' alt="image" onLoad={handleImageLoad} />
        </div>
        <div className="item_detail">
          <h1>{item.name}</h1>
          <p className='price'>${item.price}</p>
          <div className="det_btn">
            <button type='button' onClick={() => dispatch(addToCart(item))}>Add to cart</button>
            <button onClick={() => dispatch(buyNow(item))}>
              <Link to='/buy'> Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
export default ShopItem