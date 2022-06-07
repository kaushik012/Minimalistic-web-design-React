import React from 'react'

import img from '../constants/images';
import './Service.css'; 
import Heading from '../Heading/Heading';

export default function Service() {
  return (
    <div className="app__sevice" id="service">
        <div className="app__service-img">
            <img src={img.s} alt="a guy with his bicycles" />
        </div>
        <div className="app__service-desc">
            <Heading heading1="Hello,I am" heading2="Service page"/>
        </div>
    </div>
  )
}
