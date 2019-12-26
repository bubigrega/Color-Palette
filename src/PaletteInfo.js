import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForever from "@material-ui/icons/DeleteForeverTwoTone";

import styles from "./styles/PaletteInfoStyles";

const useStyles = makeStyles(styles);

const PaletteInfo = props => {
  const { palette, handleChangePath, show, handleDeletePalette } = props;
  const { paletteName, emoji, colors, id } = palette;

  console.log("rendering: ", paletteName, new Date().getUTCMilliseconds());

  const classes = useStyles(show);
  const tiles = colors.map(c => (
    <div
      key={c.name}
      className={classes.tile}
      style={{ backgroundColor: c.color }}
    />
  ));

  const handleDelete = e => {
    e.stopPropagation();
    handleDeletePalette(palette);
  };

  return (
    <div
      className={classes.root}
      onClick={() => handleChangePath(id)}
      style={{ cursor: show ? "pointer" : "default" }}
    >
      {show && (
        <span className={classes.delete}>
          <DeleteForever
            color="secondary"
            className={classes.deleteIcon}
            onClick={handleDelete}
          />
        </span>
      )}
      <div className={classes.colors}>{tiles}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default React.memo(
  PaletteInfo,
  (prevProps, nextProps) => prevProps.palette === nextProps.palette
);
