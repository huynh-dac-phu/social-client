import React from "react";
import NoImg from "../../images/no.png";
import { withStyles, makeStyles } from "@material-ui/styles";

//MUI
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
//Icon
import Location from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import Calendar from "@material-ui/icons/CalendarToday";
import LogoutIcon from "@material-ui/icons/KeyboardReturn";
//custom
import styles from "./styles";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis,
  ...styles
}));

const ProfileSkelection = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img className="profile-image" src={NoImg} alt="" />
        </div>
        <hr />
        <div className="profile-details">
          <div className={classes.handle} />
          <hr />
          <div className={classes.halfLine} />
          <div className={classes.fullLine} />
          <hr />
          <Location color="primary" /> Location
          <hr />
          <LinkIcon color="primary" /> {"https://web.com"}
          <hr />
          <Calendar color="primary" /> Joined
          <hr />
          <div className={classes.flex}>
            <Tooltip title="Sign out" placement="right">
              <Button className="logout" color="primary">
                <LogoutIcon color="primary" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(ProfileSkelection);
