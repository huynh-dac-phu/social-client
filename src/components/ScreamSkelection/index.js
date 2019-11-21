import React from "react";
import NoImg from "../../images/no.png";
import { withStyles, makeStyles } from "@material-ui/styles";

//MUI
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
//custom
import styles from "./styles";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis,
  ...styles
}));

const ScreamSkelection = props => {
  const classes = useStyles();

  const content = Array.from({ length: 5 }).map((item, id) => (
    <Card className={classes.card} key={id}>
      <CardMedia className={classes.cover} image={NoImg} />
      <CardContent className={classes.content}>
        <div className={classes.handle}></div>
        <div className={classes.date}></div>
        <div className={classes.fullLine}></div>
        <div className={classes.fullLine}></div>
        <div className={classes.halfLine}></div>
      </CardContent>
    </Card>
  ));

  return content;
};

export default withStyles(styles)(ScreamSkelection);
