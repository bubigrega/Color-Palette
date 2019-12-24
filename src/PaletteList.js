import React from "react";
import PaletteInfo from "./PaletteInfo";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
        <TransitionGroup className={classes.palettes}>
          {palettes.map(p => (
            <CSSTransition key={p.id} classNames="fade" timeout={500}>
              <PaletteInfo
                key={p.id}
                {...p}
                handleDeletePalette={() => props.handleDeletePalette(p.id)}
                handleClick={() => props.history.push(`/palette/${p.id}`)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};
export default PaletteList;
