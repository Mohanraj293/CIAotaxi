import "./App.css";
import React from "react";
// import Tarrifs from "./components/Tarrif";
import TermsAndConditions from "./components/TermsAndConditions";
import ContactUs from "./components/ContactUs";
// import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WhatsApp, Phone } from "@mui/icons-material";

function App() {
  const useStyles = makeStyles((theme) => ({
    fabwhatsapp: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      background: "#00a884",
      "&:hover": {
        backgroundColor: "#02cfa2",
      },
    },
    fabphone: {
      position: "fixed",
      bottom: theme.spacing(10),
      right: theme.spacing(2),
      background: "#4B1E8F",
      "&:hover": {
        backgroundColor: "#6c2bcf",
      },
    },
  }));
  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/+919952117115`;
    window.open(whatsappUrl, "_blank");
  };
  const handlePhoneCall = () => {
    const phoneUrl = `tel:+919952117115`;
    window.open(phoneUrl, "_blank");
  };
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home title="Home" />
        {/* <Route path="/tarrifs" element={<Tarrifs title="Tarrifs"/>}></Route> */}
        <TermsAndConditions title="Terms And Conditions" />
        <ContactUs title="contact Us" />
        <Footer />
        {/* <PageNotFound title="Ithu tha thavarana visayam" /> */}
        <Fab
          color="primary"
          aria-label="whatsApp"
          className={classes.fabwhatsapp}
          onClick={handleWhatsApp}
        >
          <WhatsApp />
        </Fab>
        <Fab
          color="primary"
          aria-label="makeCall"
          className={classes.fabphone}
          onClick={handlePhoneCall}
        >
          <Phone />
        </Fab>
      </Router>
    </div>
  );
}

export default App;
