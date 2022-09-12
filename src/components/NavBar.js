import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {

    // $('.ui.sidebar').sidebar({
    //     context: $('.ui.pushable.segment'),
    //     transition: 'overlay'
    // }).sidebar('attach events', '#mobile_item');
    
    return (
<<<<<<< Updated upstream
        <div>
            <div className="ui grid">
	
                <div className="computer only row">
                    <div className="column">
                        <div className="ui menu">
                        <a href="/home" className="item">
                                <img className="logo" alt="" src='logo.jpg' style={{marginRight: "5px", height: "40px"}}/>
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
                    </div>
                </div>
	
                <div className="tablet mobile only row">
                    <div className="column">
                            <a href="/home" className="header item floated right">
                                <img className="logo" alt="" src='logo.jpg' style={{marginRight: "5px", height: "50px"}}/>
                            </a>
                        <div className="ui menu floated right">
                            <a id="mobile_item" className="item"><i className="bars icon"></i></a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="ui pushable segment">

                    <div className="ui sidebar vertical menu">
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
                    <div className="pusher">
                        <div id="content" className="ui segment">
                            Hero Content Here
                        </div>
                    </div>
            </div>
        </div>
    //     <div className="ui fixed inverted menu">
    //         <a href='/contact' className="item">
    //             Contact
    //         </a>
    //         <a href='/join' className="item">
    //             Join
    //         </a>
    //         <a href="https://twitter.com/archi_dao?lang=en" target="_blank" rel="noreferrer" className="item">
    //             <i className="twitter large icon floated right"></i>
    //         </a>
    //         <a href="https://www.instagram.com/archidao.io/" target="_blank" rel="noreferrer" className="item">
    //             <i className="instagram large icon floated right"></i>
    //         </a>
    //         <a href="https://www.linkedin.com/company/archidao-io?trk=similar-pages" rel="noreferrer" target="_blank" className="item">
    //             <i className="linkedin large icon floated right"></i>
    //         </a>   
    // </div>
    )
=======
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
>>>>>>> Stashed changes
}

export default NavBar