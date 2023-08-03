import React, { useEffect } from 'react'
import { ShopCartItem } from '../../Constant/index';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCartTotal, buyAllCartItem } from "../../Store/StoreCart/StoreCart";
import { Link } from 'react-router-dom';

const ShoppingCart = () => {

  const items = useSelector((state) => state.allCart.cart);
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const confirm = () => {
    if (window.confirm("Are you sure want to remove all items from shopping cart")) {
      dispatch(clearCart(items))
    }
  }
  const amount = totalPrice;
  const isFreeDelivery = amount > 400;
  return (
    <div className='shopCart'>
      <div className="shopCart_left">
        <div className="shopCart_heading">
          <h1>Shopping Cart</h1>
          <button onClick={confirm}>Deselect all items</button>
          <p>Price</p>
        </div>
        <div className="shopCart_item">
          {
            items.map((item) => (
              <ShopCartItem key={item.id} item={item} />
            ))
          }
          <div className="total_details-reverse">
            <h3>Subtotal ({totalQuantity} items):</h3>
            <p>$ {totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="shopCart_right">
        <div className="shopcart-delivery">
          <input type="checkbox" checked={isFreeDelivery} readOnly />
          <p>Your order is eligible for FREE Delivery.</p>
        </div>
        <div className="total_details">
          <h3>Subtotal {totalQuantity}:</h3>
          <p>$ {totalPrice}</p>
        </div>
        <button onClick={() => dispatch(buyAllCartItem(items))}>
          <Link to='/buy'>Buy Now</Link>
        </button>
        <p >EMI : {totalPrice > 500 ? 'Aaailable' : 'Unavailable'}</p>
      </div>
    </div >
  )
}

export default ShoppingCart


