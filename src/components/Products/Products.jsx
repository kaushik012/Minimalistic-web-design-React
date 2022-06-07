import React from 'react'

import './Products.css'
import img from '../constants/images';

export default function Products() {
  return (
    <div className="app__product" id='products'>
        <div className="app__product-intro">
            <h1>Hello, I am Products page</h1>
        </div>
        <div className="app__product-items">
          <div className="app__items">
            <img src={img.ca} alt="camera" />
            <p className="item-price">10$</p>
          </div>
          <div className="app__items">
            <img src={img.r} alt="camera" />
            <p className="item-price">20$</p>
          </div>
          <div className="app__items">
            <img src={img.vr} alt="camera" />
            <p className="item-price">30$</p>
          </div>
        </div>
    </div>
  )
}
