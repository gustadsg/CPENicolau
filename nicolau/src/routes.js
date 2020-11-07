import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StoreProvider from './Components/Store/Provider';
import RoutesPrivate from './Components/Routes/Private/Private';
import Home from "./pages/Home";
import Adote from "./pages/Adote";
import Administrador from "./pages/Administrador";
import Login from "./pages/Login/Login.jsx";
import UserCrud from './pages/Administrador/UserCrud';

function Routes() {
  return (
    <BrowserRouter>
      <StoreProvider>        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Adote" component={Adote} />
          <Route path="/Formulario" component={UserCrud} />
          <RoutesPrivate path="/Administrador" component={Administrador} />
          <Route path="/Login" component={Login} />
          {/* <Route path='/users' component={UserCrud}/> */}
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default Routes;
