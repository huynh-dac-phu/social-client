import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
//Material
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
//Component
import Profile from "./Profile";
import NoProfile from "../NoProfile";

//Custom
import styles from "./styles";
const ProfileContainer = props => {
  const {
    user: { authenticated, credentials, loading }
  } = props;

  let profileMarkup = !loading ? (
    authenticated ? (
      <Profile credentials={credentials} />
    ) : (
      <NoProfile />
    )
  ) : (
    <p>Loading...</p>
  );

  return profileMarkup;
};

ProfileContainer.propsTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
  user: state.user
});
export default connect(
  mapStateToProp,
  null
)(withStyles(styles)(ProfileContainer));
