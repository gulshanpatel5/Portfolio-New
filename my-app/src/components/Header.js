import React from 'react';
import "./Header.css";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';  // Importing social icons

const Header = () => {
  return (
    <header className="header">
        <div className="header-content">

        

            <div className="header-text">
                <h1>
                    Hii There, I am <span className="name">Gulshan..</span>
                </h1>
                <h2 className="Role">Creative Developer</h2>
                <button className="View">View Works</button>
            </div>

            <div className='header-images'>
                <img src='./images/Gulshan3.png' alt='Gulshan'/>
            </div>

        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="social-icon" />
            </a>
        </div>
    </header>
  );
};

export default Header;
