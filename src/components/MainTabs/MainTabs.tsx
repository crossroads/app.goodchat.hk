import React from "react";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";
import { Route, Switch } from "react-router";

const MainTabs = () => (
  <Switch>
    <Route exact path="/offers">
      <Offers />
    </Route>
    <Route exact path="/home">
      <Home />
    </Route>
  </Switch>
);

export default MainTabs;
