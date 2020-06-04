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

const useStyles = makeStyles({
  paper: {
    background: "white",
    fontFamily: 'font-family: "Mukta", sans-serif;',
    height: "65vh",
  },
});

const NewUserModal = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    username: "",
    avatarURL: "",
  });

  const handleMockSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
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
          <h1
            style={{
              color: "white",
              fontWeight: "400",
              fontSize: "2rem",
              textTransform: "uppercase",
              letterSpacing: 15,
            }}
          >
            Create Profile
          </h1>
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
              onChange={(e) => setFormValues(e.target.value)}
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
              onChange={(e) => setFormValues(e.target.value)}
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
              onChange={(e) => setFormValues(e.target.value)}
              value={formValues.avatarURL}
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

export default NewUserModal;
