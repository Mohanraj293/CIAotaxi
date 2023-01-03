import React from "react";

import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div>
      <MDBFooter
        fixed-bottom="true"
        background-color="light"
        className="text-center"
      >
        <div className="p-3" style={{position: 'fixed', bottom: 0, width: '100%', backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="/#">
            CIAo Taxi Service
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
