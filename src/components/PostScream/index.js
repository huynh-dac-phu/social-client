import React, { useState, useEffect } from "react";
import MyButton from "../../util/MyButton";
import { withStyles, makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { postScream } from "../../redux/actions/dataAction";
//MUI
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
//Icon
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
//custom
import styles from "./styles";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis,
  ...styles
}));

const PostScream = props => {
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState({ body: "" });
  const [error, setError] = useState({});
  const classes = useStyles();

  const {
    postScream,
    UI: { errors, loading }
  } = props;

  const handleChange = e => {
    setBody({ body: e.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    postScream(body);
  };

  useEffect(() => {
    if (errors) setError(errors);
    if (
      Object.entries(errors).length === 0 &&
      errors.constructor === Object &&
      !loading
    )
      handleClose();
  }, [errors, loading]);

  return (
    <>
      <MyButton title="Post screams" placement="bottom" onClick={handleOpen}>
        <AddIcon />
      </MyButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <div className={classes.header}>
          <DialogTitle>Post new scream</DialogTitle>
          <MyButton title="Close" onClick={handleClose}>
            <CloseIcon />
          </MyButton>
        </div>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.textInput}
              id="body"
              name="body"
              type="text"
              label="SCREAM !!"
              placeholder="Scream at yout fellow apes"
              helperText={error.body}
              error={error.body ? true : false}
              fullWidth
              value={body.body}
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
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

const mapStateToProps = state => ({
  UI: state.UI
});

const mapDispatchToProps = { postScream };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PostScream));
