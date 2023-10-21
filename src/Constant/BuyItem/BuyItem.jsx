import React from 'react'

const BuyItem = ({ item }) => {
  return (
    <div className="buyItem flex-row">
      <div className="buyItem_img flex-col">
        <img src={item.img} alt="img" />
      </div>
      <div className="buyItem_details flex-col">
        <h3 className="detail_h3">{item.name}</h3>
        <p>Quantity : {item.quantity}</p>
        <h3 className="detail_h3-price">${item.price - 20}</h3>
      </div>
    </div>

  )
}

export default BuyItem

