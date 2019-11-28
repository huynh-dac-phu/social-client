import themes from "../../util/theme";

const styles = theme => ({
  paper: {
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      padding: 10
    }
  },
  profile: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between"
    },
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",

      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%"
      }
    },
    "& .profile-image": {
      width: 200,
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      objectFit: "cover",
      borderRadius: "50%",
      [theme.breakpoints.down("sm")]: {
        margin: 0
      },
      "& .button": {
        alignSelf: "center"
      }
    },
    "& .profile-avatar": {
      width: 200,
      height: 200,
      margin: "0 auto",
      objectFit: "cover",
      borderRadius: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "10rem",
        height: "10rem"
      }
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: themes.palette.primary.main
      },
      "& .logout": {
        display: "block"
      }
    },
    "& hr ": {
      border: 0,
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px"
    }
  },
  noProfile: {
    paddingTop: 10
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  },
  break: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});
export default styles;
