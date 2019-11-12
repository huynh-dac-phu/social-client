import React, { useState, useEffect /*useReducer*/ } from "react";
import { withStyles, makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
// import axios from "axios";
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
//redux
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userAction";

const useStyles = makeStyles(theme => ({ ...theme.spreadThis }));

const complexStateInitial = {
  email: "",
  password: ""
};

const Login = props => {
  const [statesManager, setStatesManager] = useState(complexStateInitial);
  const [error, setError] = useState({});
  const classes = useStyles();

  const {
    loginUser,
    UI: { loading, errors }
  } = props;

  useEffect(() => {
    setError(errors);
  }, [errors]);

  const history = useHistory();
  const handleChange = e => {
    const { name, value } = e.target;
    setStatesManager(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginUser(statesManager, history);
  };

  return (
    <Grid className={classes.form} container>
      <Grid item sm></Grid>
      <Grid item sm>
        <img className={classes.icon} src={icon} alt="app icon" />
        <Typography className={classes.pageTitle} variant="h3">
          Login
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
            {error.general && (
              <Typography className={classes.customError} variant="body2">
                {error.general}
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
              Don't have an account ? Sign up <Link to="/signup">here</Link>{" "}
            </small>
          </form>
        </Typography>
      </Grid>
      <Grid item sm></Grid>
    </Grid>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStatteToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapDispatchToProps = { loginUser };

export default connect(
  mapStatteToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
