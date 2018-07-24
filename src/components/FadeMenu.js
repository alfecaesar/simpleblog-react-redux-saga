import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "../App.css";
import { Link } from "react-router-dom";

class FadeMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          className="menuTitle"
          color="inherit"
          aria-label="Menu"
          aria-owns={anchorEl ? "fade-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <Link to={{ pathname: "/" }}>
            <MenuItem onClick={this.handleClose}>Home</MenuItem>
          </Link>
          <Link to={{ pathname: "/blog" }}>
            <MenuItem onClick={this.handleClose}>Blog</MenuItem>
          </Link>
          <Link to={{ pathname: "/add-blog" }}>
            <MenuItem onClick={this.handleClose}>Add Blog</MenuItem>
          </Link>
          <Link to={{ pathname: "/manage-blog" }}>
            <MenuItem onClick={this.handleClose}>Manage Blog</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default FadeMenu;
