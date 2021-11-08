import React from "react";
import {NavLink} from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row justify-content-center">
                <h1 className="py-3 text-center" style={{fontFamily:"monospace"}}>404 Page Not Found</h1>
                <img 
                    className="img mb-3 center " 
                    src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/507f015a7efd81cec270faf9c4f1aabd.gif" 
                    alt="not found gif"
                    style={{ 
                        width: "55%",
                        height: "70%"
                    }}
                />
                <NavLink 
                    className="btn btn-primary w-50" 
                    to="/"
                    >GO TO HOME</NavLink>
            </div>
        </div>
    );
}

export default NotFoundPage;