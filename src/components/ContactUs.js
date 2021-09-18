import React from "react";

import Navbar from "./Navbar";

export default function ContactUs() {
  document.title = "Contact Us";
  return (
    <div>
      <div style={{ marginBottom: "70px" }}>
        <Navbar />
      </div>
      <h1 class="text-center">CONTACT US</h1>
      <div class="container mt-4">
        <div class="row">
          <div class="col mt-4">
            <h5>
              <i class="fa fa-location-arrow" aria-hidden="true"></i> ADDRESS
              FOR CORRESPONDENCE:
            </h5>
            <div class="container">
              <h6> NO.E/56, Watertank road</h6>
              <h6> Opp. BSNL Tele. Exchange </h6>
              <h6> Kesari Street, Nagercoil, Kanyakumari District</h6>
              <h6> TamilNadu, India – 629001</h6>
            </div>
            <br />
            <h5>
              <i class="fa fa-envelope" aria-hidden="true"></i> EMAIL ID
            </h5>
            <div class="container">
              <h6>Forum : capeforumyoutrust@gmail.com </h6>
              <h6>Trust : ofbyandforyou@gmail.com</h6>
            </div>
            <br />
            <h5>
              <i class="fa fa-phone" aria-hidden="true"></i> CONTACT:
            </h5>
            <div class="container">
              <h6>
                Mobile :{" "}
                <a
                  style={{ color: "#4f4f4f", textDecoration: "underline" }}
                  href="tel:9943521020"
                >
                  9943521020
                </a>{" "}
                <br />
              </h6>
              <h6>
                WhatsApp :
                <a
                  style={{ color: "#4f4f4f", textDecoration: "underline" }}
                  href="https://wa.me/+919943521020"
                >
                  {" "}
                  95852 12775
                </a>
              </h6>
            </div>
          </div>
          <div class="col">
            <div class="d-flex justify-content-center mb-4 mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2157156095545!2d77.42201881410064!3d8.18101160394669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0df586f9397%3A0x5f1c37da9aa6f9d0!2sTelecome%20Office!5e0!3m2!1sen!2sin!4v1597918697408!5m2!1sen!2sin"
                width="600"
                height="450"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
