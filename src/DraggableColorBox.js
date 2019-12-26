import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { SortableElement } from "react-sortable-hoc";

import styles from "./styles/DragableColorBoxStyles";

const DraggableColorBox = SortableElement(props => {
  const { color, colorName, handleDeleteColor, classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{colorName}</span>
        <DeleteForever onClick={handleDeleteColor} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
