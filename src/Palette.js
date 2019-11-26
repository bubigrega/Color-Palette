import React, { Component } from "react";
import ColorBox from "./ColorBox";

import "./Palette.css";
import { Slider } from "@material-ui/core";

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lumi: 500
    };
    this.handleLumi = this.handleLumi.bind(this);
  }
  handleLumi(evt, value) {
    this.setState({ lumi: value });
  }

  render() {
    let { lumi } = this.state;
    console.log(lumi);
    let colors = this.props.colors[lumi].map(c => (
      <ColorBox key={c.id} background={c.color} name={c.name} />
    ));
    return (
      <div className="Palette">
        <Slider
          min={100}
          max={900}
          step={100}
          value={lumi}
          onChange={this.handleLumi}
          color="secondary"
          marks={true}
        />
        <div className="Palette-colors">{colors}</div>
      </div>
    );
  }
}

export default Palette;
