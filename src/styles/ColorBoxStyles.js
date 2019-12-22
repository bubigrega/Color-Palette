import chroma from "chroma-js";
import sizes from "./mediaQueryHelper";

export default {
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
    fontSize: "12px",
    [sizes.down("xs")]: {
      paddingBottom: "2px"
    }
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
    zIndex: "-1",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)"
  },
  show: {
    position: "absolute",
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)"
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
    zIndex: "-1",
    transform: "scale(0.1)",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      textTransform: "uppercase",
      padding: "1rem",
      marginBottom: "0",
      [sizes.down("sm")]: {
        fontSize: "3.5rem"
      }
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
