import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { markNotificationsRead } from "../../redux/actions/userAction";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

//MUI
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
//Icon
import NotiIcon from "@material-ui/icons/Notifications";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
//custom
import styles from "./styles";

const Notifications = props => {
  const { classes, notifications, markNotificationsRead } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  dayjs.extend(relativeTime);

  let notificationIcon;
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onMenuOpened = () => {
    let unreadNotificationIds = notifications
      .filter(not => !not.read)
      .map(not => not.notificationId);
    markNotificationsRead(unreadNotificationIds);
  };

  if (notifications && notifications.length > 0) {
    notifications.filter(not => not.read === false).length > 0
      ? (notificationIcon = (
          <Badge
            badgeContent={
              notifications.filter(not => not.read === false).length
            }
            color="secondary"
          >
            <NotiIcon />
          </Badge>
        ))
      : (notificationIcon = <NotiIcon />);
  } else {
    notificationIcon = <NotiIcon />;
  }

  const notificationsMarkup =
    notifications && notifications.length > 0 ? (
      notifications.map(not => {
        const verb = not.type === "like" ? "liked" : "commented on";
        const time = dayjs(not.createdAt).fromNow();
        const iconColor = not.read ? "primary" : "secondary";
        const icon =
          not.type === "like" ? (
            <FavoriteIcon className={classes.icon} color={iconColor} />
          ) : (
            <ChatIcon className={classes.icon} color={iconColor} />
          );
        return (
          <MenuItem key={not.createdAt} onClick={handleClose}>
            {icon}
            <Typography
              component={Link}
              color="initial"
              variant="body1"
              to={`/users/${not.recipient}/scream/${not.screamId}`}
            >
              {not.sender} {verb} your scream {time}
            </Typography>
          </MenuItem>
        );
      })
    ) : (
      <MenuItem onClick={handleClose}>You have no notifications yet</MenuItem>
    );

  return (
    <>
      <Tooltip placement="bottom" title="Notifications">
        <IconButton
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          {notificationIcon}
        </IconButton>
      </Tooltip>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onEntered={onMenuOpened}
      >
        {notificationsMarkup}
      </Menu>
    </>
  );
};

const mapStateToProps = state => ({ notifications: state.user.notifications });

const mapDispatchToProps = { markNotificationsRead };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Notifications));
