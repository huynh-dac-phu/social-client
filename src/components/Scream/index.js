import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { likeScream, unlikeScream } from "../../redux/actions/dataAction";
//format time
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//Component
import MyButton from "../../util/MyButton";
import DeleteScream from "../DeleteScream/index";
//Metarial
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";
import LikeIcon from "@material-ui/icons/Favorite";
import LikeIconBorder from "@material-ui/icons/FavoriteBorder";
//custom style
import style from "./styles";

const Scream = props => {
  dayjs.extend(relativeTime);
  const {
    classes,
    scream: {
      userImage,
      body,
      createdAt,
      userHandle,
      screamId,
      likeCount,
      commentCount
    },
    user: {
      authenticated,
      likes,
      credentials: { handle }
    },
    likeScream,
    unlikeScream
  } = props;
  console.log("runiing");

  const likedScream = () => {
    if (likes && likes.find(like => like.screamId === screamId)) return true;
    return false;
  };

  const likeAction = () => {
    likeScream(screamId);
  };

  const unlikeAction = () => {
    unlikeScream(screamId);
  };

  const undoLike = (
    <MyButton title="Undo like" placement="bottom" onClick={unlikeAction}>
      <LikeIcon color="primary" />
    </MyButton>
  );

  const Like = (
    <MyButton title="Like" placement="bottom" onClick={likeAction}>
      <LikeIconBorder color="primary" />
    </MyButton>
  );

  const likeButton = !authenticated ? (
    <MyButton title="Like" placement="bottom">
      <Link to="/login">
        <LikeIconBorder color="primary" />
      </Link>
    </MyButton>
  ) : likedScream() ? (
    undoLike
  ) : (
    Like
  );

  const deleteButton =
    authenticated && userHandle === handle ? (
      <DeleteScream iD={screamId} />
    ) : null;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.image}
          component="img"
          image={userImage}
          title="Profile image"
        />
        <CardContent className={classes.content}>
          <div className={classes.header}>
            <Typography
              className={classes.link}
              color="primary"
              variant="h5"
              component={Link}
              to={`/users/${userHandle}`}
            >
              {userHandle}
            </Typography>
            {deleteButton}
          </div>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
          <div className={classes.action}>
            {likeButton}
            <span>{likeCount} Likes</span>
            <MyButton title="Comment" placement="bottom">
              <ChatIcon color="primary" />
            </MyButton>
            <span>{commentCount} Comments</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

Scream.propTypes = {
  classes: PropTypes.object.isRequired,
  scream: PropTypes.shape({
    userImage: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    userHandle: PropTypes.string.isRequired,
    screamId: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired
  }).isRequired,
  likeScream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  user: state.user
});

const mapDispatchToProps = { likeScream, unlikeScream };

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withStyles(style)(Scream));
