import React, { useState, useEffect, useCallback } from "react";
import { withStyles, makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getScream } from "../../redux/actions/dataAction";

//MUI
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import LinearProgress from "@material-ui/core/LinearProgress";
//Icon
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import CloseIcon from "@material-ui/icons/Close";
//Component
import MyButton from "../../util/MyButton";
import ScreamDialogProfile from "./ScreamDialogProfile";

//custom
import style from "./styles";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis,
  ...style
}));

const ScreamDialog = props => {
  const [open, setOpen] = useState(false);
  const classes = useStyles(style);

  const {
    iD,
    scream: {
      screamId,
      body,
      createdAt,
      likeCount,
      commentCount,
      userImage,
      userHandle,
      comments
    },
    UI: { loading },
    getScream,
    openDialog
  } = props;

  const profile = {
    screamId,
    body,
    createdAt,
    likeCount,
    commentCount,
    userImage,
    userHandle,
    comments
  };
  const handleOpen = useCallback(() => {
    const newPath = `/users/${userHandle}/scream/${screamId}`;
    window.history.pushState(null, null, newPath);
    getScream(iD);
    setOpen(true);
  }, [getScream, iD, screamId, userHandle]);

  const handleClose = () => {
    const newPath = `/users/${userHandle}`;
    window.history.pushState(null, null, newPath);
    setOpen(false);
  };

  useEffect(() => {
    if (openDialog) handleOpen();
  }, [handleOpen, openDialog]);

  useEffect(() => {}, []);

  return (
    <>
      <MyButton
        onClick={handleOpen}
        title="Expand scream"
        placement="right"
        className={classes.expandIcon}
      >
        <UnfoldMore color="primary" />
      </MyButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <MyButton
          title="Close"
          onClick={handleClose}
          className={classes.closeIcon}
        >
          <CloseIcon color="primary" />
        </MyButton>
        <DialogContent className={classes.content}>
          {loading && <LinearProgress />}
          {!loading && <ScreamDialogProfile profile={profile} />}
        </DialogContent>
      </Dialog>
    </>
  );
};

const mapStateToProps = state => ({
  scream: state.data.scream,
  UI: state.UI
});

const mapDispatchToProps = { getScream };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(ScreamDialog));
