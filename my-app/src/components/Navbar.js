import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowDown } from "react-icons/fa";
import "./Navbar.css"


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


        </div>
    </nav>
    )

};
export default Navbar;