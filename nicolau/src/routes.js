import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Adote from "./pages/Adote";
import Formulario from "./pages/Formulario"
import Administrador from "./pages/Administrador"

function Routes(){
    return(
        <BrowserRouter>
        <Switch> 
          <Route exact path= "/" component={Home} />
          <Route path="/Adote" component={Adote} />
          <Route path="/Formulario" component={Formulario} />
          <Route path="/Administrador" component={Administrador} />
        </Switch>
        </BrowserRouter>
    )
}



export default Routes;