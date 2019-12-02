import React from "react";
import PaletteInfo from "./PaletteInfo";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
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
    justifyContent: "space-between"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridRowGap: "0.5rem",
    gridColumnGap: "1rem"
  },
  link: {
    textDecoration: "none"
  }
});

const PaletteList = props => {
  const { root, container, nav, palettes, link } = useStyles();
  const { InitialPalettes } = props;
  return (
    <div className={root}>
      <div className={container}>
        <nav className={nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={palettes}>
          {InitialPalettes.map(p => (
            <Link exact to={`/palette/${p.id}`} key={p.id} className={link}>
              <PaletteInfo {...p} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PaletteList;
