import theme from "../../util/theme";

const styles = {
  paper: {
    padding: 20
  },
  profile: {
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
      "& .button": {
        alignSelf: "center"
      }
    },
    "& .profile-avatar": {
      width: 200,
      height: 200,
      margin: "0 auto",
      objectFit: "cover",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: theme.palette.primary.main
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

  fullLine: {
    height: 15,
    width: "100%",
    backgroundColor: "rgba(0,0,0,.4)",
    marginBottom: 10
  },
  halfLine: {
    height: 15,
    width: "50%",
    margin: "0 auto",
    backgroundColor: "rgba(0,0,0,.4)",
    marginBottom: 10
  }
};
export default styles;
