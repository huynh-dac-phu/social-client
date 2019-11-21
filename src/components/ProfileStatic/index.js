import React from "react";
import { withStyles } from "@material-ui/styles";
import dayjs from "dayjs";

//MUI
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
//Icon
import Location from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import Calendar from "@material-ui/icons/CalendarToday";
//custom
import styles from "./styles";

const ProfileStatic = props => {
  const {
    classes,
    profile: { imageUrl, handle, bio, location, website, createdAt }
  } = props;
  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="profile-image">
          <img className="profile-avatar" src={imageUrl} alt="avatar" />
        </div>
        <hr />
        <div className="profile-details">
          <MuiLink color="primary" variant="h5">
            @{handle}
          </MuiLink>
          <hr />
          {bio && <Typography variant="body2">{bio}</Typography>}
          <hr />
          {location && (
            <Location color="primary">
              <span>{location}</span>
            </Location>
          )}
          {website && (
            <>
              <LinkIcon color="primary" />
              <a href={website} target="_blank" rel="noopener noreferrer">
                {" "}
                {website}
              </a>
              <hr />
            </>
          )}
          <Calendar color="primary" />{" "}
          <span>Joined {dayjs(createdAt).format("MMMM YYYY ")}</span>
          <hr />
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(ProfileStatic);
