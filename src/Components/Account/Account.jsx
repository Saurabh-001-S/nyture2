import DeleviryBox from "./DeleviryBox.png";
import { useSelector } from 'react-redux';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Location from "./Location.png";
import Security from "./Security.png";
import Prime from "./Prime.png";
import Card from "./Card.png";
import Pays from "./Pays.png";
import { useEffect } from "react";

const Account = () => {
  const { UserloginOrNot } = useSelector((state) => state.allCart);
  const navigation = useNavigate()
  useEffect(() => {
    if (UserloginOrNot === false) {
      navigation('/login')
    } else {
      navigation('/userinfo')
    }
  }, [UserloginOrNot])
  return (
    <div className="account_container">
      <div id='account'>
        <div className="acount_heading">
          <h2>Your Account</h2>
        </div>
        <div className='account_info'>
          <div className="account_details">
            <div className="detailsbox">
              <Link to="#" className='detailsbox_a' >
                <div className="detailsbox_icons">
                  <img src={DeleviryBox} alt="Icon" />
                </div>
                <div className="detailsbox_details">
                  <h4>Your Order</h4>
                  <p>Track,return, or buy things again </p>
                </div>
              </Link>
            </div>

            <div className="detailsbox">
              <Link to="#" className='detailsbox_a'>
                <div className="detailsbox_icons">
                  <img src={Security} alt="Icon" />
                </div>
                <div className="detailsbox_details">
                  <h4>Login & Security</h4>
                  <p>Edit login, Name,and Mobile number</p>
                </div>
              </Link>
            </div>

            <div className="detailsbox">
              <Link to="#" className='detailsbox_a'>
                <div className="detailsbox_icons">
                  <img src={Prime} alt="Icon" />
                </div>
                <div className="detailsbox_details">
                  <h4>Prime</h4>
                  <p>Veiw benefits and payment settings</p>
                </div>
              </Link>
            </div>

            <div className="detailsbox">
              <Link to="#" className='detailsbox_a'>
                <div className="detailsbox_icons">
                  <img src={Location} alt="Icon" />
                </div>
                <div className="detailsbox_details">
                  <h4>Your Addresses</h4>
                  <p>Edit addresses for orders and gifts</p>
                </div>
              </Link>
            </div>

            <div className="detailsbox">
              <Link to="#" className='detailsbox_a'>
                <div className="detailsbox_icons">
                  <img src={Card} alt="Icon" />
                </div>
                <div className="detailsbox_details">
                  <h4>Payment options</h4>
                  <p>Edit or add payment methods</p>
                </div>
              </Link>
            </div>

            <div className="detailsbox">
              <Link to="#" className='detailsbox_a'>
                <div className="detailsbox_icons">
                  <img src={Pays} alt="Icon" />
                </div>
                <div className="detailsbox_details">
                  <h4>Nyture pay balance</h4>
                  <p>Add money to your balance</p>
                </div>
              </Link>
            </div>

          </div>

          <div className="border_section"></div>

          <div className="account_other">

            <div className="other_details">
              <div className="details_heading">
                <h3>Digital content and devices</h3>
              </div>
              <div className="details_subHeading">
                <Link to='#'>Apps and more</Link>
                <Link to='#'>Content and devices</Link>
                <Link to='#'>Digital gifts you've received</Link>
              </div>
            </div>

            <div className="other_details">
              <div className="details_heading">
                <h3>Email alerts, messages, and ads</h3>
              </div>
              <div className="details_subHeading">
                <Link to='#'>Advertising preferences</Link>
                <Link to='#'>Communication preferences</Link>
                <Link to='#'>SMS alert preferences</Link>
                <Link to='#'>Message center</Link>
                <Link to='#'>ALexa Shopping notifications</Link>
                <Link to='#'>Deals Notification</Link>
              </div>
            </div>

            <div className="other_details">
              <div className="details_heading">
                <h3>More ways to pay</h3>
              </div>
              <div className="details_subHeading">
                <Link to='#'>Default Purchase Setting</Link>
                <Link to='#'>Amazon Pay</Link>
                <Link to='#'>Bank accounts for refunds</Link>
                <Link to='#'>Coupons</Link>
              </div>
            </div>

            <div className="other_details">
              <div className="details_heading">
                <h3>Ordering and shopping preferences</h3>
              </div>
              <div className="details_subHeading">
                <Link to='#'>Leave packaging feedback</Link>
                <Link to='#'>Lists</Link>
                <Link to='#'>Manage saved IDs</Link>
                <Link to='#'>Profile</Link>
                <Link to='#'>Language Settings</Link>
                <Link to='#'></Link>
              </div>
            </div>

            <div className="other_details">
              <div className="details_heading">
                <h3>Other accounts</h3>
              </div>
              <div className="details_subHeading">
                <Link to='#'>Account Linking</Link>
                <Link to='#'>Nyture Business registration</Link>
                <Link to='#'>Seller account</Link>
                <Link to='#'>Login with Nyture</Link>
              </div>
            </div>

            <div className="other_details">
              <div className="details_heading">
                <h3>Shopping programs and rentals</h3>
              </div>
              <div className="details_subHeading">
                <Link to='#'>Manage Your Profiles</Link>
                <Link to='#'>Subsccribe & Save</Link>
              </div>
            </div>

            <div className="other_details">
              <div className="details_heading">
                <h3>Subscriptions</h3>
              </div>
              <div className="details_subHeading">
                <Link to='#'>Email</Link>
                <Link to='#'>Memberships & Subscriptions</Link>
              </div>
            </div>

            <div className="other_details">
              <div className="details_heading">
                <h3>Data and Privacy</h3>
              </div>
              <div className="details_subHeading">
                <Link to='#'>Request Your Information</Link>
                <Link to='#'>Close Your Amazon Account</Link>
                <Link to='#'>Privacy Notice</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account