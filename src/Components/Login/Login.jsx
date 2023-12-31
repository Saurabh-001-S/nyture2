import React, { useState } from 'react'
import { LoginSetion, SignUpPage } from "../../Constant/index";

const Login = () => {
  const [toggleclass, setToggleclass] = useState(false)
  const setClass = () => {
    setToggleclass(!toggleclass);
  }

  return (
    <>
      <div className="auth" id='auth'>
        <div className={`wrapper  ${toggleclass ? "active" : ""}`}>
          <LoginSetion setClass={setClass} />
          <SignUpPage setClass={setClass} />
        </div>
      </div>
    </>
  )
}

export default Login