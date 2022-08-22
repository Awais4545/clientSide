import React from 'react'
import contact from "../../assets/contact.png"
export default function Contact() {
  return (
    <div id="Contact">
      <div style={{ backgroundColor: "#F7F8FA" }}   >
        <div className="container">
          <div className="row mt-3">
            <div className="col-sm-12 col-md-6 col-lg-6  mt-5">
              <h5>Do you have a question<br />
                or want to become a seller?</h5>
              <p>Fill this form and our manager will contact you next 48 hours.</p>
              <div className="row g-2">
                <div className="col-md">
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                </div>
                <div className="col-md">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your e-mail" />
                </div>
              </div>
              <div class="mt-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">Your Message</textarea>
              </div>

            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-5 ">
              <img src={contact} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
