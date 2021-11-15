import React from "react";
import './review.css';

function ReviewPage(props) {
  return (
    <div>
      <div className="card col-md-8 justify-content-center">
        <table className="table table-borderless col-md-9">
          <tr className="mb-3">
            <td className="label">Full Name</td>
            <td>:</td>
            <td id="fullname"></td>
          </tr>
          <tr>
            <td className="label">Email Adress</td>
            <td>:</td>
            <td id="email"></td>
          </tr>
          <tr>
            <td className="label">Phone Number</td>
            <td>:</td>
            <td id="phone"></td>
          </tr>
          <tr>
            <td className="label">Nationality</td>
            <td>:</td>
            <td id="nationality"></td>
          </tr>
          <tr id="invisible">
            <td>&nbsp;</td>
          </tr>
          <tr id="invisible">
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td colspan="3" id="message"></td>
          </tr>
        </table>

        <div
          className="col-md-5 line justify-content-center"
          style={{"margin": "auto"}}
        ></div>
        <div className="col-md-12 mt-4">
          <div>
            <p className="fs-4 my-0">Thanks for contacting us!</p>
            <p className="fs-4">We will be in touch with you shortly.</p>
          </div>
          <form action="index.html">
            <button
              type="submit"
              className="btn rounded-pill px-4 py-2 font-weight-normal"
            >
              Home
            </button>
          </form>
        </div>
      </div>
      <footer class="container-fluid" style={{"backgroundColor": "#EDF6FF", "height": "190px",  "width": "100%"}}>
        <div>
            <img src="assets/img/img-dot.png" alt="" style={{"paddingLeft": "160px", "paddingTop": "30px"}}/>
        </div>
    </footer>
    </div>
  );
}

export default ReviewPage;
