import React from "react";
import {NavLink} from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-content-center">
                    <h1 className="py-3 text-center" style={{fontFamily:"monospace"}}>404 Page Not Found</h1>
                    <img className="img-fluid mb-3 center display-6" src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/507f015a7efd81cec270faf9c4f1aabd.gif" alt="" />
                    <NavLink className="btn btn-primary w-50 " to="/">Go TO HOME</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;