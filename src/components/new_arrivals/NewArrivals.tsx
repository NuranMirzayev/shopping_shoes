import { useState } from 'react'

import './newArrivals.css'

import { AllProducts } from '../../utils/constants'
import AllProduct from '../Product/AllProduct'


const NewArrivals = () => {

  const [text, setText] = useState('')

  return (
    <div className='newArrivals'>
      <h2 className='h2_pr'>New Arrivals</h2>
      <div data-aos="zoom-in-up" className='newArrivalsProducts'>
        {AllProducts.filter((item) => {
          return item ? item.newArrivals === "new" : text
        }).map(item => <AllProduct key={item.name} allPr={item} />)}
      </div>
    </div>
  )
}

export default NewArrivals