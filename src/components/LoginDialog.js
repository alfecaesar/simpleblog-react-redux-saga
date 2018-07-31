import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


export default class LoginDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      submitted: false,
      errors: {},
      credentials: {
          username: "alfecaesar",
          password: "password"
        },
      displayBoxError: false
    };
  }

  state = {
    open: false,
    snackbarOpen: false
  };

  handleSnackBarClick = () => {
    this.setState({ snackbarOpen: true });
  };

  handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ snackbarOpen: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //username
    if (fields["username"] !== this.state.credentials.username) {
      formIsValid = false;
      errors["username"] = "Invalid Username";
    }

    //password
    if (fields["password"] !== this.state.credentials.password) {
      formIsValid = false;
      errors["password"] = "Invalid Password";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  loginSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      //alert("Form submitted");
      this.setState({
        displayBoxError: false
      });

      this.handleClose();
        
    } else {
      //alert("Form has errors.");
      this.setState({
        displayBoxError: true
      });

      this.handleSnackBarClick();
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {

    return (
      <div>
        <Button onClick={this.handleClickOpen} color="inherit">
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login {this.props.isloggedin} </DialogTitle>
          <form>
            <DialogContent>
              <DialogContentText>
                To login to this website, please enter your credentials below.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Email Address"
                type="email"
                fullWidth
                ref="username"
                onChange={this.handleChange.bind(this, "username")}
                value={this.state.fields["username"]}
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                name="password"
                ref="password"
                onChange={this.handleChange.bind(this, "password")}
                value={this.state.fields["password"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={this.loginSubmit.bind(this)}
                color="secondary"
                variant="contained"
              >
                Login
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleSnackBarClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Invalid Email Address or Password. Please try again.</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleSnackBarClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
        
      </div>
    );
  }
}
