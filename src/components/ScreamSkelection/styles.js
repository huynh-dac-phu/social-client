import theme from "../../util/theme";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },

  content: {
    width: "100%",
    flexDirection: "column",
    padding: 25
  },
  cover: {
    width: "100%",
    maxWidth: 200,
    objectFit: "cover"
  },
  handle: {
    width: 60,
    height: 20,
    backgroundColor: theme.palette.primary.main,
    marginBottom: 7
  },
  date: {
    height: 14,
    width: 100,
    backgroundColor: "rgba(0,0,0,.3)",
    marginBottom: 10
  },
  fullLine: {
    height: 15,
    width: "90%",
    backgroundColor: "rgba(0,0,0,.4)",
    marginBottom: 10
  },
  halfLine: {
    height: 15,
    width: "50%",
    backgroundColor: "rgba(0,0,0,.4)",
    marginBottom: 10
  }
};
export default styles;
