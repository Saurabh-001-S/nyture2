import React, { useState } from 'react'
import './shopCartItem.css'
import { decreaseItemQuantity, increaseItemQuantity, removeFromCart } from '../../Store/StoreCart/StoreCart';
import { useDispatch } from 'react-redux';

const ShopCartItem = ({ item }) => {

      const dispatch = useDispatch();
      return (
            <div className="ShopCartItem">
                  <div className="ShopCartItem_img">
                        <img src={item.img} alt="image" />
                  </div>
                  <div className="ShopCartItem_details">
                        <span>{item.name}{item.description}</span>
                        <p style={{ color: "blue", fontSize: '12px', padding: '0.4rem 0' }} > In Stock</p>
                        <p style={{ color: "gray", fontSize: '12px' }} >Sold by Appario Retail Private Ltd</p>
                        <div className="gift">
                              <input type="checkbox" />
                              <p>This will be a gift</p>
                        </div>
                        <div className="ShopCartItem_feature">
                              <div>
                                    <label>
                                          Quantity:
                                          <button onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</button>
                                          <span>{item.quantity}</span>
                                          <button onClick={() => dispatch(increaseItemQuantity(item.id))}>+</button>
                                    </label>
                              </div>
                              <button type='delete' onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
                        </div>
                  </div >
                  <div className="ShopCartItem_price">
                        <span style={{ fontWeight: 600 }}>{item.price}</span>
                        <p>₹</p>
                  </div>
            </div >
      )
}
export default ShopCartItem
