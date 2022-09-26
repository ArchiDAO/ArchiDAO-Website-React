import React, { useState } from 'react';
import '../styles/Navbar.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
            <nav className="navigation">
                <a href="/" className="brand-name">
                    ArchiDAO
                </a>
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
                    <ul>
                    <li>
                        <a href="/about">About</a>                       
                    </li>
                    <li>
                        <a href="/work">Work</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <Router>
                            <Routes>
                            <Route exact path="/about" element={<About/>}/>
                            </Routes>
                        </Router>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }

        