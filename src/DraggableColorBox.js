import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {}
});

function DraggableColorBox(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.colorName}
    </div>
  );
}

export default DraggableColorBox;
