import React from "react";

export default function ContactUs() {
  document.title = "Contact Us";
  return (
    <section id="contact">
      <h2 className="text-center">Contact us</h2>
      <div className="container mt-4" style={{ maxWidth: "1000px" }}>
        <div className="col">
          <h5>
            <i className="fa fa-location-arrow" aria-hidden="true"></i> Find Us
            Here
          </h5>
          <div className="container">
            <h6> Vijay Shanthi Lotus Pond,</h6>
            <h6>IT Highway, B Village, Chennai,</h6>
            <h6> Thaiyur, Kelambakkam, Tamil Nadu 603103</h6>
            <h6> TamilNadu, India</h6>
          </div>
          <br />
          <h5>
            <i className="fa fa-envelope" aria-hidden="true"></i> EMAIL ID
          </h5>
          <div className="container">
            <h6>Mail Us: ciaocabservice@gmail.com</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
