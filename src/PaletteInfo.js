import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteInfoStyles";

const useStyles = makeStyles(styles);

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
