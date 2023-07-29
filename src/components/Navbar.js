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
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const navBarStyleContainer = {
    backgroundColor: "transparent",
  };

  return (
    <div style={{ marginBottom: "70px" }}>
      <MDBNavbar expand="lg" fixed="top" light className="nav">
        <MDBContainer fluid>
          <Link to="/" style={navBarStyleContainer}>
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
            <MDBNavbarNav className="justify-content-center text-center mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link className="navlink" aria-current="page" to="#" smooth>
                  Home
                </Link>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <NavLink className="navlink" to="/tarrifs">
                  Tarrifs
                </NavLink>
              </MDBNavbarItem> */}
              <MDBNavbarItem>
                <Link className="navlink" to="#terms" smooth>
                  Terms and Conditions
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="navlink" to="#contact" smooth>
                  Contact Us
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
