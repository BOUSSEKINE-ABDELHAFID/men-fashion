import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import About from "./About";
import Store from "./Store";
import Modal from "./components/modal/Modal"
import Error404 from "./Error404"
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route path="/store" component={Store} />
        <Route component={Error404} />
      </Switch>
      <Modal/>
    </BrowserRouter>
  );
};

export default Router;
