import chroma from "chroma-js";
import sizes from "./mediaQueryHelper";

export default {
  root: {
    position: "relative",
    "&:hover svg": {
      paddingBottom: "0.3rem",
      paddingRight: "0.2rem",
      transform: "scale(2.5)",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      [sizes.down("sm")]: {
        transform: "scale(1.5)"
      }
    }
  },
  boxContent: {
    color: props =>
      chroma(props.color).luminance() <= 0.2 ? "white" : "#515154",
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px",
    bottom: "0",
    left: "0",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "0.8rem",
    [sizes.down("sm")]: {
      paddingBottom: "2px"
    }
  }
};
