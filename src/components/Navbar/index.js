import React from "react";
import { connect } from "react-redux";
//Components
import { Link } from "react-router-dom";
import MyButton from "../../util/MyButton";
import PostScream from "../PostScream";
import Notifications from "../Notifications";

//MUI
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//Icon
import HomeIcon from "@material-ui/icons/Home";

const actionBar = () => {
  return (
    <>
      <PostScream />
      <Link to="/">
        <MyButton title="Home" placement="bottom">
          <HomeIcon />
        </MyButton>
      </Link>
      <Notifications />
    </>
  );
};

const Navbar = props => {
  const { authenticated } = props;
  return (
    <AppBar>
      <ToolBar className="nav-container">
        {authenticated ? (
          actionBar()
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </>
        )}
      </ToolBar>
    </AppBar>
  );
};

const mapStateToProps = state => ({ authenticated: state.user.authenticated });

export default connect(mapStateToProps, null)(Navbar);
