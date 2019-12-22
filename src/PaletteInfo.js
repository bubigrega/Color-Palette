import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteInfoStyles";
import DeleteForever from "@material-ui/icons/DeleteForeverTwoTone";

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

  const handleDeletePalette = e => {
    e.stopPropagation();
    props.handleDeletePalette();
  };
  return (
    <div className={classes.root} onClick={handleClick}>
      <span className={classes.delete}>
        <DeleteForever
          color="secondary"
          className={classes.deleteIcon}
          onClick={handleDeletePalette}
        />
      </span>
      <div className={classes.colors}>{tiles}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default PaletteInfo;
