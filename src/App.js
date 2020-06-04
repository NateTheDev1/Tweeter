import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Register from "./pages/Register";
import { logout, onAuthStateChanged } from "./actions/actionsIndex";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import { SET_AUTH_USER } from "./reducers/types";
import Login from "./pages/Login";
import Home from "./pages/Home";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    this.props.dispatch(this.props.logout());
  };

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        localStorage.setItem("isAuth", true);
        this.props.dispatch({ type: SET_AUTH_USER, payload: user });
      } else {
        localStorage.setItem("isAuth", false);
      }
    });
  }

  componentDidMount() {
    this.authListener();
    console.log(this.props.user);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="app-root">
        <Router>
          {/* {this.props.user === null && <Redirect to="/" />} */}
          <Switch>
            <Route exact path="/">
              <button onClick={this.handleLogout}>Logout</button>
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.userReducer.user,
  }),
  (dispatch) => ({ logout, dispatch })
)(App);
