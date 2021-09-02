import "./App.css";
import React from "react";
import Tarrifs from "./components/Tarrif";
import TermsAndConditions from "./components/TermsAndConditions";
import ContactUs from "./components/ContactUs";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/tarrifs" component={Tarrifs}></Route>
          <Route
            exact
            path="/termsAndConditions"
            component={TermsAndConditions}
          ></Route>
          <Route exact path="/contactUs" component={ContactUs}></Route>
          <Route path="*" component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
