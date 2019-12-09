import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./styles/PaletteStyles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      copyText: "hex"
    };
    this.handelLevel = this.handelLevel.bind(this);
    this.handelCopyText = this.handelCopyText.bind(this);
  }
  handelLevel(evt, value) {
    this.setState({ level: value });
  }

  handelCopyText(copyText) {
    this.setState(state => ({ copyText }));
  }

  render() {
    let { colors, paletteName, emoji, id, classes } = this.props;
    let { level, copyText } = this.state;
    let allColors = colors[level].map(c => (
      <ColorBox
        show
        key={c.name}
        background={c.hex}
        copyText={c[copyText]}
        name={c.name}
        paletteId={id}
        id={c.id}
      />
    ));
    console.log(classes);
    return (
      <div className={classes.palette}>
        <Navbar
          show
          level={level}
          handelLevel={this.handelLevel}
          handelCopyText={this.handelCopyText}
        />
        <div className={classes.paletteColors}>{allColors}</div>
        <Footer name={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
