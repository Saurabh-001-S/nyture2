import React, { useState } from 'react'
import { MainContact } from "../../Constant/index"

const Contact = () => {

  return (
    <div className="contact">
      <div className="contact_heading" >
        <h2>Nayture Help Center | 24x7 Customer Care Support</h2>
        <div className="contact__content">
          <p>
            The Nayture Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Nayture Help Centre also lists out more information that you may need regarding Nayture Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Nayture Help Centre number or even access Nayture Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on 01-Jun-23
          </p>
        </div>
      </div>
      <div className="contact_bottom">
        <div className="contact_bottom_left">
          <div className="contact_left-sidebar_top">
            <span className="sidebar_head_text">TYPE OF ISSUE</span>
            <ul>
              <li>Help WIth your Issues</li>
              <li>Help WIth your Order</li>
              <li>Help WIth your other Issues</li>
            </ul>
          </div>
          <div className="contact_left-sidebar_bottom">
            <span className="sidebar_head_text">HELP TOPICS</span>
            <ul>
              <li>Order</li>
              <li>Cancellations and Returns</li>
              <li>Payment</li>
              <li>Shopping</li>
              <li>Wallet</li>
              <li>Others</li>
              <li>Insurance</li>
              <li>Nayture Quick</li>
              <li>SuperCoins</li>
              <li>Refurbished</li>
              <li>Nayture Plus</li>
            </ul>
          </div>
        </div>
        <div className="contact_right">
          <MainContact />
        </div>
      </div>
    </div >
  )
}
export default Contact