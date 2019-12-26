import sizes from "./mediaQueryHelper";
import background from "./background.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    backgroundColor: "#2715EE",
    /* background by SVGBackgrounds.com */
    backgroundImage: `url(${background})`,
    minHeight: "100vh",
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
    flexWrap: "wrap",
    [sizes.down("md")]: {
      width: "60%"
    },
    [sizes.down("sm")]: {
      width: "70%"
    },
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  nav: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    margin: "0.5rem 0 0.5rem 0",
    padding: "0.8rem",
    "& h1": {
      fontSize: "2rem",
      margin: "0.4rem"
    }
  },
  navButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [sizes.down("xs")]: {
      flexDirection: "column"
    }
  },
  navLink: {
    color: "white",
    margin: "0.5rem",
    textDecoration: "none"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridRowGap: "0.5rem",
    gridColumnGap: "1rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "1fr 1fr"
    },
    [sizes.down("sm")]: {
      gridTemplateColumns: "1fr 1fr"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  }
};
