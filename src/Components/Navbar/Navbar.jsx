import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RxPerson, RxCross1 } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { ImMenu } from "react-icons/im";
import { removeFromNotification } from '../../Store/StoreCart/StoreCart';

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

  useEffect(() => {
    const handleScroll = () => {
      const navleft = document.querySelector('.nvLeft_h1');
      if (window.scrollY !== 0) {
        navleft.style.fontSize = '20px';
      } else {
        navleft.style.fontSize = '40px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='navbar'>
      <nav>
        <div className="navbar_left">
          <Link to="/"><h1 className='nvLeft_h1'>NAYTURE</h1></Link>
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
          <ImMenu fontSize={32} className="overlay__close" onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="navbar_toggleMenu-overlay slide-right">
              <RxCross1 fontSize={32} onClick={() => setToggleMenu(false)} />
              <div className="navbar_togglemenu_right">
                <Link onClick={() => setToggleMenu(false)} to="/userinfo"><RxPerson fontSize={27} /></Link>
                <Link onClick={() => setToggleMenu(false)} to="/search"><BiSearch fontSize={27} /></Link>
                <Link onClick={() => setToggleMenu(false)} to="/shopCart"><HiOutlineShoppingBag fontSize={27} /></Link>
              </div>
              <ul className='navbar_toggleMenu-links'>
                <li><Link onClick={() => setToggleMenu(false)} to="/">Home</Link></li>
                <li><Link onClick={() => setToggleMenu(false)} to="/shop">Shop</Link></li>
                <li><Link onClick={() => setToggleMenu(false)} to="/login">Login</Link></li>
                <li><Link onClick={() => setToggleMenu(false)} to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          )}
        </div>
      </nav >
      <div className='notification-container top-right'>
        {notification.map((toast, i) => (
          <div key={i} className="notification top-right" >
            <p className="notification-title">{toast.title}</p>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Navbar
