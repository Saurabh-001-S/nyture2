import React, { useState } from 'react'
<<<<<<< HEAD
import { LoginSetion, SignUpPage } from "../../Constant/index";
=======
import LoginSetion from './LoginSetion';
import SignUpPage from './SignUpPage';
>>>>>>> 2ca9063d0b69d5d4afa9e9320a0ffcfe7e4a5bc7
import './login.css';

const Login = () => {

  const [toggleclass, setToggleclass] = useState(false)
  const setClass = () => {
    setToggleclass(!toggleclass);
  }

  return (
    <>
      <div className="auth">
        <div className={`wrapper  ${toggleclass ? "active" : ""}`}>
          <LoginSetion setClass={setClass} />
          <SignUpPage setClass={setClass} />
        </div>
      </div>
    </>
  )
}

export default Login