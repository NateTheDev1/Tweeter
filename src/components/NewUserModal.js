import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
  Fab,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { connect } from "react-redux";
import { createNewProfile } from "../actions/actionsIndex";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    background: "white",
    fontFamily: 'font-family: "Mukta", sans-serif;',
    height: "65vh",
  },
});

const NewUserModal = (props) => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    username: "",
    avatarURL: "",
    bio: "",
  });

  const history = useHistory();

  const handleMockSubmit = (e) => {
    e.preventDefault();
    props.createNewProfile(formValues, props.user.uid).then((_) => {
      localStorage.clear("firstTime");
      history.push("/home");
    });
  };

  const classes = useStyles();

  return (
    <div className="new-user-modal-container">
      <Dialog
        PaperProps={{
          classes: {
            root: classes.paper,
          },
        }}
        maxWidth="sm"
        fullWidth={true}
        className={classes.dialog}
        open={true}
      >
        <DialogTitle style={{ background: "#4693d9" }}>
          <span
            style={{
              color: "white",
              fontWeight: "400",
              fontSize: "2rem",
              textTransform: "uppercase",
              letterSpacing: 15,
            }}
          >
            Create Profile
          </span>
          <p style={{ color: "lightgray" }}>Create your public persona.</p>
        </DialogTitle>
        <DialogContent
          style={{
            marginTop: "3%",
            padding: "5%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <form onSubmit={handleMockSubmit}>
            <TextField
              fullWidth
              variant="filled"
              placeholder="John Doe"
              InputLabelProps={{ shrink: true }}
              label="Full Name"
              style={{ marginBottom: "5%" }}
              name="fullName"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              required
              inputProps={{ maxLength: 20, minLength: 5 }}
              value={formValues.fullName}
            />

            <TextField
              InputLabelProps={{ shrink: true }}
              fullWidth
              variant="filled"
              placeholder="user1234"
              label="Username"
              style={{ marginBottom: "5%" }}
              name="username"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              value={formValues.username}
              required
              inputProps={{ maxLength: 12, minLength: 5 }}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              fullWidth
              type="url"
              variant="filled"
              placeholder="https://website.com/profileImage.png"
              label="Avatar URL"
              style={{ marginBottom: "5%" }}
              name="avatarURL"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              value={formValues.avatarURL}
            />
            <TextField
              required
              style={{ marginBottom: "5%" }}
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
              placeholder="I'm such a unique human being!"
              variant="filled"
              value={formValues.bio}
              fullWidth
              name="bio"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <Fab
              size="large"
              variant="extended"
              type="submit"
              style={{ background: "#4693d9", color: "white" }}
            >
              <CheckIcon /> <p>Im Ready To Go!</p>
            </Fab>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default connect((state) => ({ user: state.userReducer.user }), {
  createNewProfile,
})(NewUserModal);
