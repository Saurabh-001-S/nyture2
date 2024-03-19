import React, { useState } from 'react'
import './shopCartItem.css'
import { decreaseItemQuantity, increaseItemQuantity, removeFromCart } from '../../Store/StoreCart/StoreCart';
import { useDispatch } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ShopCartItem = ({ item }) => {

   const dispatch = useDispatch();
   return (
      <div className="ShopCartItem">
         <div className="ShopCartItem_img">
            <img src={item.img} alt="image" />
         </div>
         <div className="items-details">
            <div className="ShopCartItem_details">
               <span>{item.name}{item.description}</span>
               <p className='p1'> In Stock</p>
               <p className='p2'>Sold by Appario Retail Private Ltd</p>
               <div className="gift">
                  <input type="checkbox" />
                  <p>This will be a gift</p>
               </div>
               <div className="ShopCartItem_feature">
                  <label> Quantity:</label>
                  <button className='sign-btn' type='button' onClick={() => dispatch(decreaseItemQuantity(item.id))}><AiOutlineMinus fontSize={15} /></button>
                  <span>{item.quantity}</span>
                  <button className='sign-btn' type='button' onClick={() => dispatch(increaseItemQuantity(item.id))}><AiOutlinePlus fontSize={15} /></button>
                  <button type='delete' onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
               </div>
            </div >
            <div className="ShopCartItem_price">
               <span>${item.price}</span>
            </div>
         </div>
      </div >
   )
}
export default ShopCartItem
