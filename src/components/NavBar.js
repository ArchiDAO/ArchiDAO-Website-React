import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import GetMetamask from "./GetMetaMask";

const NavBar = () => {
    
    return (

       <nav className="navbar" >
            <div className="navbar-container">
            <div className='navbar__wrapper'>
            
            <Link to="/home" className="navbar-logo"
                data-hover='ARCHIDAO'
            

            >
                    {/* <img className="logo" alt="" src='logo.jpg' style={{marginRight: "5px"}}/> */}
                      & </Link>
                     
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
                
            </nav>
    );

}

export default NavBar