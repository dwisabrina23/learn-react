import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './navbar.css';

function Navbar() {
    let history = useHistory();
    const handleClick = () =>{
        history.push("/");
        history.push("/about-app");
        history.push("/about-author");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
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
        </div>
    );
}

export default Navbar;