import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.handleCopyState = this.handleCopyState.bind(this);
  }
  handleCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    console.log(background);
    return (
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <CopyToClipboard onCopy={this.handleCopyState} text={background}>
            <button disabled={copied} className="copy-button">
              Copy
            </button>
          </CopyToClipboard>
        </div>
        <span className="see-more">MORE</span>
      </div>
    );
  }
}

export default ColorBox;
