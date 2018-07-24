import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FadeMenu from "./FadeMenu";
import LoginDialog from "./LoginDialog";
import "../App.css";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function AppHeaderBar(props) {  
    
  const { classes } = props;
    

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <FadeMenu />
          <Typography variant="title" color="inherit" className={classes.flex}>
            My Personal Blog
          </Typography>
          <LoginDialog />
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppHeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(AppHeaderBar);
