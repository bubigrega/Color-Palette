import React from "react";
import ColorPalettes from "./ColorPallete";
import Palette from "./Palette";
import create from "./createPaletteHelper";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />

      <Palette {...create(ColorPalettes[0])} />
    </div>
  );
}

export default App;
