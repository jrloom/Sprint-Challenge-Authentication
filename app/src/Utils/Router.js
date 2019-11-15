import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import Register from "../Forms/Register";
import Login from "../Forms/Login";
import Jokes from "../Jokes";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/jokes" component={Jokes} />
      </Switch>
    </>
  );
};

export default Router;
