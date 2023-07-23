import React, { useState } from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/images/Logo.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const navBarStyleContainer = {
    backgroundColor: "transparent"
  };

  return (
    <div>
      <MDBNavbar expand="lg" fixed="top" light className="nav">
        <MDBContainer fluid>
          <NavLink to="/" style={navBarStyleContainer}>
            <img src={logo} alt="..." height="50" />
          </NavLink>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="justify-content-center text-center mb-2 mb-lg-0">
              <MDBNavbarItem>
                <NavLink className="navlink" aria-current="page" to="/">
                  Home
                </NavLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <NavLink className="navlink" to="/tarrifs">
                  Tarrifs
                </NavLink>
              </MDBNavbarItem> */}
              <MDBNavbarItem>
                <NavLink className="navlink" to="/termsAndConditions">
                  Terms and Conditions
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="navlink" to="/contactUs">
                  Contact Us
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
