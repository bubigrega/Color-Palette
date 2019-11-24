import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  render() {
    let colors = this.props.colors.map(c => (
      <ColorBox key={c.id} background={c.color} name={c.name} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{colors}</div>
      </div>
    );
  }
}

export default Palette;
