const styles = theme => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  scream: {
    padding: "0 5px 0 10px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px"
    }
  },
  profile: {
    padding: "0 10px 0 5px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
      marginBottom: "10px"
    }
  }
});
export default styles;
