import React, { Component } from 'react';

import Login from "./components/Login/Login";
import  Home  from "./components/Home/Home";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
    this.state = { isLogged: false }

  }


  render() {
    const isLoggin = this.state.isLogged
    return (
      <BrowserRouter >
        <Switch>         
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Login}  />          
          <Route path="*" component={Login} />          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
