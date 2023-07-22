import React, { useState } from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/images/Logo.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false); 
  return (
    <div>
      <MDBNavbar expand="lg" fixed="top" light className="nav">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <NavLink to="/">
              <img src={logo} alt="..." height="50" />
            </NavLink>
          </MDBNavbarBrand>

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
                <NavLink className="navlink" to="/">
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="navlink" to="/tarrifs">
                  Tarrifs
                </NavLink>
              </MDBNavbarItem>
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
            <MDBNavbarNav className="d-flex input-group w-auto text-center">
              <MDBNavbarItem>
                <NavLink active to="tel:9943521020">
                  <MDBIcon fas icon="phone-square" size="2x" />
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav className="d-flex input-group w-auto text-center">
              <MDBNavbarItem>
                <NavLink active target="_blank"
                href="https://wa.me/+919943521020">
                  <MDBIcon fab icon="whatsapp" size="2x" />
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
