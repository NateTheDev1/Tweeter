import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const withAuthorization = (Component) => {
  class withAuthorization extends React.Component {
    render() {
      const { auth } = this.props;
      console.log(auth.user);
      const isAuth = JSON.parse(localStorage.getItem("isAuth"));
      return isAuth == true ? <Component /> : <Redirect to="/login" />;
    }
  }
  const mapStateToProps = (state) => ({ auth: state.userReducer });
  return connect(mapStateToProps)(withAuthorization);
};

export default withAuthorization;
