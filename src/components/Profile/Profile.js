import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
//MUI stuff
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
//Icon
import Location from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import Calendar from "@material-ui/icons/CalendarToday";
//custom
import styles from "./styles";
import dayjs from "dayjs";

const Profile = props => {
  const { classes, credentials } = props;
  const { imageUrl, handle, bio, location, website, createdAt } = credentials;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="profile-image">
          <img className="profile-image" src={imageUrl} alt="avatar" />
        </div>
        <hr />
        <div className="profile-details">
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color="primary"
            variant="h5"
          >
            @{handle}
          </MuiLink>
          <hr />
          {bio && <Typography variant="body2">{bio}</Typography>}
          <hr />
          {location && (
            <>
              <Location color="primary">
                <span>{location}</span>
              </Location>
            </>
          )}
          <hr />
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
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Profile);
