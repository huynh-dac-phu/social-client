import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Scream from "../components/Scream";
import ProfileContainer from "../components/Profile";

const Home = () => {
  const [screams, setScreams] = useState(null);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     const result = await axios("/screams");
  //     setScreams(result.data);
  //   };
  //   fetchAPI();
  //   console.log(screams);
  // }, [screams]);

  const recentScreamsMarkup = screams ? (
    screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
  ) : (
    <p>Loading..</p>
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

export default Home;
