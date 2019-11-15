import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getUserData } from "../../redux/actions/dataAction";
import { useHistory, useParams } from "react-router-dom";

//custom
import styles from "./styles";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis,
  ...styles
}));

const User = props => {
  const classes = useStyles();
  let { handle } = useParams();
  const [profile, setProfile] = useState(null);
  const { getUserData } = props;
  console.log(handle);
  useEffect(() => {
    getUserData(handle);
  }, [getUserData, handle]);
  useEffect(() => {}, []);
  return <div></div>;
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = { getUserData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(User));
