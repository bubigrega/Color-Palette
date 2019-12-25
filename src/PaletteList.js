import React, { useState } from "react";
import PaletteInfo from "./PaletteInfo";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./styles/PaletteListStyles";
const useStyles = makeStyles(styles);

const PaletteList = props => {
  const [open, setOpen] = useState(false);
  const [paletteToDelete, setPaletteToDelete] = useState({
    name: "",
    id: ""
  });
  const classes = useStyles();
  const { palettes } = props;

  const confirmDelete = () => {
    setOpen(false);
    props.handleDeletePalette(paletteToDelete.id);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link className={classes.navLink} to="/palette/new">
            Create new
          </Link>
        </nav>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Delete {paletteToDelete.name} palette?</DialogTitle>
          <DialogActions>
            <Button onClick={confirmDelete} variant="contained" color="primary">
              OK
            </Button>
            <Button
              onClick={() => setOpen(false)}
              variant="contained"
              color="secondary"
            >
              NOOO
            </Button>
          </DialogActions>
        </Dialog>
        <TransitionGroup className={classes.palettes}>
          {palettes.map(p => (
            <CSSTransition key={p.id} classNames="fade" timeout={500}>
              <PaletteInfo
                key={p.id}
                {...p}
                handleDeletePalette={() => {
                  setPaletteToDelete({ name: p.paletteName, id: p.id });
                  setOpen(true);
                }}
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
