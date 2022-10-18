import React from 'react'
import "./Foooter.css"
import{
  FaMapMarkerAlt,FaPhoneAlt,FaFax,FaEnvelope
} from "react-icons/fa";
import globe from "../../image/globe.png";

const Foooter = () => {
  return (
   <footer id="footer">
<div className="container footer">

  <div className="footer-box">
    <h4>useful links</h4>
    <div className="footer-links">
      <a href="#">&bull; Support</a>
      <a href="#">&bull; About</a>
      <a href="#">&bull; Learn</a>
      <a href="#">&bull; Hosting</a>
      <a href="#">&bull; Learn</a>

    </div>
  </div>
  
  <div className="footer-box">
    <h4>Support</h4>
    <div className="footer-links">
      <a href="#">&bull;Support</a>
      <a href="#">&bull;About</a>
      <a href="#">&bull;Learn</a>
      <a href="#">&bull;Hosting</a>
      <a href="#">&bull;Learn</a>

    </div>
  </div>
  <div className="footer-box">
  <h4>Contact us</h4>
    <div className="footer-contact">
<p>
  <FaMapMarkerAlt/> &nbsp; Address: Addis Abeba
</p>
<p>
  <FaPhoneAlt/> &nbsp; Phone:+251 901777222
</p>
<p>
  <FaFax/> &nbsp; Fax: 
</p>
<p>
  <FaEnvelope/> &nbsp; Email: info@globalcareeri.com
</p>

    </div>
  </div>
  <div className="footer-box">
  <img src={globe} alt="globe"/>
  <p className="u-small-text">
    &copy; copyright 2022
  </p>
  </div>
</div>
   </footer>
  )
}

export default Foooter