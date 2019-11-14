import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUserDetail } from "../../redux/actions/userAction";
import MyButton from "../../util/MyButton";

//MUI stuff
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//Icon
import EditIcon from "@material-ui/icons/AccountCircle";
//custom
import { withStyles, makeStyles } from "@material-ui/styles";
// import styles from "../Profile/styles";

const useStyles = makeStyles(theme => ({ ...theme.spreadThis }));
const EditProfile = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {
    credentials: { bio, location, website },
    updateUserDetail
  } = props;
  const [statesManager, setStatesManager] = useState({
    bio,
    website,
    location
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setStatesManager(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUserDetail(statesManager);
    handleClose();
  };

  return (
    <>
      <MyButton title="Edit" placement="left" onClick={handleClickOpen}>
        <EditIcon color="primary" />
      </MyButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle id="form-dialog-title">Update Infomation</DialogTitle>
        <DialogContent>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              className={classes.textInput}
              id="bio"
              name="bio"
              type="text"
              label="Bio"
              multiline
              rows={3}
              placeholder="A Short bio about yourself"
              fullWidth
              value={statesManager.bio}
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.textInput}
              id="website"
              name="website"
              type="text"
              label="Website"
              placeholder="Your website"
              fullWidth
              value={statesManager.website}
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.textInput}
              id="location"
              name="location"
              type="text"
              label="Location"
              placeholder="Where you live ?"
              fullWidth
              value={statesManager.location}
              onChange={handleChange}
            ></TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

EditProfile.propTypes = {};

const mapDispatchToProps = { updateUserDetail };

export default connect(null, mapDispatchToProps)(EditProfile);
