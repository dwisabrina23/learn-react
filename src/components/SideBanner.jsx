import React from 'react';
import './sideBanner.css';
import logoAlta from '../assets/logo-ALTA-v2@2x.png';

function SideBanner() {
    return (
        <div>
            <div className="side-image col-sm-5 col-md-5 p-0 position-relative">
                    <div className="overlay w-100 h-100"></div>
                    <img
                        id="logo-alta"
                        src={logoAlta}
                        alt="logo alta"
                        className="translate-middle position-absolute"/>
                </div>
        </div>
    );
}

export default SideBanner;