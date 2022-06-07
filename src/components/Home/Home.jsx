import React from 'react';

import './Home.css';
import img from '../constants/images';
import Heading from '../Heading/Heading';

export default function Home() {
  return (
    <div className="app__home" id="home">
      <div className="app__home-desc">
        <Heading heading1="Hello," heading2="I am Home page" />
      </div>
      <div className="app__home-img">
        <img src={img.h} alt="3 people standing" />
      </div>
    </div>
  )
}
