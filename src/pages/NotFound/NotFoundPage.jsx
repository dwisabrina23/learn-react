import React from "react";
import { NavLink } from "react-router-dom";
function NotFoundPage() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-12 mb-5">
          <div className="py-3 text-center" style={{ fontFamily: "monospace", fontSize:"32px" }}>
            404 Page Not Found
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <img
            className="img mb-3"
            src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/507f015a7efd81cec270faf9c4f1aabd.gif"
            alt="not found gif"
            style={{
              width: "55%",
              height: "70%",
            }}
          />
        </div>
        <div className="col-md-12 center">
            <NavLink className="btn btn-primary w-50" to="/" style={{fontWeight:600,}}>
            GO TO HOME
        </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
