import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';


function Navbar() {
    let history = useHistory();
    const handleClick = () =>{
        history.push("/");
        history.push("/about-app");
        history.push("/about-author");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" onClick={handleClick} to="/" aria-current="page">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={handleClick} to="/about-app">ABOUT APP</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={handleClick} to="/about-author">ABOUT AUTHOR</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-white" id="sidebar-wrapper" role="navigation">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <div className="sidebar-header">
                            <div className="navbar-brand">
                                <a href="#index">TO DO APP</a></div>
                            </div>
                            <li className="nav-item">
                                <NavLink className="nav-link active" onClick={handleClick} to="/" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>                                
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" role="menu">
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link" onClick={handleClick} to="/about-app">{app}</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link" onClick={handleClick} to="/about-author">{author}</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div>
    );
}

export default Navbar;