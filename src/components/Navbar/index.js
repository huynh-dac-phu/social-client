import React from "react";
//Components
import { Link } from "react-router-dom";
//Pages
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <AppBar>
      <ToolBar className="nav-container">
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Signup
        </Button>
      </ToolBar>
    </AppBar>
  );
};

export default Navbar;
