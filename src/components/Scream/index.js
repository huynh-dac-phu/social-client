import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
//format time
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//Component
import MyButton from "../../util/MyButton";
import DeleteScream from "../DeleteScream";
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
    openDialog
  } = props;

  useEffect(() => {}, [props]);
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
            <DeleteScream userHandle={userHandle} iD={screamId} />
          </div>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
          <div className={classes.action}>
            <div>
              <LikeButton className={classes.button} screamId={screamId} />
              <span>{likeCount} Likes</span>
            </div>
            <div>
              <MyButton
                className={classes.button}
                title="Comment"
                placement="bottom"
              >
                <ChatIcon color="primary" />
              </MyButton>
              <span>{commentCount} Comments</span>
            </div>
            <ScreamDialog iD={screamId} openDialog={openDialog} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(style)(Scream);
