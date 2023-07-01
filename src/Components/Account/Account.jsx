import React from 'react'
import Card from "./Card.png";
import DeleviryBox from "./DeleviryBox.png";
import Location from "./Location.png";
import Pays from "./Pays.png";
import Prime from "./Prime.png";
import Security from "./Security.png";
import './account.css'

const Account = () => {
  return (
    <div className='account'>
      <div className="acount_heading">
        <h2>Your Account</h2>
      </div>
      <div className='account_info'>
        <div className="account_details">
          <div className="detailsbox">
            <a href="#" className='detailsbox_a'>
              <div className="detailsbox_icons">
                <img src={DeleviryBox} alt="Icon" />
              </div>
              <div className="detailsbox_details">
                <h4>Your Order</h4>
                <p>Track,return, or buy things again </p>
              </div>
            </a>
          </div>

          <div className="detailsbox">
            <a href="#" className='detailsbox_a'>
              <div className="detailsbox_icons">
                <img src={Security} alt="Icon" />
              </div>
              <div className="detailsbox_details">
                <h4>Login & Security</h4>
                <p>Edit login, Name,and Mobile number</p>
              </div>
            </a>
          </div>

          <div className="detailsbox">
            <a href="#" className='detailsbox_a'>
              <div className="detailsbox_icons">
                <img src={Prime} alt="Icon" />
              </div>
              <div className="detailsbox_details">
                <h4>Prime</h4>
                <p>Veiw benefits and payment settings</p>
              </div>
            </a>
          </div>

          <div className="detailsbox">
            <a href="#" className='detailsbox_a'>
              <div className="detailsbox_icons">
                <img src={Location} alt="Icon" />
              </div>
              <div className="detailsbox_details">
                <h4>Your Addresses</h4>
                <p>Edit addresses for orders and gifts</p>
              </div>
            </a>
          </div>

          <div className="detailsbox">
            <a href="#" className='detailsbox_a'>
              <div className="detailsbox_icons">
                <img src={Card} alt="Icon" />
              </div>
              <div className="detailsbox_details">
                <h4>Payment options</h4>
                <p>Edit or add payment methods</p>
              </div>
            </a>
          </div>

          <div className="detailsbox">
            <a href="#" className='detailsbox_a'>
              <div className="detailsbox_icons">
                <img src={Pays} alt="Icon" />
              </div>
              <div className="detailsbox_details">
                <h4>Nyture pay balance</h4>
                <p>Add money to your balance</p>
              </div>
            </a>
          </div>

        </div>

        <div className="border_section"></div>

        <div className="account_other">

          <div className="other_details">
            <div className="details_heading">
              <h3>Digital content and devices</h3>
            </div>
            <div className="details_subHeading">
              <a href='#'>Apps and more</a>
              <a href='#'>Content and devices</a>
              <a href='#'>Digital gifts you've received</a>
            </div>
          </div>

          <div className="other_details">
            <div className="details_heading">
              <h3>Email alerts, messages, and ads</h3>
            </div>
            <div className="details_subHeading">
              <a href='#'>Advertising preferences</a>
              <a href='#'>Communication preferences</a>
              <a href='#'>SMS alert preferences</a>
              <a href='#'>Message center</a>
              <a href='#'>ALexa Shopping notifications</a>
              <a href='#'>Deals Notification</a>
            </div>
          </div>

          <div className="other_details">
            <div className="details_heading">
              <h3>More ways to pay</h3>
            </div>
            <div className="details_subHeading">
              <a href='#'>Default Purchase Setting</a>
              <a href='#'>Amazon Pay</a>
              <a href='#'>Bank accounts for refunds</a>
              <a href='#'>Coupons</a>
            </div>
          </div>

          <div className="other_details">
            <div className="details_heading">
              <h3>Ordering and shopping preferences</h3>
            </div>
            <div className="details_subHeading">
              <a href='#'>Leave packaging feedback</a>
              <a href='#'>Lists</a>
              <a href='#'>Manage saved IDs</a>
              <a href='#'>Profile</a>
              <a href='#'>Language Settings</a>
              <a href='#'></a>
            </div>
          </div>

          <div className="other_details">
            <div className="details_heading">
              <h3>Other accounts</h3>
            </div>
            <div className="details_subHeading">
              <a href='#'>Account Linking</a>
              <a href='#'>Nyture Business registration</a>
              <a href='#'>Seller account</a>
              <a href='#'>Login with Nyture</a>
            </div>
          </div>

          <div className="other_details">
            <div className="details_heading">
              <h3>Shopping programs and rentals</h3>
            </div>
            <div className="details_subHeading">
              <a href='#'>Manage Your Profiles</a>
              <a href='#'>Subsccribe & Save</a>
            </div>
          </div>

          <div className="other_details">
            <div className="details_heading">
              <h3>Subscriptions</h3>
            </div>
            <div className="details_subHeading">
              <a href='#'>Email</a>
              <a href='#'>Memberships & Subscriptions</a>
            </div>
          </div>

          <div className="other_details">
            <div className="details_heading">
              <h3>Data and Privacy</h3>
            </div>
            <div className="details_subHeading">
              <a href='#'>Request Your Information</a>
              <a href='#'>Close Your Amazon Account</a>
              <a href='#'>Privacy Notice</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Account