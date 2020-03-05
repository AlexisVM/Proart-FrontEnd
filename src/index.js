import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "../src/_components";

import { store } from "./helpers";
import { Provider } from "react-redux";
// core components
import Admin from "layouts/Admin.js";
import Login from "layouts/Login.js";
import Signup from "layouts/Signup.js";
import { history } from "helpers/history.js";
import "assets/css/material-dashboard-react.css?v=1.8.0";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/inicio" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
