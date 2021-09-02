import React from "react";
import Navbar from "./Navbar";

export default function TermsAndConditions() {
  document.title = "Terms And Conditions";

  return (
    <div>
      <div style={{ marginBottom: "70px" }}>
        <Navbar />
      </div>
      <h1>Terms and Conditions</h1>
    </div>
  );
}
