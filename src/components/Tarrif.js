import React from "react";
import { Table } from "react-bootstrap";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Tarrif() {
  document.title = "Tarrifs";

  return (
    <div>
      <div style={{ marginBottom: "70px" }}>
        <Navbar />
      </div>
      <div id="tarrif-plans" className="container" style={{ marginTop: 50 }}>
        <h3 className="text-center mb-4">Tarrif Plans for One way</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Car Type</th>
              <th>Price per K/M</th>
              <th>Driver Charge</th>
              <th>Additional Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Any Sedan vehicle</td>
              <td>Rs.12</td>
              <td>Rs.300</td>
              <td>
                Minimum 130 km Coverage.Toll, State Permit, Hills Charges
                Excluded
              </td>
            </tr>
            <tr>
              <td>Any SUV vehicle</td>
              <td>Rs.15</td>
              <td>Rs.400</td>
              <td>
                Minimum 130 km Coverage.Toll, State Permit, Hills Charges
                Excluded
              </td>
            </tr>
          </tbody>
        </Table>
        <h3 className="text-center mb-4">Tarrif Plans for Round Trip</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Car Type</th>
              <th>Price per K/M</th>
              <th>Driver Charge</th>
              <th>Additional Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Any Sedan vehicle</td>
              <td>Rs.10</td>
              <td>Rs.300</td>
              <td>
                Minimum 250 km Coverage.Toll, State Permit, Hills Charges
                Excluded
              </td>
            </tr>
            <tr>
              <td>Any SUV vehicle</td>
              <td>Rs.13</td>
              <td>Rs.400</td>
              <td>
                Minimum 250 km Coverage.Toll, State Permit, Hills Charges
                Excluded
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
