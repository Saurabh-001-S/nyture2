import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callNotification } from '../../Store/StoreCart/StoreCart';
import Warning from "./warning.png";

const LoginSetion = ({ setClass }) => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const checkLogin = (e) => {
      e.preventDefault();
      const storedData = localStorage.getItem(email);
      const passcont = document.getElementById('wrongCredentials')
      if (storedData) {
         const [storedName, storedPassword] = JSON.parse(storedData);
         if (password === storedPassword) {
            setEmail(''); setPassword('');
            navigate("/")
            dispatch(callNotification(6))
            passcont.style.display = "none"
         } else passcont.style.display = "flex"
      } else passcont.style.display = "flex"
   }

   return (
      <div className="form-box login">
         <h2>Login</h2>
         <form onSubmit={checkLogin}>
            <div className="WrongCredentials" id='wrongCredentials'>
               <img src={Warning} alt="warning" />
               <p>You have entered an invalid gmail or password</p>
            </div>
            <div className="input-box">
               <span className="icon"><ion-icon name="mail"></ion-icon></span>
               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
               <label>Email</label>
            </div>
            <div className="input-box" id="passCont">
               <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
               <label>Password</label>
            </div>
            <div className="remmember-forgot">
               <label><input type="checkbox" />Remember me</label>
               <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="login_btn">Login</button>
            <div className="login-register">
               <p>Don't have an account? <a href="#" className="register-link" onClick={setClass}>Register</a></p>
            </div>
         </form>
      </div>
   )
}

export default LoginSetion