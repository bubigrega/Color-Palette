import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { AppBar, Typography, Toolbar, Slider } from "@material-ui/core";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.handelLevel = this.handelLevel.bind(this);
  }
  handelLevel(evt, value) {
    this.setState({ level: value });
  }

  render() {
    let { level } = this.state;
    let colors = this.props.colors[level].map(c => (
      <ColorBox key={c.id} background={c.color} name={c.name} />
    ));
    return (
      <div className="Palette">
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h5">colorpicker</Typography>
            <Typography
              variant="h3"
              style={{ width: "10%", margin: "0 1rem 0 2rem" }}
            >
              <Slider
                min={100}
                max={900}
                step={100}
                defaultValue={500}
                value={level}
                onChange={this.handelLevel}
                color="secondary"
                marks
                use
              />
            </Typography>
            <Typography variant="h6">{level}</Typography>
          </Toolbar>
        </AppBar>
        <div className="Palette-colors">{colors}</div>
      </div>
    );
  }
}

export default Palette;
