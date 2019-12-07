import React, { useState } from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import { Button } from "@material-ui/core";
import ColorBox from "./ColorBox";

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
  backButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray"
  }
});

function SingleColor(props) {
  const { colors, colorId } = props;
  const { root, colorsGrid, backButton } = useStyles();
  const [copyText, setCopyText] = useState("hex");

  const handelCopyText = style => {
    setCopyText(style);
  };

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
      <Navbar
        show={false}
        handelCopyText={handelCopyText}
        copyText={copyText}
      />
      <div className={colorsGrid}>
        {pickShades(colors, colorId).map(c => (
          <ColorBox
            key={c.name}
            show={false}
            name={c.name}
            background={c.hex}
            copyText={c[copyText]}
          />
        ))}
        <div className={backButton}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={() => props.history.push(`/palette/${colors.id}`)}
          >
            Back
          </Button>
        </div>
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
