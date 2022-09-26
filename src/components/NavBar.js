import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';

const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    return (

       <nav className="navbar" >
            <div className="navbar-container">
            <div className='navbar__wrapper'>
            
            <Link to="/home" className="navbar-logo" data-hover='ARCHIDAO'> 
            & 
            </Link>
            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    >
                    <path
                        strokeLinecap="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        strokeLinejoin="round"
                    />
            </svg>
            </button>
            <div className={
                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }>
            <ul className='navbar__nav'>
                <Link to='/about'className="navbar-menu">
                    ABOUT
                </Link>
                <Link to='/work' className="navbar-menu" >
                    WORK
                </Link>
                <Link to='/contact' className="navbar-menu" >
                    CONTACT
                </Link>
            
                
            {/* <a href="https://twitter.com/archi_dao?lang=en" target="_blank" rel="noreferrer" className="item">
                <i className="twitter large icon floated right"></i>
            </a>
            <a href="https://www.instagram.com/archidao.io/" target="_blank" rel="noreferrer" className="item">
                <i className="instagram large icon floated right"></i>
            </a>
            <a href="https://www.linkedin.com/company/archidao-io?trk=similar-pages" rel="noreferrer" target="_blank" className="item">
                <i className="linkedin large icon floated right"></i>
            </a>    */}
                </ul>
            </div>
                

          
                </div>
        
        
                </div>
                
            </nav>
    );

}

export default NavBar