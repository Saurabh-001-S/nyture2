import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
   return (
      <div className='footer'>
         <div className="footer_main">
            <h2 className='heading'>ABOUT US</h2>
            <div className="footer_social-links">
               <a href=""><FaFacebook fontSize={28} /></a>
               <a href=""><BsTwitter fontSize={28} /></a>
               <a href=""><AiFillYoutube fontSize={28} /></a>
               <a href=""><AiOutlineInstagram fontSize={28} /></a>
            </div>
         </div>
         <div className="footer_section">
            <h2 className='heading'>INFORMATION</h2>
            <div className="footer_links">
               <a className="footer_text">Delivery Information</a>
               <a className="footer_text">Privacy policy</a>
               <a className="footer_text">Terms & Condition</a>
               <a className="footer_text">Contact</a>
               <a className="footer_text">Returns</a>
               <a className="footer_text">Affilate</a>
            </div>
         </div>
         <div className="footer_section">
            <h2 className='heading'>MY ACCOUNT</h2>
            <div className="footer_links">
               <a className="footer_text">My account</a>
               <a className="footer_text">Order history</a>
               <a className="footer_text">Wishlist</a>
               <a className="footer_text">Shipping</a>
               <a className="footer_text">Privacy policy</a>
            </div>
         </div>
         <div className="footer_section">
            <h2 className='heading'>USER HELPFUL</h2>
            <div className="footer_links">
               <a className="footer_text">Community</a>
               <a className="footer_text">Forums</a>
               <a className="footer_text">Meetups</a>
               <a className="footer_text">HelpCenter</a>
               <a className="footer_text">Creative Design</a>
               <a className="footer_text">UX/Ui Design</a>
            </div>
         </div>
      </div >
   )
}

export default Footer
