import React from "react";

const NavBar = () => {
    return (
        <div className="ui fixed inverted menu">
        <div className="ui container">
            <a href="#" className="header item">
                <img className="logo" alt="" src='logo.jpg' />
                ArchiDAO
            </a>
            <a href='#' className="item">
                Home
            </a>
            <a href='#' className="item">
                Contact
            </a>
        </div>
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