import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ShopItem } from "../../Constant/index";
import './shop.css'
const Shop = () => {
  const items = useSelector((state) => state.allCart.item);
  return (
    <div className='shop'>
      {
        items.singlesofa.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))
      }
      {
        items.sofa.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))
      }
      {
        items.stool.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))
      }
      {
        items.chair.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}
export default Shop

