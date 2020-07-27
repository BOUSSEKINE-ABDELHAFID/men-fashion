import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import About from "./About";
import Store from "./Store";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route path="/store" component={Store} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
