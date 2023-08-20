import React from "react";
import "../assets/css/Terms.css";
export default function TermsAndConditions() {
  document.title = "Terms And Conditions";

  return (
    <section id="terms">
      <div className="body">
        <h2 style={{ textAlign: "center" }}>Terms and Conditions</h2>
          <ul className="terms">
            <li>Toll Fees, Inter-State Permit charges (if any) are extra.</li>
            <li>
              One way Drop Charges from Pickup point to Drop point (Oneway
              Charges Only).
            </li>
            <li>Round Trip - Night Halt Charges - Nil</li>
            <li>
              Hill Station Charges - Rs. 300(For Sedan), Rs. 400(For SUV).
            </li>
            <li>
              We do not switch ON A/C while traveling upwards in hill station.
              Also while parked or stopped.
            </li>
            <li>
              1 day means 1 Calender day (from midnight 12 to Next Midnight 12).
            </li>
            <li>
              Total Number of Kilometers will be Calculated From Pick point to
              Drop Point(Places where we start).
            </li>
          </ul>
        </div>
    </section>
  );
}
