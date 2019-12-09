import React from "react";
import PaletteInfo from "./PaletteInfo";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteListStyles";

const useStyles = makeStyles(styles);

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
