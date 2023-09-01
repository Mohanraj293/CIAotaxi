import React from "react";

export default function ContactUs() {
  document.title = "Contact Us";
  return (
    <section id="contact">
      <h2 className="text-center">Contact us</h2>
      <div className="container mt-4" style={{ maxWidth: "1000px" }}>
        <div className="row" style={{padding:"20px"}}>
          <div className="col">
            <h5>
              <i className="fa fa-location-arrow" aria-hidden="true"></i> Find
              Us Here
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
          <div className="col">
            <div className="d-flex justify-content-center">
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.72537148913!2d80.20556728198787!3d12.75949274508031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52512096aa8145%3A0xc4c50372cc3c05e!2sTower%2015!5e0!3m2!1sen!2sin!4v1690120077544!5m2!1sen!2sin"
                width="500"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
