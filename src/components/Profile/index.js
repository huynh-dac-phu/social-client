import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
//Component
import Profile from "./Profile";
import NoProfile from "../NoProfile";
import ProfileSkelection from "../ProfileSkelection";

//Custom
import styles from "./styles";
const ProfileContainer = props => {
  const {
    user: { authenticated, loading }
  } = props;

  let profileMarkup = !loading ? (
    authenticated ? (
      <Profile />
    ) : (
      <NoProfile />
    )
  ) : (
    <ProfileSkelection />
  );

  return profileMarkup;
};

const mapStateToProp = state => ({
  user: state.user
});
export default connect(
  mapStateToProp,
  null
)(withStyles(styles)(ProfileContainer));
