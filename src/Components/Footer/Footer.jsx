import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <div className='footer'>
         <div className="footer_main">
            <h2 className='heading'>ABOUT US</h2>
            <div className="footer_social-links">
               <Link to=""><FaFacebook fontSize={30} /></Link>
               <Link to=""><BsTwitter fontSize={30} /></Link>
               <Link to=""><AiFillYoutube fontSize={30} /></Link>
               <Link to=""><AiOutlineInstagram fontSize={30} /></Link>
            </div>
         </div>
         <div className="footer_section">
            <h2 className='heading'>INFORMATION</h2>
            <div className="footer_links">
               <Link className="footer_text">Delivery Information</Link>
               <Link className="footer_text">Privacy policy</Link>
               <Link className="footer_text">Terms & Condition</Link>
               <Link className="footer_text">Contact</Link>
               <Link className="footer_text">Returns</Link>
               <Link className="footer_text">Affilate</Link>
            </div>
         </div>
         <div className="footer_section">
            <h2 className='heading'>MY ACCOUNT</h2>
            <div className="footer_links">
               <Link className="footer_text">My account</Link>
               <Link className="footer_text">Order history</Link>
               <Link className="footer_text">Wishlist</Link>
               <Link className="footer_text">Shipping</Link>
               <Link className="footer_text">Privacy policy</Link>
            </div>
         </div>
         <div className="footer_section">
            <h2 className='heading'>USER HELPFUL</h2>
            <div className="footer_links">
               <Link className="footer_text">Community</Link>
               <Link className="footer_text">Forums</Link>
               <Link className="footer_text">Meetups</Link>
               <Link className="footer_text">HelpCenter</Link>
               <Link className="footer_text">Creative Design</Link>
               <Link className="footer_text">UX/Ui Design</Link>
            </div>
         </div>
      </div >
   )
}

export default Footer
