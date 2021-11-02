import React, { Component } from 'react';

class SideBanner extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-5 col-md-5 p-0 position-relative" id="img-banner">
                    <img
                        id="logo-alta"
                        src="assets/img/logo-ALTA-v2@2x.png"
                        style={{width: "275px"}}
                        alt=""
                        className="center position-absolute"/>
                </div>
            </div>
        );
    }
}

export default SideBanner;