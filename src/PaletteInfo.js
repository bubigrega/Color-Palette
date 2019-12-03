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
    backgroundColor: "lightgray",
    position: "relative",
    height: "150px",
    borderRadius: "5px",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)"
  },
  tile: {
    display: "inline-block"
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
  const { paletteName, emoji, handleClick, colors } = props;
  const classes = useStyles();
  const tiles = colors.map(c => (
    <div
      key={c.name}
      className={classes.tile}
      style={{ backgroundColor: c.color }}
    />
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{tiles}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default PaletteInfo;
