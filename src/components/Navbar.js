import React, { useState } from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/images/Logo.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const navBarStyleContainer = {
    backgroundColor: "transparent",
  };

  const closeNavbar = () => {
    setShowBasic(false);
  };

  //thats why put it in another funtion to prevent shrinking.
  const handleNavLinkClick = () => {
    closeNavbar();
  };
  return (
    <div style={{ marginBottom: "70px" }}>
      <MDBNavbar expand="lg" fixed="top" light className="nav">
        <MDBContainer fluid>
          <Link
            onClick={handleNavLinkClick}
            to="#"
            style={navBarStyleContainer}
          >
            <img src={logo} alt="..." height="50" />
          </Link>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav
              className="justify-content-center text-center mb-2 mb-lg-0"
              onClick={handleNavLinkClick}
            >
              <Link className="navlink" aria-current="page" to="#" smooth>
                Home
              </Link>

              <Link className="navlink" to="#terms" smooth>
                Terms and Conditions
              </Link>

              <Link className="navlink" to="#contact" smooth>
                Contact Us
              </Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
