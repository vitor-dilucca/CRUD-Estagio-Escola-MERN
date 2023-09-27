import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Cadastro from "./Components/Cadastro";
import Editar from "./Components/Editar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/editar/:disciplineId" exact component={Editar} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
