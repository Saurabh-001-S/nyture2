import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RxPerson, RxCross1 } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { ImMenu3 } from "react-icons/im";
import { removeFromNotification } from '../../Store/StoreCart/StoreCart';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { totalQuantity, notification } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (notification.length >= 1) {
        dispatch(removeFromNotification());
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [notification]);

  return (
    <div className='navbar'>
      <nav>
        <div className="navbar_left">
          <Link to="/">NAYTURE</Link>
        </div>
        <div className="navbar_mid">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="navbar_right">
          <Link to="/userinfo">
            <RxPerson fontSize={27} />
          </Link>
          <Link to="/search">
            <BiSearch fontSize={27} />
          </Link>
          <Link to="/shopCart" style={{ display: 'flex', alignItems: 'center' }}>
            <HiOutlineShoppingBag fontSize={27} />
            <p className='cartItem'>{totalQuantity}</p>
          </Link>
        </div>
        <div className="navbar_toggleMenu">
          <ImMenu3 fontSize={32} className="overlay__close" color='#FFF' onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="navbar_toggleMenu-overlay slide_navbar_outside">
              <RxCross1 fontSize={32} onClick={() => setToggleMenu(false)} />
              <div className="navbar_togglemenu_right">
                <Link to="/userinfo"><RxPerson fontSize={27} /></Link>
                <Link to="/search"><BiSearch fontSize={27} /></Link>
                <Link to="/shopCart"><HiOutlineShoppingBag fontSize={27} /></Link>
              </div>
              <ul className='navbar_toggleMenu-links'>
                <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
                <li><Link to="/shop" onClick={() => setToggleMenu(false)}>Shop</Link></li>
                <li><Link to="/login" onClick={() => setToggleMenu(false)}>Login</Link></li>
                <li><Link to="/contact" onClick={() => setToggleMenu(false)}>Contact Us</Link></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className='notification-container top-right'>
        {notification.map((toast, i) => (
          <div key={i} className="notification top-right" style={{ backgroundColor: toast.backgroundColor }}>
            <p className="notification-title">{toast.title}</p>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Navbar
