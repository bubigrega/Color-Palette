import React from "react";
import { withStyles } from "@material-ui/core/styles";
import chroma from "chroma-js";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { SortableElement } from "react-sortable-hoc";

const styles = {
  root: {
    position: "relative",
    "&:hover svg": {
      paddingBottom: "0.3rem",
      paddingRight: "0.2rem",
      transform: "scale(2.5)",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer"
    }
  },
  boxContent: {
    color: props =>
      chroma(props.color).luminance() <= 0.2 ? "white" : "#515154",
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px",
    bottom: "0",
    left: "0",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "0.8rem"
  }
};

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
