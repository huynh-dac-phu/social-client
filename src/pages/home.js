import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Scream from "../components/Scream";
import ProfileContainer from "../components/Profile";
import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataAction";

import ScreamSkelection from "../components/ScreamSkelection";

const Home = props => {
  const {
    data: { screams, loading },
    getScreams
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
    <Grid container spacing={10}>
      <Grid item sm={8} xs={12}>
        {recentScreamsMarkup}
      </Grid>
      <Grid item sm={4} xs={12}>
        <ProfileContainer />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = { getScreams };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
