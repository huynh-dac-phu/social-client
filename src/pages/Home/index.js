import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Scream from "../../components/Scream";
import ProfileContainer from "../../components/Profile";
import { connect } from "react-redux";
import { getScreams } from "../../redux/actions/dataAction";
//loading animation
import ScreamSkelection from "../../components/ScreamSkelection";
//custome
import styles from "./styles";
import { withStyles } from "@material-ui/styles";

const Home = props => {
  const {
    data: { screams, loading },
    getScreams,
    classes
  } = props;

  useEffect(() => {
    getScreams();
  }, [getScreams]);
  useEffect(() => {}, []);

  const recentScreamsMarkup = !loading ? (
    screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
  ) : (
    <ScreamSkelection />
  );

  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item md={8} xs={12} className={classes.scream}>
        {recentScreamsMarkup}
      </Grid>
      <Grid item md={4} xs={12} className={classes.profile}>
        <ProfileContainer />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = { getScreams };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
