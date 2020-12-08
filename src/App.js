import React, { Component } from 'react';

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Registro from "./components/Login/Registro/Registro";
import Orders from "./components/Orders/Orders";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/registrar" component={Registro} />
          <Route path="/ordenes" component={Orders} />
          <Route path="*" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
