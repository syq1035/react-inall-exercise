import React, { Component } from "react";
import "./app.less";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Header from "../components/Header";
import Calculator from "./Calculator";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/timer" component={Timer} />
            <Route exact path="/" component={Home} />
            <Redirect from="/*" to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
