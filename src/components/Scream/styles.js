import theme from "../../util/theme";

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
    textDecoration: "none"
  },
  image: {
    maxWidth: "200px",
    height: "200px"
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
    flexWrap: "wrap"
  },
  span: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "13px"
    }
  }
});
export default style;
