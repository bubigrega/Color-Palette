import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    position: "relative",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s"
    }
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? "black" : "white",
    position: "absolute",
    background: "rgba(255, 255, 255, 0.3)",
    border: "none",
    right: "0",
    bottom: "0",
    padding: "4px",
    textTransform: "uppercase"
  },
  dark: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? "black" : "white"
  },
  boxContent: {
    color: props =>
      chroma(props.background).luminance() <= 0.1 ? "white" : "black",
    position: "absolute",
    width: "100%",
    padding: "10px",
    bottom: "0",
    left: "0",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() > 0.6 ? "black" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginTop: "-15px",
    marginLeft: "-50px",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.3)",
    outline: "none",
    fontSize: "1rem",
    lineHeight: "20px",
    texttransform: "uppercase",
    border: "none",
    opacity: "0",
    cursor: "pointer"
  },
  copyOverlay: {
    width: "100%",
    height: "100%",
    opacity: "0",
    zIndex: "0",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)"
  },
  show: {
    position: "absolute",
    opacity: "1",
    zIndex: "10",
    transform: "scale(10)"
  },
  copyMsg: {
    position: "fixed",
    right: "0",
    bottom: "0",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    fontSize: "4rem",
    opacity: "0",
    transform: "scale(0.1)",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      textTransform: "uppercase",
      padding: "1rem",
      marginBottom: "0"
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    }
  },
  showMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.3s ease-in-out",
    transitionDelay: "0.2s"
  }
};

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
