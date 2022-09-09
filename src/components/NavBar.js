import React from "react";

const NavBar = () => {
    return (
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <a href="/home" className="header item">
                    <img className="logo" alt="" src='logo.jpg' style={{marginRight: "5px"}}/>
                    ArchiDAO
                </a>
                <a href='/vision' className="item">
                    Vision
                </a>
                <a href='/services' className="item">
                    Services
                </a>
                <a href='/roadmap' className="item">
                    Roadmap
                </a>
                <a href='/projects' className="item">
                    Projects
                </a>
                <a href='/team' className="item">
                    Team
                </a>
                <a href='/partners' className="item">
                    Partners
                </a>
                <a href='/whitepaper' className="item">
                    Whitepaper
                </a>
            </div>
            <a href='/contact' className="item">
                Contact
            </a>
            <a href='/join' className="item">
                Join
            </a>
            <a href="https://twitter.com/archi_dao?lang=en" target="_blank" rel="noreferrer" className="item">
                <i className="twitter large icon floated right"></i>
            </a>
            <a href="https://www.instagram.com/archidao.io/" target="_blank" rel="noreferrer" className="item">
                <i className="instagram large icon floated right"></i>
            </a>
            <a href="https://www.linkedin.com/company/archidao-io?trk=similar-pages" rel="noreferrer" target="_blank" className="item">
                <i className="linkedin large icon floated right"></i>
            </a>   
    </div>
    )
}

export default NavBar;