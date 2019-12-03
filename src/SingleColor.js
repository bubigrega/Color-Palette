import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    flexGrow: "1",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "1fr 1fr"
  },
  colorBox: {}
});

function SingleColor(props) {
  const { root, colors, colorBox } = useStyles();
  return (
    <div className={root}>
      <Navbar />
      <div className={colors}>
        {props.colors.map(c => (
          <div
            key={c.name}
            className={colorBox}
            style={{ backgroundColor: c.hex }}
          >
            {c.name}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default SingleColor;
