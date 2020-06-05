import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, CssBaseline, Toolbar, Fab } from "@material-ui/core";
import genericAvatar from "../resources/siloAvatar.jpg";
import HelpIcon from "@material-ui/icons/Help";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { connect } from "react-redux";
import { logout } from "../actions/actionsIndex";

const Sidebar = (props) => {
  const profile = props.profile;

  const handleLogout = () => {
    props.dispatch(props.logout());
  };

  return (
    <div className="navbar-top">
      <div className="left">
        <Avatar alt={profile.fullName} src={profile.avatar} />
        <h1>Home</h1>
      </div>
      <div className="right">
        <Fab
          style={{ background: "white", color: "#4693d9" }}
          size="medium"
          variant="extended"
        >
          <HelpIcon />
          Info
        </Fab>
        <Fab
          onClick={handleLogout}
          style={{ background: "white", color: "#4693d9" }}
          size="medium"
          variant="extended"
        >
          <ExitToAppIcon />
          Logout
        </Fab>
      </div>
    </div>
  );
};

export default connect(
  () => ({}),
  (dispatch) => ({ dispatch: dispatch, logout })
)(Sidebar);
