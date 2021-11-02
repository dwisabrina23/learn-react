import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <div className="col-md-5" style={{marginLeft: "150px", marginTop: "39px"}}>
          <h2 className="mb-3">Contact Us</h2>
          <form className="form needs-validation" action="review.html" novalidate>
              <div className="mb-3 has-validation">
                <label for="fullname" className="form-label">Full Name<sup id="bintang">*</sup></label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Your full name here.."
                  required
                />
                <div className="invalid-feedback">Full name cannot be empty</div>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Email Address<sup id="bintang">*</sup></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@domain.com"
                  required
                />
              </div>
              <div className="invalid-feedback">Email Address cannot be empty</div>
              <div className="mb-3">
                <label for="phone" className="form-label">Phone Number<sup id="bintang">*</sup></label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="085737xxxxxx"
                  required
                />
                <div className="invalid-feedback">Phone Number cannot be empty</div>
              </div>
              <div className="mb-3">
                <label for="nationality" className="form-label">Nationality</label>
                <select className="form-select" aria-label="Default select example" id="nationality">
                  <option selected>Selected</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  placeholder="Leave your message here"
                  id="message"
                ></textarea>
              </div>
            
            <button 
              type="submit" 
              onclick="passValues()" 
              className="submit btn btn-primary rounded-pill mb-3">
              Submit
            </button>
          </form>
        </div>
            </div>
        );
    }
}

export default Form;