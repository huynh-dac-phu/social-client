import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/styles";

//MUI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
//Icon
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

const ScreamDialogProfile = props => {
  const classes = useStyles(style);
  const {
    profile: {
      screamId,
      body,
      createdAt,
      likeCount,
      commentCount,
      userImage,
      userHandle,
      comments
    }
  } = props;

  console.count("render");

  return (
    <Grid container>
      <Grid item sm={5} className={classes.profileImage}>
        <img src={userImage} alt="" className={classes.image} />
      </Grid>
      <Grid item sm={7} style={{ paddingLeft: 10 }}>
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
};

export default withStyles(style)(ScreamDialogProfile);
