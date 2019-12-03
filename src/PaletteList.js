import React from "react";
import PaletteInfo from "./PaletteInfo";
import { makeStyles } from "@material-ui/core/styles";

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
  }
});

const PaletteList = props => {
  const { root, container, nav, palettes } = useStyles();
  const { InitialPalettes } = props;

  return (
    <div className={root}>
      <div className={container}>
        <nav className={nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={palettes}>
          {InitialPalettes.map(p => (
            <PaletteInfo
              key={p.id}
              {...p}
              handleClick={() => props.history.push(`/palette/${p.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PaletteList;
