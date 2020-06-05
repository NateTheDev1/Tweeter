import React from "react";
import withAuthorization from "../helpers/withAuthorization";
import db from "../db/db";
import { connect } from "react-redux";
import { SET_USER_PROFILE } from "../reducers/types";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  profileListener() {
    setTimeout(() => {
      db.collection("profiles")
        .doc(this.props.user.uid)
        .get()
        .then((snapshot) => {
          console.log(snapshot.data());
          this.props.dispatch({
            type: SET_USER_PROFILE,
            payload: { ...snapshot.data() },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  }

  componentDidMount() {
    this.profileListener();
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-left"></div>
        <div className="home-post"></div>
        <div className="home-left"></div>
      </div>
    );
  }
}

export default withAuthorization(
  connect(
    (state) => ({ user: state.userReducer.user }),
    (dispatch) => ({ dispatch })
  )(Home)
);
