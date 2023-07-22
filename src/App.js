import "./App.css";
import React from "react";
import Tarrifs from "./components/Tarrif";
import TermsAndConditions from "./components/TermsAndConditions";
import ContactUs from "./components/ContactUs";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<Home title="Home"/>}></Route>
            <Route path="/tarrifs" element={<Tarrifs title="Tarrifs"/>}></Route>
            <Route path="/termsAndConditions" element={<TermsAndConditions title="Terms And Conditions"/>}></Route>
            <Route path="/contactUs" element={<ContactUs title="contact Us"/>}></Route>
          </Route>
          <Route exact path="*" element={<PageNotFound title="Ithu tha thavarana visayam"/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
