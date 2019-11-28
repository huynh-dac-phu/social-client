import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../../redux/actions/userAction";
import MyButton from "../../util/MyButton";
//components
import EditProfile from "../EditProfile";
//MUI stuff
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
//Icon
import Location from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import EditImageIcon from "@material-ui/icons/CameraAlt";
import Calendar from "@material-ui/icons/CalendarToday";
import LogoutIcon from "@material-ui/icons/KeyboardReturn";
//custom
import styles from "./styles";
import dayjs from "dayjs";

const Profile = props => {
  const {
    classes,
    user: { credentials },
    uploadImage,
    logoutUser
  } = props;
  const { imageUrl, handle, bio, location, website, createdAt } = credentials;

  const fileInput = useRef();

  const onChangeImage = e => {
    const image = e.target.files[0];
    //send to server
    const formData = new FormData();
    formData.append("image", image, image.name);
    uploadImage(formData);
  };

  const handleChangeImage = () => {
    fileInput.current.click();
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="profile-image">
          <img className="profile-avatar" src={imageUrl} alt="avatar" />
          <input
            type="file"
            id="imageInput"
            hidden
            ref={fileInput}
            onChange={onChangeImage}
          />
          <MyButton
            title="Update avatar"
            placement="right"
            onClick={handleChangeImage}
            className="button"
          >
            {" "}
            <EditImageIcon color="primary" />
          </MyButton>
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
              <Location color="primary" />
              <span>{location}</span>
            </>
          )}
          <hr className={classes.break} />
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
          <hr className={classes.break} />
          <div className={classes.flex}>
            <Tooltip title="Sign out" placement="right">
              <Button className="logout" color="primary" onClick={handleLogout}>
                <LogoutIcon color="primary" />
              </Button>
            </Tooltip>
            <EditProfile credentials={credentials} />
          </div>
        </div>
      </div>
    </Paper>
  );
};

const mapStateToProp = state => ({
  user: state.user
});

const mapDispatchToProps = { logoutUser, uploadImage };

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withStyles(styles)(Profile));
