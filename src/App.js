import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExchangeValues from "./containers/exchangeValues";
import Home from "./containers/home";
import Header from "./components/header";
import BreadCrumbs from "./components/breadCrumbs";

function App() {
  return (
    <Router>
      <Header />
      <BreadCrumbs />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/exchange-values" component={ExchangeValues} />
      </Switch>
    </Router>
  );
}

export default App;
