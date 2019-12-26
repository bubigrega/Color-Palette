import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/NavbarStyles.js";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: "hex",
      open: false
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelClose = this.handelClose.bind(this);
  }
  handelChange(event) {
    this.setState(state => ({ colorValue: event.target.value, open: true }));
    this.props.handelCopyText(event.target.value);
  }
  handelClose() {
    this.setState(state => ({ open: false }));
  }
  render() {
    let { handelLevel, level, show, classes } = this.props;
    let { colorValue } = this.state;

    return (
      <div>
        <AppBar position="sticky" className={classes.root}>
          <Toolbar>
            <Link className={classes.link} to="/">
              <Typography variant="h5" className={classes.navLogo}>
                All Palettes
              </Typography>
            </Link>
            <Typography variant="h3" className={classes.slider}>
              {show && (
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
              )}
            </Typography>
            <Typography variant="h6">{level}</Typography>
            <Select
              value={colorValue}
              onChange={this.handelChange}
              color="secondary"
              className={classes.navSelect}
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
          onClose={this.handelClose}
          autoHideDuration={3000}
          color="secondary"
          ContentProps={{ "aria-describedby": "messag-id" }}
          action={
            <IconButton onClick={this.handelClose} color="inherit">
              <Close key="close" aria-label="close" />
            </IconButton>
          }
        ></Snackbar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
