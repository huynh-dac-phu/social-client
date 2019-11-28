const style = theme => ({
  card: {
    display: "flex",
    marginBottom: "20px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  link: {
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem"
    }
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      padding: 0
    }
  },
  image: {
    maxWidth: "200px",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "10rem"
    }
  },
  content: {
    padding: "25px",
    flex: 1,
    objectFit: "cover",
    [theme.breakpoints.only("xs")]: {
      padding: "10px"
    }
  },
  action: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px"
    }
  },
  span: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "13px"
    }
  }
});
export default style;
