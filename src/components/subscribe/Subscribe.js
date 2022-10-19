import React from 'react'
import"./Subscribe.css"
import {TiSocialGooglePlus} from "react-icons/ti";
import { FaFacebookF,FaTelegramPlane,FaInstagram } from "react-icons/fa";


const Subscribe = () => {
  return (
   <section className="subscribe"  id='Subscribe'>
<div className="container subscribe">
<h2>
  Join Us Now!
</h2>
<form>
  <div className="form-control">
    <input type="text" placeholder="Enter your Email"/>
    <button>Subscribe</button>
  </div>
</form>
<div className="social-icons">
  <div className="social-icon">
    <TiSocialGooglePlus/>
  </div>
  <div className="social-icon">
    <FaFacebookF/>
  </div>
  <div className="social-icon">
    <FaTelegramPlane/>
  </div>
  <div className="social-icon">
    <FaInstagram />
  </div>
  
</div>
</div>
    
    


   </section>
  )
}

export default Subscribe