import React from 'react'

import lifeStyle from './img_category/lifeStyle.png'
import basketball from './img_category/basketball.png'
import football from './img_category/football.png'
import running from './img_category/running.png'
import walking from './img_category/walking.png'
import sale from './img_category/sale.png'

import './category.css'

const Category = () => {
    return (
        <div className='category'>
            <h1 className='category_h1'>Collection</h1>
            <div
                data-aos="zoom-in-up"
                className="category_box">
                <div className="box_lifeStyle">
                    <img className='category_img' src={lifeStyle} alt="hello" />
                    <p className='p_category'>Life Style</p>
                </div>
                <div className="box_basketball ">
                    <img className='category_img' src={basketball} alt="hello" />
                    <p className='p_category'>Basketball</p>
                </div>
                <div className="box_football">
                    <img className='category_img' src={football} alt="hello" />
                    <p className='p_category'>Football</p>
                </div>
                <div className="box_running">
                    <img className='category_img' src={running} alt="hello" />
                    <p className='p_category'>Running</p>
                </div>
                <div className="box_walking">
                    <img className='category_img' src={walking} alt="hello" />
                    <p className='p_category'>Walking</p>
                </div>
                <div className="box_sale">
                    <img className='category_img_sale' src={sale} alt="hello" />
                    <p className='p_category'>Sale %</p>
                </div>
            </div>
        </div>
    )
}

export default Category