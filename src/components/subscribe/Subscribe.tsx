import React from 'react'

import img_sub from './img_sub/img_sub.png'

import './subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className="left_sub">
        <img className='left_sub_img' src={img_sub} alt="sub" />
      </div>
      <div className="right_sub">
        <h1 data-aos="zoom-out" className='h1_right_sub'>Subscribe and get info
          <br />
          about new realeases first</h1>
        <span data-aos="fade-up-left">
          <input
            className="right_sub_input"
            type='email'
            placeholder='example@mail.com'
          />
          <button className='right_sub_btn'>Subscribe</button>
        </span>
      </div>
    </div>
  )
}

export default Subscribe

// data-aos="zoom-out-left"

// data-aos="fade-up-left"