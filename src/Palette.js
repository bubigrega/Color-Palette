import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
import Footer from "./Footer";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      style: "hex"
    };
    this.handelLevel = this.handelLevel.bind(this);
    this.handelStyle = this.handelStyle.bind(this);
  }
  handelLevel(evt, value) {
    this.setState({ level: value });
  }

  handelStyle(style) {
    this.setState(state => ({ style }));
  }

  render() {
    let { level, style } = this.state;
    let colors = this.props.colors[level].map(c => (
      <ColorBox key={c.id} background={c.hex} style={c[style]} name={c.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          handelLevel={this.handelLevel}
          handelStyle={this.handelStyle}
        />
        <div className="Palette-colors">{colors}</div>
        <Footer name={this.props.paletteName} emoji={this.props.emoji} />
      </div>
    );
  }
}

export default Palette;
