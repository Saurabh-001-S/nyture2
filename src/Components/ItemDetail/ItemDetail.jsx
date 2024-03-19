import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, buyNow } from "../../Store/StoreCart/StoreCart";
import { Link } from "react-router-dom";
import { star, Emptystar } from "../../Data/Images/index";
import { LazyImgLoad } from "../../Constant/index";

// Icons
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsBoxSeam, BsTrophy } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { AiOutlineLock } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";

import "./ItemDetail.css";

const ItemDetail = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const products = useSelector((state) => state.allCart.item);
  const detItem = useSelector((state) => state.allCart.itemDetails);
  const dispatch = useDispatch();

  const RelatedData = (categ) => {
    setRelatedProducts(products.categ);
  };

  const OnClickCallBack = (id) => {
    if (id === 0) {
      dispatch(addToCart(detItem));
    } else if (id === 1) {
      dispatch(buyNow(detItem));
    }
  };

  const showRating = () => {
    const ratingStars = [];
    const filledStars = detItem.rating;
    const emptyStars = 5 - filledStars;

    for (let i = 0; i < filledStars; i++) {
      ratingStars.push(<img key={i} src={star} alt="star" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      ratingStars.push(
        <img key={i + filledStars} src={Emptystar} alt="Emptystar" />
      );
    }

    return ratingStars;
  };

  return (
    <div className="itemdetails">
      <div className="itemdetails_content flex-row">
        <div className="item_img">
          <LazyImgLoad src={detItem.img} CName={"img"} />
        </div>
        <div className="item-details flex-col">
          <div className="row">
            <p className="item-title">{detItem.name}</p>
            <p className="rating_star">
              <span>{detItem.rating}.0</span>
              <span>{showRating()}</span>
            </p>
          </div>
          <div className="item-price flex-col">
            <p className="discount_price flex-row">
              <span style={{ color: "var(--CTA)" }}>-10%</span>
              <span> ${parseFloat(detItem.price - 25).toFixed(2)}</span>
            </p>
            <p className="original flex-row">
              <span> M.R.P : </span>
              <span className="original_price">${detItem.price}</span>
            </p>
          </div>

          <div className="offer-container flex-col">
            <div className="offer-title flex-row">
              <BiSolidOffer />
              <span>Offers</span>
            </div>
            <ul className="offerlist-container flex-row">
              <li className="offer_list">
                <p className="list_title">No Cost EMI</p>
                <p className="list_description">
                  Upto ₹1,667.02 EMI interest savings on select Credit Cards
                </p>
                <p className="list_offerNum">1 offer</p>
              </li>
              <li className="offer_list">
                <p className="list_title">No Cost EMI</p>
                <p className="list_description">
                  No Cost EMI available on Amazon Pay Later
                </p>
                <p className="list_offerNum">3 offer</p>
              </li>
              <li className="offer_list">
                <p className="list_title">Partner Offers</p>
                <p className="list_description">
                  No Cost EMI available on Bajaj Finserv EMI.
                </p>
                <p className="list_offerNum">1 offer</p>
              </li>
            </ul>
          </div>

          <div className="btn-container flex-row">
            <button onClick={() => OnClickCallBack(0)}>ADD To Cart</button>
            <button onClick={() => OnClickCallBack(1)}>
              <Link to="/buy"> Buy Now</Link>
            </button>
          </div>

          <div className="item-sercices" style={{ height: "98px" }}>
            <ul className="sercices-ul flex-row" role="list">
              <li className="li-carousel-card">
                <div id="FREE_DELIVERY" className="a-column">
                  <div className="icon-section">
                    <TbTruckDelivery />
                  </div>
                  <div className="icon-content">
                    <span> Free Delivery </span>
                  </div>
                </div>
              </li>
              <li className="li-carousel-card">
                <div id="PAY_ON_DELIVERY" className="a-column">
                  <div className="icon-section">
                    <GiTakeMyMoney />
                  </div>
                  <div className="icon-content">
                    <span> Pay on Delivery </span>
                  </div>
                </div>
              </li>
              <li className="li-carousel-card">
                <div id="RETURNS_POLICY" className="a-column">
                  <span className="a-declarative">
                    <div className="icon-section">
                      <BsBoxSeam />
                    </div>
                    <div className="icon-content">
                      <span>7 days Service Centre Replacement</span>
                    </div>
                  </span>
                </div>
              </li>
              <li className="li-carousel-card">
                <div id="WARRANTY" className="a-column">
                  <div className="icon-section">
                    <GrShieldSecurity />
                  </div>
                  <div className="icon-content">
                    <span> 1 Year Warranty </span>
                  </div>
                </div>
              </li>
              <li className="li-carousel-card">
                <div id="TOP_BRAND" className="a-column">
                  <div className="icon-section">
                    <BsTrophy />
                  </div>
                  <div className="icon-content">
                    <span> Top Brand </span>
                  </div>
                </div>
              </li>
              <li className="li-carousel-card">
                <div id="AMAZON_DELIVERED" className="a-column">
                  <div className="icon-section">
                    <TbTruckDelivery />
                  </div>
                  <div className="icon-content">
                    <span> Amazon Delivered </span>
                  </div>
                </div>
              </li>
              <li className="li-carousel-card">
                <div id="SAFE_PAYMENTS" className="a-column">
                  <div className="icon-section ">
                    <AiOutlineLock />
                  </div>
                  <div className="icon-content">
                    <span> Secure transaction </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="slider"></div>
      {/* <div className="review">
            {
               Data.singlesofa[0].reviews.map((item) => (
                  <>
                     <div>{item.name}</div>
                     <div>{item.rating}</div>
                     <div>{item.comment}</div>
                  </>
               ))
            }
         </div> */}
    </div>
  );
};

export default ItemDetail;

// id = 203  i want only first number '2' how i can get in javascript?
