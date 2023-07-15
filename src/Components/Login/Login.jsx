import React, { useState } from 'react'
import LoginSetion from './LoginSetion';
import SignUpPage from './SignUpPage';
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