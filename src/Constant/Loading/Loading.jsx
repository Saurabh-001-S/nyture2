import React from 'react'
import './loading.css'
const Loading = () => {
   return (
      <div className='loading'>
         <div className="load_icon">
            <div className="loadspin lp1"></div>
            <div className="loadspin lp2"></div>
            <div className="loadspin lp3"></div>
            <div className="loadspin lp4"></div>
         </div>
         <h2>Loading...</h2>
      </div>
   )
}

export default Loading
