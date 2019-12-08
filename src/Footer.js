import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Footer extends Component {
  render() {
    const { emoji, name, colorName } = this.props;
    return (
      <AppBar position="sticky" style={{ bottom: "0" }}>
        <Toolbar>
          <Typography variant="h6" style={{ marginLeft: "auto" }}>
            {`${emoji} ${name}`}
            {colorName ? (
              <span style={{ textTransform: "capitalize" }}> {colorName}</span>
            ) : (
              ""
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Footer;
