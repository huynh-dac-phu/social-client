import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { postComment } from "../../redux/actions/dataAction";

//MUI
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
//custom
import style from "./styles";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis,
  ...style
}));

const CommentForm = props => {
  const [body, setBody] = useState("");
  const [error, setError] = useState({});
  const classes = useStyles(style);
  const {
    screamId,
    postComment,
    authenticated,
    UI: { errors }
  } = props;

  useEffect(() => {
    if (errors) setError(errors);
    if (Object.entries(errors).length === 0 && errors.constructor === Object) {
      setError({});
      setBody("");
    }
  }, [errors, props]);

  const handleSubmit = e => {
    e.preventDefault();
    setBody("");
    postComment(screamId, { body });
  };

  const handleChange = e => {
    setBody(e.target.value);
  };

  return (
    <>
      {authenticated && (
        <Grid container>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              className={classes.textInput}
              id="comment"
              name="body"
              label="Comment on scream"
              helperText={error.comment}
              error={error.comment ? true : false}
              fullWidth
              value={body}
              onChange={handleChange}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </Grid>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  UI: state.UI,
  authenticated: state.user.authenticated
});

const mapDispatchToProps = { postComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(CommentForm));
