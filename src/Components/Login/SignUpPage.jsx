import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callNotification } from '../../Store/StoreCart/StoreCart';

const SignUpPage = ({ setClass }) => {

   const [Rname, setRName] = useState('');
   const [email, setEmail] = useState('');
   const [Rpassword, setRPassword] = useState('');

   const dispatch = useDispatch();
   const navigate = useNavigate();


   const submit = (e) => {
      e.preventDefault();
      for (let key in localStorage) {
         if (email === key) {
            dispatch(callNotification(5))
         } else {
            localStorage.setItem(email.toLowerCase(), JSON.stringify([Rname, Rpassword]));
            dispatch(callNotification(7))
            setRName(''); setEmail(''); setRPassword('');
            navigate('/')
            break;
         }
      }
   }
   return (
      <div className="form-box register">
         <h2>Registration</h2>
         <form onSubmit={submit}>
            <div className="input-box">
               <input type="text" value={Rname} onChange={(e) => setRName(e.target.value)} required />
               <label>Username</label>
            </div>

            <div className="input-box">
               <span className="icon"><ion-icon name="mail"></ion-icon></span>
               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
               <label>Email</label>
            </div>
            <div className="input-box">
               <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
               <input type="password" value={Rpassword} onChange={(e) => setRPassword(e.target.value)} required />
               <label>Password</label>
            </div>
            <div className="remmember-forgot">
               <label><input type="checkbox" />I agree to the terms & conditions</label>
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
