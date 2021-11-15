import React from "react";
import roundPhoto from "../../assets/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import './home.css';
import {useHistory} from "react-router-dom"
export default function Home() {
  const history = useHistory();
  const handleClick = () =>{
    history.push("/contact");
  }
  return (
    <div>
      <div className="profile h-100">
        <section className="bio">
          <div className="container m-auto">
            <div className="row p-4 "></div>
            <div className="row py-3 row-cols-sm1 row-cols-md-2 d-flex flex-wrap justify-content-around">
              <div className="col-8 col-sm-9 col-md-5 col-lg-5 col-xl-5 m-auto">
                <img
                  className="rounded-circle"
                  src={roundPhoto}
                  alt=""
                />
              </div>
              <div className="col-10 col-sm-8 col-lg-7 col-xl-6" id="bio">
                <h3>Hi, My name is</h3>
                <h1>Anne Sullivan</h1>
                <p className="short-text">I build things for the web</p>
                <button type="button" className="btn btn-primary rounded-pill" onClick={handleClick}>
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
