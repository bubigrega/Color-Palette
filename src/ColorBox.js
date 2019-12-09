import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.handelCopyState = this.handelCopyState.bind(this);
  }
  handelCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const {
      name,
      background,
      copyText,
      id,
      paletteId,
      show,
      classes
    } = this.props;
    const { copied } = this.state;
    return (
      <div style={{ background }} className={classes.root}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${copied && classes.show}`}
        />
        <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
          <h1>copied!</h1>
          <p className={classes.dark}>{copyText}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span>{name}</span>
          </div>
          <CopyToClipboard onCopy={this.handelCopyState} text={copyText}>
            <button disabled={copied} className={classes.copyButton}>
              Copy
            </button>
          </CopyToClipboard>
          {show && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={event => event.stopPropagation()}
            >
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ColorBox);
