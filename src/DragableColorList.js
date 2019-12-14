import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import { makeStyles } from "@material-ui/core/styles";
import DraggableColorBox from "./DraggableColorBox";

const useStyles = makeStyles({
  colorBoxes: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)"
  }
});

const DragableColorList = SortableContainer(
  ({ pickedColors, handleDeleteColor }) => {
    const classes = useStyles();
    console.log(classes);
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
