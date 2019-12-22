import React from "react";
import PaletteInfo from "./PaletteInfo";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styles from "./styles/PaletteListStyles";

const useStyles = makeStyles(styles);

const PaletteList = props => {
  const classes = useStyles();
  const { palettes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link className={classes.navLink} to="/palette/new">
            Create new
          </Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(p => (
            <PaletteInfo
              key={p.id}
              {...p}
              handleDeletePalette={() => props.handleDeletePalette(p.id)}
              handleClick={() => props.history.push(`/palette/${p.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PaletteList;
