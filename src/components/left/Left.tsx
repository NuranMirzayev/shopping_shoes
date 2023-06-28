import React from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import './left.css'
import 'animate.css';

const Left = () => {
  return (
    <div className='left'>
      <h1 className='left__h1 animate__animated animate__backInLeft'>
        Air Jordan 1 Mid
      </h1>
      <p className="left_text_p__1 animate__animated animate__backInLeft animate__delay-1s">
        Men's Shoes
      </p>
      <p className="left_text_p__2 animate__animated animate__backInLeft animate__delay-2s">
        ₪529.90
      </p>
      <p className="left_text_p__3 animate__animated animate__backInLeft animate__delay-3s">
        Inspired by the original AJ1,
        this mid-top edition maintains the iconic look you love while
        choice colours and crisp leather give it a distinct identity.
      </p>
      <button className='left_btn animate__animated animate__backInLeft animate__delay-4s'>
        BUY NOW
        <ArrowForwardIcon className='left_btn_icon' />
      </button>
      {/* <IconButton color='inherit' className='left_btn'>
        BUY NOW
        <ArrowForwardIcon className='left_btn_icon'/>
      </IconButton> */}
    </div>
  )
}

export default Left