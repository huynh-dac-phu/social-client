import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//format time
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//Component
import MyButton from "../../util/MyButton";
import DeleteScream from "../DeleteScream/index";
import ScreamDialog from "../ScreamDialog";
import LikeButton from "../LikeButton";

//Metarial
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";
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
      credentials: { handle }
    }
  } = props;

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
            <LikeButton screamId={screamId} />
            <span>{likeCount} Likes</span>
            <MyButton title="Comment" placement="bottom">
              <ChatIcon color="primary" />
            </MyButton>
            <span>{commentCount} Comments</span>
            <ScreamDialog iD={screamId} handle={handle} />
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
  }).isRequired
};

const mapStateToProp = state => ({
  user: state.user
});

export default connect(mapStateToProp)(withStyles(style)(Scream));
