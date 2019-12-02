import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    position: "relative",
    padding: "0.5rem",
    overflow: "none",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "grey"
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0",
    color: "black",
    position: "relative",
    fontSize: "1rem",
    marginTop: "0.5rem"
  },
  emoji: {
    fontSize: "1.2rem",
    marginLeft: "0.5rem"
  }
});

function PaletteInfo(props) {
  const { paletteName, emoji } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>

      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default PaletteInfo;
