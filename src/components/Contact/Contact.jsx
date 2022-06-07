import React from 'react'

import './Contact.css';
import img from '../constants/images';


export default function Contact() {
  return (
    <div className="app__contact" id="contact">
        <div className="app__contact-img">
            <img src={img.c} alt="a guy talking with a client virtually" />
        </div>
        <div className="app__contact-desc">
            <div className="app__contact-intro">
                <h1>Hello, I am</h1>
                <h1>Contact page</h1>
            </div>
            <form className="app__contact-form">
                <input type="text" name="name" id="name" placeholder='Name'/>
                <input type="email" name="email" id="email" placeholder='Email'/>
                <input type="text" name="subject" id="subject" placeholder='Subject'/>
                <input name="message" id="message" placeholder="Message" />
                <button type="submit" name="submit" id="submit">Message Me</button>
            </form>
        </div>
    </div>
  )
}
