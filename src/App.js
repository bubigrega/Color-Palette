import React from "react";
import ColorPalettes from "./ColorPallete";
import Palette from "./Palette";

function App() {
  return (
    <div className="App">
      <Palette {...ColorPalettes[0]} />
    </div>
  );
}

export default App;
