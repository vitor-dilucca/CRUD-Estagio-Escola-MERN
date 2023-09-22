import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Cadastro from "./Components/Cadastro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" exact component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
