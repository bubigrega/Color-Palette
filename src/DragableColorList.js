import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import { makeStyles } from "@material-ui/core/styles";

import DraggableColorBox from "./DraggableColorBox";

import styles from "./styles/DragableColorListStyles";

const useStyles = makeStyles(styles);

const DragableColorList = SortableContainer(
  ({ pickedColors, handleDeleteColor }) => {
    const classes = useStyles();
    return (
      <div className={classes.colorBoxes}>
        {pickedColors.map((c, i) => (
          <DraggableColorBox
            key={c.name}
            index={i}
            color={c.color}
            colorName={c.name}
            handleDeleteColor={() => handleDeleteColor(c.name)}
          />
        ))}
      </div>
    );
  }
);

export default DragableColorList;
