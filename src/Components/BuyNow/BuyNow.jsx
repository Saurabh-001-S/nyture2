import React, { useEffect, useState } from 'react'
import "./buyNow.css";
import { useDispatch, useSelector } from 'react-redux';
import { BuyItem } from "../../Constant/index";
import BOB from "./BOB.png";
import HDFC from "./HDFC.png";
import ICICI from "./ICICI.png";
import SBI from "./sbi.svg";

import { BsCreditCard2Back } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { RxGlobe } from "react-icons/rx";
import { getCartTotal, clearBuy } from '../../Store/StoreCart/StoreCart';
import { useNavigate } from 'react-router-dom';

const BuyNow = () => {
  const [name, setName] = useState('');
  const [CardNo, setCardNo] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [radio, setRadio] = useState('');

  const [toggleSection, setToggleSection] = useState({
    debitCard: false,
    netBanking: false,
    onlinePay: false
  });
  const handleToggleSection = (paymentMethod) => {
    setToggleSection((prevState) => ({
      debitCard: paymentMethod === 'debitCard' ? !prevState.debitCard : false,
      netBanking: paymentMethod === 'netBanking' ? !prevState.netBanking : false,
      onlinePay: paymentMethod === 'onlinePay' ? !prevState.onlinePay : false
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(''); setMonth(''); setYear(''); setCvv(''); setCardNo(''); setRadio('');
    dispatch(clearBuy(items))
    navigate('/')
  };
  const renderMonthOptions = () => {
    const months = [
      { value: 'MM' }, { value: '01' }, { value: '02' }, { value: '03' }, { value: '04' }, { value: '05' }, { value: '06' },
      { value: '07' }, { value: '08' }, { value: '09' }, { value: '10' }, { value: '11' }, { value: '12' },
    ];

    return months.map((month) => (
      <option key={month.value} value={month.value}>
        {month.value}
      </option>
    ));
  };
  const renderYearOptions = () => {
    const years = [
      { value: 'YYYY' },
      { value: 2023 }, { value: 2024 }, { value: 2025 }, , { value: 2026 }, { value: 2027 }, { value: 2028 }, { value: 2029 }, { value: 2030 }
      , { value: 2031 }, { value: 2032 }, { value: 2033 }, { value: 2034 }, { value: 2035 }, { value: 2036 }, , { value: 2037 }, , { value: 2038 }, { value: 2039 }, { value: 2040 }
    ];

    return years.map((year) => (
      <option key={year.value} value={year.value}>
        {year.value}
      </option>
    ));
  };
  const renderPayOptions = () => {
    const pay = [
      { value: 'Select' }, { value: 'Paytm' }, { value: 'GooglePay' }, { value: 'PhonePay' }, { value: 'ApplePay' }, { value: 'AmazonPay' }
    ];
    return pay.map((pays) => (
      <option key={pays.value} value={pays.value}>
        {pays.value}
      </option>
    ));
  };
  const items = useSelector((state) => state.allCart.buyItem);
  const { cart, totalPrice, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const total = () => {
    if (totalQuantity === 0) {
      return 0;
    } else {
      if (totalPrice < 400) {
        return totalPrice + 10;
      } else {
        return totalPrice + 20;
      }
    }
  }


  return (
    <div className='buyNow' id='buy'>
      <div className="buyNow_head">
        <div className="buyNow_head-heading">
          <h1>BuyNow Cart</h1>
        </div>
      </div>
      <div className="buyNow_body flex-row">

        <div className="buyNow_body-left flex-col">
          <div className="buyNow_info">
            <div className="buyNow_login">
              <div className="buyNow_login_head ">
                <p>LOGIN</p>
                <div className="buyNow_login-info flex-row">
                  <h3>Sanjay Sahu</h3>
                  <h3>+91-875-548-5483</h3>
                </div>
              </div>
            </div>
            <div className="buyNow_address">
              <div className="buyNow_login_head">
                <p>SHIPPING ADDRESS</p>
                <div className="buyNow_address-info flex-row">
                  <h3>Bandra ,Phase-4,H.No-4752</h3>
                  <h3>Mumbai,222102</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="buyNow_payment flex-col">
            <div className="buyNow_heading">
              <h2>PAYMENT METHOD</h2>
            </div>
            <div className="buyNow_payment-methods flex-col">
              <div className="payment_DebitCard">
                <div className="payment-option flex-row">
                  <input type="radio" name="checkbox" id="checkbox-debitCard" className="checkbox"
                    value={toggleSection.debitCard} onChange={() => handleToggleSection('debitCard')}
                  />
                  <div className="payment_Icon_head flex-row">
                    <div className="payment_Icon">
                      <BsCreditCard2Back fontSize={35} />
                    </div>
                    <div className="payment_heading">Debit / Credit Card</div>
                  </div>
                </div>
                {toggleSection.debitCard && (
                  <div className="payment_toggle">
                    <form onSubmit={handleSubmit}>
                      <div className="details_name flex-col">
                        <label htmlFor="name">Card Holder Name*</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                      </div>
                      <div className="details_name flex-col">
                        <label htmlFor="name">Card Number*</label>
                        <input type="text" value={CardNo} onChange={(e) => setCardNo(e.target.value)} required />
                      </div>
                      <div className="details_card flex-row">
                        <div className="card_Date flex-col">
                          <p htmlFor="date">Valid Date</p>
                          <div className="card_Date-months">
                            <label> <select value={month} onChange={(e) => setMonth(e.target.value)}> {renderMonthOptions()}</select></label>
                            <label>  <select value={year} onChange={(e) => setYear(e.target.value)}> {renderYearOptions()}</select></label>
                          </div>
                        </div>
                        <div className="card cvv flex-col">
                          <label>CVV *</label>
                          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                        </div>
                      </div>
                      <div className="confirm_button">
                        <button type="submit">Pay ${total()}</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              <div className="payment_NetBanking">
                <div className="payment-option flex-row">
                  <input type="radio" name="checkbox" id="checkbox-netBanking" className="checkbox"
                    value={toggleSection.netBanking} onChange={() => handleToggleSection('netBanking')}
                  />
                  <div className="payment_Icon_head flex-row">
                    <div className="payment_Icon">
                      <RxGlobe fontSize={35} />
                    </div>
                    <div className="payment_heading">Net Banking</div>
                  </div>
                </div>

                {toggleSection.netBanking && (<>
                  <div className="netBanking_bank flex-row">
                    <div className="bank flex-col">
                      <img src={SBI} alt="SBI" />
                      <p>SBI</p>
                      <input type="radio" className="checkbox"
                        name="bankSelection" value="SBI" onChange={(e) => setRadio(e.target.value)}
                      />
                    </div>
                    <div className="bank flex-col">
                      <img src={HDFC} alt="HDFC" />
                      <p>HDFC</p>
                      <input type="radio" className="checkbox"
                        name="bankSelection" value="HDFC" onChange={(e) => setRadio(e.target.value)}
                      />
                    </div>
                    <div className="bank flex-col">
                      <img src={BOB} alt="HDFC" />
                      <p>BOB</p>
                      <input type="radio" className="checkbox"
                        name="bankSelection" value="BOB" onChange={(e) => setRadio(e.target.value)}
                      />
                    </div>
                    <div className="bank flex-col">
                      <img src={ICICI} alt="HDFC" />
                      <p>ICICI</p>
                      <input type="radio" className="checkbox"
                        name="bankSelection" value="ICICI" onChange={(e) => setRadio(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="payment_toggle">
                    <form onSubmit={handleSubmit}>
                      <div className="details_name flex-col">
                        <label htmlFor="name">Enter Card Holder Name*</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                      </div>
                      <div className="details_name flex-col">
                        <label htmlFor="number">Enter Card Number*</label>
                        <input type="text" value={CardNo} onChange={(e) => setCardNo(e.target.value)} required />
                      </div>
                      <div className="details_card flex-row">
                        <div className="card_Date flex-col">
                          <p >Valid Date</p>
                          <div className="card_Date-months">
                            <label> <select value={month} onChange={(e) => setMonth(e.target.value)}> {renderMonthOptions()}</select></label>
                            <label>  <select value={year} onChange={(e) => setYear(e.target.value)}> {renderYearOptions()}</select></label>
                          </div>
                        </div>
                        <div className="card cvv flex-col">
                          <label>CVV* </label>
                          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                        </div>
                      </div>
                      <div className="confirm_button">
                        <button type="submit">Pay ${total()}</button>
                      </div>
                    </form>
                  </div>
                </>
                )}
              </div>
              <div className="payment_Onlinepay">
                <div className="payment-option flex-row">
                  <input type="radio" name="checkbox" id="checkbox-onlinePay" className="checkbox"
                    value={toggleSection.onlinePay} onChange={() => handleToggleSection('onlinePay')}
                  />
                  <div className="payment_Icon_head flex-row">
                    <div className="payment_Icon">
                      <GiWallet fontSize={35} />
                    </div>
                    <div className="payment_heading wrap"><p> UPI / Google / Apple Wallet</p></div>
                  </div>
                </div>
                {toggleSection.onlinePay && (
                  <div className="payment_toggle">
                    <form onSubmit={handleSubmit} className='flex-col'>
                      <div className="details_name flex-col">
                        <label htmlFor="name">Enter Name*</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                      </div>
                      <div className="details_name flex-col">
                        <label htmlFor="upi">Enter UPI*</label>
                        <input type="text" value={CardNo} onChange={(e) => setCardNo(e.target.value)} required />
                      </div>
                      <div className="details_name flex-col">
                        <label htmlFor="upi">Enter Pay App*</label>
                        <label className='label_border'><select value={year} onChange={(e) => setYear(e.target.value)}> {renderPayOptions()}</select></label>
                      </div>

                      <div className="confirm_button">
                        <button type="submit">Pay ${total()}</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="buyNow_body-right flex-col">
          <div className="buyNow_right_head">Your Order </div>
          <div className="buyNow_item flex-col">
            {
              items.map((item) => (
                <>
                  <BuyItem key={item.id} item={item} />
                </>
              ))
            }
          </div>
          <div className="buyNow_delivery flex-row">
            <p className="p-fade">Delivery</p>
            <div className='flex-row'>
              <p>${totalQuantity === 0 ? 0 : totalPrice < 400 ? 10 : 20}</p>
              <p className="p-fade">(Express)</p>
            </div>
          </div>
          <div className="buyNow_total flex-row">
            <h2>Total</h2>
            <h2>${total()}</h2>
          </div>
        </div>

      </div >
    </div >
  )
}

export default BuyNow