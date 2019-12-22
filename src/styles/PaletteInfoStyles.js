export default {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    position: "relative",
    padding: "0.5rem",
    overflow: "none",
    "&:hover": {
      cursor: "pointer"
    },
    "&:hover svg": {
      opacity: "1",
      transition: "all 0.5s ease-in-out"
    }
  },
  colors: {
    backgroundColor: "lightgray",
    position: "relative",
    height: "150px",
    borderRadius: "5px",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)"
  },
  tile: {
    display: "inline-block"
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0",
    color: "black",
    position: "relative",
    fontSize: "1rem",
    marginTop: "0.5rem"
  },
  emoji: {
    fontSize: "1.2rem",
    marginLeft: "0.5rem"
  },
  deleteIcon: {
    position: "absolute",
    top: "0",
    right: "0",
    backgroundColor: "black",
    color: "white",
    opacity: "0",
    zIndex: "10",
    fontSize: "3rem",
    padding: "0.4rem",
    borderRadius: "3px"
  }
};
