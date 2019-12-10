export default {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    color: "white"
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  nav: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  navLink: {
    color: "white",
    fontSize: "1rem",
    textDecoration: "none"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridRowGap: "0.5rem",
    gridColumnGap: "1rem"
  }
};
