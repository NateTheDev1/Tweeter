import React from "react";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const Login = () => {
  return (
    <Grid container direction="row" justify="center">
      <Grid item className="landing-left">
        <div className="text">
          <div className="icon-with-text">
            <SearchIcon className="icon" />
            <p>Follow Your Interests.</p>
          </div>
          <div className="icon-with-text">
            <PeopleIcon className="icon" />
            <p>Hear what people are talking about.</p>
          </div>
          <div className="icon-with-text">
            <ChatBubbleOutlineIcon className="icon" />
            <p>Join the conversation.</p>
          </div>
        </div>
      </Grid>
      <Grid item className="landing-right">
        <div className="top">
          <i class="fas fa-crow"></i>
          <h1>See what's happening in the world right now</h1>
          <h3>Join Tweeter today.</h3>
        </div>
        <form className="register">
          <input
            type="text"
            placeholder="Email"
            style={{ marginBottom: "5%" }}
          />
          <input type="password" placeholder="Password" />
          <div className="bottom">
            <button>Get Started</button>
            <div className="bottom-p">
              <p style={{ marginRight: "3%" }}>Have an account?</p>
              <a href="#">Log in</a>
            </div>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
