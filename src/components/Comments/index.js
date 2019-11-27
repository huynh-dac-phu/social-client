import React from "react";
import { withStyles, makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//MUI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
//custome style
import style from "./styles";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis,
  ...style
}));

const Comments = props => {
  const { comments } = props;
  const classes = useStyles(style);
  return (
    <Grid container>
      {comments.map((comment, i) => {
        const { userImage, body, createdAt, userHandle } = comment;
        return (
          <Grid item sm={12} className={classes.container} key={i}>
            <Grid container>
              <Grid item sm={2}>
                <img className={classes.avatar} src={userImage} alt="" />
              </Grid>
              <Grid item sm={10} className={classes.content}>
                <div className={classes.commentData}>
                  <Typography
                    variant="h5"
                    component={Link}
                    to={`/user/${userHandle}`}
                    color="primary"
                  >
                    {userHandle}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
                  </Typography>
                  <Typography variant="body1">{body}</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(style)(Comments);
