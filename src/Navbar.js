import React from "react";

export default function navbar(){
    return(
        <div>
            <header className="bg-white mb-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 shadow">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img
                        src="assets/img/logo-ALTA@2x.png"
                        alt="company logo"
                        className="w-25"
                /></a>
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
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" href="index.html">HOME</a>
                        <a className="nav-link" href="#">ABOUT</a>
                        <a className="nav-link" href="#">EXPERIENCE</a>
                        <a className="nav-link" href="contact.html">CONTACT</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
        </div>
    );
}