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
import NewUserModal from "./components/NewUserModal";

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
        localStorage.setItem("uid", user.uid);
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

  componentWillUnmount() {
    localStorage.clear("firstTime");
    localStorage.clear("uid");
  }

  render() {
    return (
      <div className="app-root">
        <Router>
          {/* {this.props.user === null && <Redirect to="/" />} */}
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home">
              <button onClick={this.handleLogout}>Logout</button>
              <Home />
            </Route>
            <Route exact path="/setup">
              {JSON.parse(localStorage.getItem("firstTime")) === true ? (
                <NewUserModal />
              ) : (
                <Redirect to="/home" />
              )}
              <NewUserModal />
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
