import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Login";
import { logout, onAuthStateChanged } from "./actions/actionsIndex";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import { SET_AUTH_USER } from "./reducers/types";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    this.props.logout();
  };

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.props.dispatch({ type: SET_AUTH_USER, payload: user });
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <div className="app-root">
        <Router>
          <Switch>
            <Route exact path="/">
              <button onClick={this.handleLogout}>Logout</button>
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(() => ({}), { logout })(App);
