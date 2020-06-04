import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const withGuest = (Component) => {
  class withGuest extends React.Component {
    render() {
      const { auth } = this.props;
      console.log(auth.user);
      const isAuth = JSON.parse(localStorage.getItem("isAuth"));
      return isAuth == false ? <Component /> : <Redirect to="/home" />;
    }
  }
  const mapStateToProps = (state) => ({ auth: state.userReducer });
  return connect(mapStateToProps)(withGuest);
};

export default withGuest;
