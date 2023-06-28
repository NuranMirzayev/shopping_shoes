import React from 'react'

import './loading.css'

const Loading = () => {
  return (
    <div className='loading'>
      <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
      </div>
    </div>
  )
}

export default Loading