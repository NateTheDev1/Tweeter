// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { login } from "../actions/actionsIndex";

// const Login = (props) => {
//   const [formState, setFormState] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props
//       .login(formState)
//       .then((_) => {
//         console.log("Logged In");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={formState.email}
//         onChange={(e) => setFormState({ ...formState, email: e.target.value })}
//       />
//       <input
//         type="password"
//         value={formState.password}
//         onChange={(e) =>
//           setFormState({ ...formState, password: e.target.value })
//         }
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default connect(() => ({}), { login })(Login);
import React from "react";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../actions/actionsIndex";

const Register = (props) => {
  const { register, handleSubmit, errors, getValues } = useForm();

  const submitUser = (e) => {
    e.preventDefault();
    const credentials = {
      email: getValues("email"),
      password: getValues("password"),
    };

    props.login(credentials).then((res) => console.log(res));
  };

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
          <i className="fas fa-crow"></i>
          <h1>See what's happening in the world right now</h1>
          <h3>Login Now.</h3>
        </div>
        <form className="register" onSubmit={submitUser}>
          <input
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            name="email"
            type="text"
            placeholder="Email"
            style={{ marginBottom: "5%" }}
          />
          {errors.email && (
            <div>
              ({errors.email.type === "required" && <p>Email is required</p>}(
              {errors.email.type === "pattern" && <p>Invalid Email</p>})
            </div>
          )}
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.password && (
            <div>
              (
              {errors.password.type === "minLength" && (
                <p>Password must be 6 characters</p>
              )}
              ({errors.password.type === "required" && <p>Password Required</p>}
              )
            </div>
          )}

          <div className="bottom">
            <button type="submit">Login</button>
            <div className="bottom-p">
              <p style={{ marginRight: "3%" }}>Don't Have an account?</p>
              <Link to="/">Sign Up</Link>
            </div>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { login })(Register);
