const style = theme => ({
  profileImage: {
    padding: "5px"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "7.5rem",
      height: "7.5rem"
    }
  },
  content: {
    padding: 0
  },
  day: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px"
    }
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  expandIcon: {
    flex: 1,
    maxWidth: "20px",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
      padding: 0
    }
  },
  closeIcon: {
    position: "absolute",
    right: 0
  }
});
export default style;
