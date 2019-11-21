import React, { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getScream } from "../../redux/actions/dataAction";

//MUI
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
//Icon
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import CloseIcon from "@material-ui/icons/Close";
import ChatIcon from "@material-ui/icons/Chat";
//Component
import MyButton from "../../util/MyButton";
import LikeButton from "../LikeButton";
import Comments from "../Comments";
import CommentForm from "../CommentForm";

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

  const dialogMarkup = loading ? (
    <LinearProgress />
  ) : (
    <Grid container>
      <Grid item sm={5} className={classes.profileImage}>
        <img src={userImage} alt="" className={classes.image} />
      </Grid>
      <Grid item sm={7}>
        <Typography
          component={Link}
          color="primary"
          variant="h5"
          to={`/users/${userHandle}`}
        >
          @{userHandle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
        </Typography>
        <Typography variant="body1">{body}</Typography>
        <LikeButton screamId={screamId} />
        <span>{likeCount} Likes</span>
        <MyButton title="Comment" placement="bottom">
          <ChatIcon color="primary" />
        </MyButton>
        <span>{commentCount} Comments</span>
      </Grid>
      <CommentForm screamId={screamId} />
      <Comments comments={comments} />
    </Grid>
  );

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
          {dialogMarkup}
        </DialogContent>
      </Dialog>
    </>
  );
};

const mapStateToProps = state => ({
  scream: state.data.scream,
  UI: state.UI,
  user: state.user
});

const mapDispatchToProps = { getScream };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(ScreamDialog));
