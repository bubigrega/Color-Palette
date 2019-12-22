import sizes from "./mediaQueryHelper";

export default {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  paletteColors: {
    flexGrow: "1",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    [sizes.down("sm")]: {
      gridTemplateColumns: "1fr 1fr"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  }
};
