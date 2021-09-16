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
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false); 
  return (
    <div>
      <MDBNavbar expand="lg" fixed="top" light className="nav">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <img src={logo} alt="..." height="50" />
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
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active href="/tarrifs">
                  Tarrifs
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active href="/termsAndConditions">
                  Terms and Conditions
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active href="/contactUs">
                  Contact Us
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav className="d-flex input-group w-auto text-center">
              <MDBNavbarItem>
                <MDBNavbarLink active href="/contactUs">
                  <MDBIcon fas icon="phone-square" size="2x" />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav className="d-flex input-group w-auto text-center">
              <MDBNavbarItem>
                <MDBNavbarLink active href="/contactUs">
                  <MDBIcon fab icon="whatsapp" size="2x" />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
