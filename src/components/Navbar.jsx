import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import logoAlta from '../assets/logo-ALTA@2x.png';
import './navbar.css';

export default function Navbar() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
    history.push("/contact-us");
    history.push("/review");
    history.push("/news");
    history.push("/about");
  };
  return (
    <div>
      <header className="bg-white mb-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 shadow">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={logoAlta}
                alt="company logo"
                className="w-25"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <NavLink className="nav-link" onClick={handleClick} to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" onClick={handleClick} to="/about">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" onClick={handleClick} to="/news">
                    NEWS
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" onClick={handleClick} to="/contact">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
