import React, {useState} from "react";
import "./Navbar.css";
import {GoGlobe} from "react-icons/go"; 
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import Button from "../UI/button/Button";
import"../UI/button/Button.css"
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
const toggleMenu = () => {
  setShowMenu(!showMenu)
}
  return (
    <nav className="container navbar">
        <div className="logo">
        <GoGlobe color="black" size={33}/>
        <p className="logo-text">
          <span>
            Global Career Inst.
          </span>
        </p>
        </div>
        <menu>
           <ul className="nav-links" id= {showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"} >
           <li><a href="#">Home</a></li>
           <li><a href="#Features">About us</a></li>
           <li><a href="#AboutUs">Testmony</a></li>
           <li><a href="#Subscribe">contact us</a></li>
           <li className="nav-btn"><a href="#Faq" className="btn btn-dark">Learn more</a>
           </li> 
            
           </ul>
        </menu>
        <div className="menu-icons" onClick={toggleMenu}>
          {
            showMenu ? (<RiCloseLine color="#" size={30}/>):(<AiOutlineBars color="#" size={27}/>)
          }
        </div>
    </nav>
  )
}

export default Navbar