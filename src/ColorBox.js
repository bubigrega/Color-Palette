import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";

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
    const { name, background, copyText, id, paletteId, show } = this.props;
    const { copied } = this.state;
    return (
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{copyText}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <CopyToClipboard onCopy={this.handelCopyState} text={copyText}>
            <button disabled={copied} className="copy-button">
              Copy
            </button>
          </CopyToClipboard>
          {show && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={event => event.stopPropagation()}
            >
              <span className="see-more">MORE</span>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default ColorBox;
