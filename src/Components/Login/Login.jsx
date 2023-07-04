import React, { useState } from 'react'
import './login.css';
const Login = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleclass, setToggleclass] = useState(false)

  const setClass = () => {
    setToggleclass(!toggleclass);
  }
  const submit = (e) => {
    e.preventDefault();
    setEmail('');
    setName('');
    setPassword('');
  }

  return (
    <>
      <div className="auth">
        <div className={toggleclass ? "wrapper active-popup active" : "wrapper active-popup"}>
          <div className="form-box login">
            <h2>Login</h2>
            <form onSubmit={submit}>
              <div className="input-box">
                <span className="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Email</label>
              </div>
              <div className="input-box">
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
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
        </div>
      </div>
    </>
  )
}

export default Login
