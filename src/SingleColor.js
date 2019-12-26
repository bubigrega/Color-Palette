import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";

import styles from "./styles/SingleColorStyles";

const useStyles = makeStyles(styles);

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
            key={c.hex}
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
