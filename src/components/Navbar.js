import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
            <nav className="navigation">
            <Link to="/" className="navbar-logo" data-hover='ARCHIDAO'> 
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
                    }
                >
                    <ul className='navbar-items'>
                    <li>
                        <div>
                        <Link to="/">Home</Link>
                        </div>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }

        