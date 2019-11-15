const style = {
  container: {
    padding: "10px 0",
    marginBottom: "10px",
    "&:last-child": {
      commentData: {
        border: 0
      }
    }
  },
  avatar: {
    objectFit: "cover",
    height: 100,
    width: 100,
    margin: "0 10px",
    maxWidth: "100%",
    borderRadius: "50%"
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
};
export default style;
