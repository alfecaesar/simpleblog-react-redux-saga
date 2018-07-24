import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default class AddBlogContent extends React.Component {
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
      }
  }    

  handleSnackBarClick = () => {
    this.setState({ snackbarOpen: true });
  };

  handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ snackbarOpen: false });
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //blogtitle
    if (!fields["blogtitle"]) {
      formIsValid = false;
      errors["blogtitle"] = "Please enter Blog Title";
    }

    //blogcontent
    if (!fields["blogcontent"]) {
      formIsValid = false;
      errors["blogcontent"] = "Please enter Blog Content";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  loginSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      this.setState({
        displayBoxError: false
      });

      // add blog here
        alert('asd')
        
    } else {
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
        <div id="wrapper">
          <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
            className="gridContainer"
          >
            <Grid item xs={11} md={9}>
              <Paper className="paddingContent" elevation={1}>
                <Typography variant="headline" component="h1">
                  Add Blog
                </Typography>

                <Typography component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
                  facilisis metus, et lobortis lectus. Integer lacus risus,
                  fringilla vitae neque at, iaculis tincidunt justo. Vestibulum sed
                  leo a erat vehicula facilisis.
                </Typography>
                <form>
                    <TextField
                      margin="dense"
                      id="blogtitle"
                      label="Blog Title"
                      type="text"
                      fullWidth
                      ref="blogtitle"
                      onChange={this.handleChange.bind(this, "blogtitle")}
                      value={this.state.fields["blogtitle"]}
                    />

                    <TextField
                      margin="dense"
                      id="blogcontent"
                      label="Blog Content"
                      type="text"
                      multiline="true"
                      rows="5"
                      fullWidth
                      ref="blogcontent"
                      onChange={this.handleChange.bind(this, "blogcontent")}
                      value={this.state.fields["blogcontent"]}
                    />

                    <Button
                      onClick={this.loginSubmit.bind(this)}
                      color="secondary"
                      variant="contained"
                      className="publishBtn"
                    >
                      Publish
                    </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
                      
                      
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
              message={<span id="message-id">Please enter Blog Title and Content.</span>}
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
