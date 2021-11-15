import React from 'react';
import './sideBanner.css';
import logoAlta from '../assets/logo-ALTA-v2@2x.png';

function SideBanner() {
    return (
        <div>
            <div className="side-images col-sm-5 col-md-5 p-0 position-relative">
                    <div className="overlay w-100 h-100"></div>
                    <img
                        id="logo-alta"
                        src={logoAlta}
                        alt="logo alta"
                        className=" opacity-50 position-absolute top-50 start-50 translate-middle"/>
                </div>
        </div>
    );
}

export default SideBanner;