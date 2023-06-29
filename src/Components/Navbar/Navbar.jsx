import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { RxPerson, RxCross1 } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ImMenu3 } from "react-icons/im";

import './navbar.css';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'>
      <nav>
        <div className="navbar_left">
          <Link to="/">NAYTURE</Link>
        </div>
        <div className="navbar_mid">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/shop">Shop</Link></li>
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
            <p className='cartItem'>1</p>
          </Link>
        </div>
        <div className="navbar_toggleMenu">
          <ImMenu3 fontSize={32} className="overlay__close" color='#FFF' onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="navbar_toggleMenu-overlay slide-bottom">
              <RxCross1 fontSize={32} onClick={() => setToggleMenu(false)} />
              <div className="navbar_togglemenu_right">
                <Link to="/userinfo"><RxPerson fontSize={27} /></Link>
                <Link to="/search"><BiSearch fontSize={27} /></Link>
                <Link to="/shopCart"><HiOutlineShoppingBag fontSize={27} /></Link>
              </div>
              <ul className='navbar_toggleMenu-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pages">Pages</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div >
  )
}

export default Navbar
