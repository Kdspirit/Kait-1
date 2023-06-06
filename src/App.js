import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import GlobalContextProvider from "./contexts/GlobalContext";
import DemoScreen from "./Components/DemoScreen";
import Careers from "./Components/Careers";

const App = () => {
  return (
    <div>
      <GlobalContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/demo-screen" component={DemoScreen} />
            <Route path="/early-access" component={DemoScreen} />
            <Route path="/careers" component={Careers} />
          </Switch>
        </Router>
      </GlobalContextProvider>
    </div>
  );
};

export default App;
