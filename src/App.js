import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
