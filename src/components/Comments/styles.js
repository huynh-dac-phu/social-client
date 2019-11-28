const style = theme => ({
  container: {
    width: "100%",
    padding: "10px 0",
    marginBottom: "10px",
    "&:last-child": {
      commentData: {
        border: 0
      }
    }
  },
  avatar: {
    height: 90,
    width: 90,
    // margin: "0 10px",
    objectFit: "cover",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: 75,
      height: 75
    }
  },
  content: {
    flex: 1,
    paddingRight: 10
  },
  commentData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    paddingRight: "10px",
    marginLeft: "20px",
    borderBottom: "1px solid rgba(0,0,0,.2)"
  }
});
export default style;
