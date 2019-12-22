import sizes from "./mediaQueryHelper";

export default {
  colorBoxes: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    overflow: "hidden",
    [sizes.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "auto auto auto auto"
      // overflow: "show"
    },
    [sizes.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto auto auto auto"
      // overflow: "show"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto auto auto auto"
      // overflow: "show"
    }
  }
};
