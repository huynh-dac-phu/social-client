import React from "react";
import { Link } from "react-router-dom";
//MUI
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//custom
import styles from "../Profile/styles";
import { withStyles } from "@material-ui/styles";

const NoProfile = props => {
  const { classes } = props;

  return (
    <Paper className={classes.noProfile}>
      <Typography variant="body2" align="center">
        No profile found, please login again
      </Typography>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/signup"
        >
          Signup
        </Button>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(NoProfile);
