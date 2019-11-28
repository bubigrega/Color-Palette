import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Slider,
  Select,
  MenuItem
} from "@material-ui/core";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: "hex"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState(state => ({ colorValue: event.target.value }));
    this.props.handelStyle(event.target.value);
  }

  render() {
    let { handelLevel, level } = this.props;
    let { colorValue } = this.state;

    return (
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h5">colorpicker</Typography>
            <Typography
              variant="h3"
              style={{
                width: "10%",
                minWidth: "150px",
                margin: "0 1rem 0 2rem"
              }}
            >
              <Slider
                min={100}
                max={900}
                step={100}
                defaultValue={500}
                value={level}
                onChange={handelLevel}
                color="secondary"
                marks
              />
            </Typography>
            <Typography variant="h6">{level}</Typography>
            <Typography style={{ width: "100%" }} />
            <Select
              value={colorValue}
              onChange={this.handleChange}
              color="secondary"
              style={{ color: "white" }}
            >
              <MenuItem value="hex" name="hex">
                HEX #f5fe5f
              </MenuItem>
              <MenuItem value="rgb" name="rgb">
                RGB rgb(255, 22, 112)
              </MenuItem>
              <MenuItem value="rgba" name="rgba">
                RGBA rgba(255, 22, 112, 1)
              </MenuItem>
              <MenuItem value="hsl" name="hsl">
                HSL hsl(15.65,25%,36.08%)
              </MenuItem>
            </Select>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
