import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/styles";
//route
import { Link, useHistory } from "react-router-dom";
//material
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
//custom style
import styles from "./styles";
import icon from "../../images/icon.png";
import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/userAction";

const complexStateInitial = {
  email: "",
  password: "",
  confirmPassword: "",
  handle: ""
};

const useStyles = makeStyles(theme => ({ ...theme.spreadThis, ...styles }));

const Signup = props => {
  const [statesManager, setStatesManager] = useState(complexStateInitial);
  const [error, setError] = useState({});
  const history = useHistory();
  const classes = useStyles();

  const {
    signupUser,
    UI: { errors, loading }
  } = props;

  const handleChange = e => {
    const { name, value } = e.target;
    setStatesManager(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    signupUser(
      {
        email: statesManager.email,
        password: statesManager.password,
        confirmPassword: statesManager.confirmPassword,
        handle: statesManager.handle
      },
      history
    );
  };

  useEffect(() => {
    setError(errors);
  }, [errors]);

  return (
    <Grid className={classes.form} container>
      <Grid item sm></Grid>
      <Grid item md className={classes.content}>
        <img className={classes.icon} src={icon} alt="app icon" />
        <Typography className={classes.pageTitle} variant="h3">
          Signup
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              className={classes.textInput}
              id="email"
              name="email"
              type="email"
              label="Email"
              helperText={error.email}
              error={error.email ? true : false}
              fullWidth
              value={statesManager.email}
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.textInput}
              id="password"
              name="password"
              type="password"
              label="Password"
              helperText={error.password}
              error={error.password ? true : false}
              fullWidth
              value={statesManager.password}
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.textInput}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              helperText={error.confirmPassword}
              error={error.confirmPassword ? true : false}
              fullWidth
              value={statesManager.comfirmPassword}
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.textInput}
              id="handle"
              name="handle"
              type="text"
              label="Handle"
              helperText={error.handle}
              error={error.handle ? true : false}
              fullWidth
              value={statesManager.handle}
              onChange={handleChange}
            ></TextField>
            {error.error && (
              <Typography className={classes.customError} variant="body2">
                {error.error}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              className={classes.button}
              disabled={loading}
            >
              Submit
            </Button>
            {loading && <LinearProgress color="secondary" />}
            <small className={classes.signUp}>
              Already have an account ? Log in <Link to="/login">here</Link>{" "}
            </small>
          </form>
        </Typography>
      </Grid>
      <Grid item sm></Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapDispatchToProps = { signupUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Signup));
