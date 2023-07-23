import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContactUs() {
  document.title = "Contact Us";
  return (
    <div>
      <div style={{ marginBottom: "70px" }}>
        <Navbar />
      </div>
      <h1 className="text-center">CONTACT US</h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col mt-4">
            <h5>
              <i className="fa fa-location-arrow" aria-hidden="true"></i>{" "}
              ADDRESS FOR CORRESPONDENCE:
            </h5>
            <div className="container">
              <h6> NO.E/56, Watertank road</h6>
              <h6> Opp. BSNL Tele. Exchange </h6>
              <h6> Kesari Street, Nagercoil, Kanyakumari District</h6>
              <h6> TamilNadu, India – 629001</h6>
            </div>
            <br />
            <h5>
              <i className="fa fa-envelope" aria-hidden="true"></i> EMAIL ID
            </h5>
            <div className="container">
              <h6>Forum : capeforumyoutrust@gmail.com </h6>
              <h6>Trust : ofbyandforyou@gmail.com</h6>
            </div>
            <br />
            <h5>
              <i className="fa fa-phone" aria-hidden="true"></i> CONTACT:
            </h5>
            <div className="container">
              <h6>
                Mobile :
                <a
                  style={{ color: "#4f4f4f", textDecoration: "underline" }}
                  href="tel:9943521020"
                >
                  9943521020
                </a>
                <br />
              </h6>
              <h6>
                WhatsApp :
                <a
                  style={{ color: "#4f4f4f", textDecoration: "underline" }}
                  href="https://wa.me/+919943521020"
                  target="_blank"
                  rel="noreferrer"
                >
                  95852 12775
                </a>
              </h6>
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center mb-4 mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.72537148913!2d80.20556728198787!3d12.75949274508031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52512096aa8145%3A0xc4c50372cc3c05e!2sTower%2015!5e0!3m2!1sen!2sin!4v1690120077544!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
