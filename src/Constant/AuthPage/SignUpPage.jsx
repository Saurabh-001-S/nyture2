import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthTrueorNot, callNotification } from '../../Store/StoreCart/StoreCart';

const SignUpPage = ({ setClass }) => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNo, setPhoneNo] = useState('');
   const [password, setPassword] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();


   const submit = (e) => {
      e.preventDefault();
      for (let key in localStorage) {
         if (email === key) {
            dispatch(callNotification(5))
         } else {
            localStorage.setItem(email.toLowerCase(), JSON.stringify([name, password, phoneNo]));
            dispatch(callNotification(7))
            setName(''); setEmail(''); setPassword('');
            navigate('/')
            dispatch(AuthTrueorNot(true));
            break;
         }
      }
   }
   return (
      <div className="form-box register">
         <h2>Registration</h2>
         <form onSubmit={submit}>
            <div className="input-box">
               <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
               <label>Username</label>
            </div>

            <div className="input-box">
               <span className="icon"><ion-icon name="mail"></ion-icon></span>
               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
               <label>Email</label>
            </div>

            <div className="input-box">
               <input type="text" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
               <label>Phone number</label>
            </div>

            <div className="input-box">
               <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
               <label>Password</label>
            </div>

            <div className="remmember-forgot">
               <label><input type="checkbox" aria-required />I agree to the terms & conditions</label>
            </div>
            <button type="submit" className="login_btn">Register</button>
            <div className="login-register">
               <p>Already have an account? <a href="#" className="login-link" onClick={setClass}>Login</a></p>
            </div>
         </form>
      </div>
   )
}

export default SignUpPage
