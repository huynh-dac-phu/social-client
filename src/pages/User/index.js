import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getUserData } from "../../redux/actions/dataAction";
import { useParams } from "react-router-dom";
import axios from "axios";
//Components
import ProfileStatic from "../../components/ProfileStatic";
import Scream from "../../components/Scream";
import ScreamSkelection from "../../components/ScreamSkelection";

//MUI
import Grid from "@material-ui/core/Grid";
//custom
import styles from "./styles";

const User = props => {
  let { handle, screamId } = useParams();
  const [profile, setProfile] = useState(null);
  const [screamIdParam, setscreamIdParam] = useState(null);
  const {
    getUserData,
    data: { screams, loading },
    classes
  } = props;

  useEffect(() => {
    if (screamId) setscreamIdParam(screamId);
    getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then(res => {
        setProfile(res.data);
      })
      .catch(err => console.log(err));
  }, [getUserData, handle, screamId]);

  useEffect(() => {}, [profile]);

  const screamsMarkup = loading ? (
    <ScreamSkelection />
  ) : screams == null ? (
    <p>No screams from this user</p>
  ) : !screamIdParam ? (
    screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
  ) : (
    screams.map(scream => {
      if (scream.screamId !== screamIdParam) {
        return <Scream key={scream.screamId} scream={scream} />;
      } else {
        return <Scream key={scream.screamId} scream={scream} openDialog />;
      }
    })
  );

  return (
    <Grid className={classes.container} container spacing={0}>
      <Grid className={classes.scream} item md={8} xs={12}>
        {screamsMarkup}
      </Grid>
      <Grid className={classes.profile} item md={4} xs={12}>
        {profile && <ProfileStatic profile={profile.user} />}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = { getUserData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(User));
