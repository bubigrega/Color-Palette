import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Slider,
  Select,
  MenuItem,
  Snackbar,
  IconButton
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: "hex",
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleChange(event) {
    this.setState(state => ({ colorValue: event.target.value, open: true }));
    this.props.handelStyle(event.target.value);
  }
  handleClose() {
    this.setState(state => ({ open: false }));
  }
  render() {
    let { handelLevel, level } = this.props;
    let { colorValue } = this.state;

    return (
      <div>
        <AppBar position="sticky" style={{ bottom: "auto" }}>
          <Toolbar>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography
                variant="h5"
                style={{ color: "white", outline: "none" }}
              >
                colorpicker
              </Typography>
            </Link>
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
            <Select
              value={colorValue}
              onChange={this.handleChange}
              color="secondary"
              style={{ color: "white", marginLeft: "auto" }}
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
        <Snackbar
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          message={
            <span id="message-id">
              Format changed to {colorValue.toUpperCase()}
            </span>
          }
          open={this.state.open}
          onClose={this.handleClose}
          autoHideDuration={3000}
          color="secondary"
          ContentProps={{ "aria-describedby": "messag-id" }}
          action={
            <IconButton onClick={this.handleClose} color="inherit">
              <Close key="close" aria-label="close" />
            </IconButton>
          }
        ></Snackbar>
      </div>
    );
  }
}

export default Navbar;
