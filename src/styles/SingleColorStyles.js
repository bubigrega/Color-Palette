import sizes from "./mediaQueryHelper";

export default {
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  colorsGrid: {
    flexGrow: "1",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    [sizes.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "repeat(5, 1fr)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(10, 1fr)"
    }
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray"
  }
};
