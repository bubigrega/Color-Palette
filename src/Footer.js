import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <AppBar position="sticky" style={{ bottom: "0" }}>
        <Toolbar>
          <Typography variant="h6" style={{ marginLeft: "auto" }}>
            {this.props.emoji + " " + this.props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Footer;
