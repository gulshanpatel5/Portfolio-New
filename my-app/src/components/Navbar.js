import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowDown } from "react-icons/fa";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = ()=>{
   
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen , setDropdownOpen] = useState (false);
    
    const toggleMenu = () =>{
        setIsOpen(!isOpen);

    }

    const toggleDropdown = () =>{

        setDropdownOpen(!dropdownOpen);

    }


    return(
        
    <nav className="navbar">
        <div className="navbar-container">
            <div className="logo">Gulshan.</div>
            <div className="menu-icon" onClick={toggleMenu}>  

                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}> 
            <li>
  <Link to="/">Home</Link></li>
            <li>works</li>
            <li>Services</li>
            <li className="dropdown">
                <span onClick={toggleDropdown}>
                    Pages <span className="dropdown-icon"><FaArrowDown/></span>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li>works Details</li>
                            <li>Elements</li>

                        </ul>
                    )}

                </span>
            </li>

            <li>About</li>
            <li>Blog</li>
            <li>Contact Us</li>


        </ul>
        
        <button className="talk">Let's Talk</button>
            
        </div>
    </nav>
    )

};
export default Navbar;
