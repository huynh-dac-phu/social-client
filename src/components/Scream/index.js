import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
//format time
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//Metarial
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
//custom style
import style from "./styles";

const Scream = props => {
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
    }
  } = props;
  dayjs.extend(relativeTime);
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
          <Typography
            className={classes.link}
            color="primary"
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
          >
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
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

export default withStyles(style)(Scream);
