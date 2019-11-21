import theme from "../../util/theme";

const styles = {
  paper: {
    padding: 20
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative"
    },
    "& .profile-image": {
      width: 200,
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      objectFit: "cover",
      borderRadius: "50%"
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
    }
  }
};
export default styles;
