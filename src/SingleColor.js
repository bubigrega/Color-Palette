import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colorsGrid: {
    flexGrow: "1",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "1fr 1fr"
  },
  colorBox: {}
});

function SingleColor(props) {
  const { root, colorsGrid, colorBox } = useStyles();
  const { colors, colorId } = props;
  const pickShades = (colors, colorId) => {
    let shades = [];
    let colorLevels = colors.colors;
    for (let key in colorLevels) {
      shades.push(colorLevels[key].find(c => colorId === c.id));
    }
    return shades;
  };

  return (
    <div className={root}>
      <Navbar />
      <div className={colorsGrid}>
        {pickShades(colors, colorId).map(c => (
          <div
            key={c.name}
            className={colorBox}
            style={{ backgroundColor: c.hex }}
          >
            {c.name}
          </div>
        ))}
      </div>
      <Footer
        name={colors.paletteName}
        emoji={colors.emoji}
        colorName={colorId}
      />
    </div>
  );
}
export default SingleColor;
