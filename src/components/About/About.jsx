import React from 'react';

import img from '../constants/images';
import Heading from '../Heading/Heading';
import './About.css';

export default function About() {
  return (
    <div class="app__about" id="about">
        <div className="app__about-desc">
            <Heading heading1="Hello, I am" heading2="About us page" />
        </div>
        <div className="app__about-img">
            <img src={img.a} alt="A guy with a dog" />
        </div>
    </div>
  )
}
