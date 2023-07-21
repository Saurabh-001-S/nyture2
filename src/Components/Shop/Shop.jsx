import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ShopItem } from "../../Constant/index";
import Modal from '../../Constant/Modal/Modal';

const Shop = () => {

  const items = useSelector((state) => state.allCart.item);
  const [showModal, setShowModal] = useState(false);
  const [passItem, setPassItem] = useState(null)

  const callModal = (modalItem) => {
    setShowModal(true);
    setPassItem(modalItem);
  };

  const closeModal = () => {
    setShowModal(false);
    setPassItem(null);
  };

  return (
    <div className='shop'>
      <div className="shopItem_modal">
        {
          showModal && <Modal item={passItem} closeModal={closeModal} />
        }
      </div>
      <ul className='shop-ul'>
        {
          items.singlesofa.map((item) => (
            <ShopItem key={item.id} item={item} callModal={callModal} />
          ))
        }
        {
          items.sofa.map((item) => (
            <ShopItem key={item.id} item={item} callModal={callModal} />
          ))
        }
        {
          items.stool.map((item) => (
            <ShopItem key={item.id} item={item} callModal={callModal} />
          ))
        }
        {
          items.chair.map((item) => (
            <ShopItem key={item.id} item={item} callModal={callModal} />
          ))
        }
      </ul>
    </div>
  )
}
export default Shop

