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
import { DialogContent } from "@material-ui/core";
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

  const handleAddPaletteToDelete = palette => {
    setPaletteToDelete({ ...palette });
    setOpen(true);
  };

  const handleChangePath = id => {
    props.history.push(`/palette/${id}`);
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
          <DialogTitle>
            Delete {paletteToDelete.paletteName} palette?
          </DialogTitle>
          <DialogContent>
            <PaletteInfo palette={paletteToDelete} show={false} />
          </DialogContent>
          <DialogActions>
            <Button onClick={confirmDelete} variant="contained" color="primary">
              DELETE
            </Button>
            <Button
              onClick={() => setOpen(false)}
              variant="contained"
              color="secondary"
            >
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
        <TransitionGroup className={classes.palettes}>
          {palettes.map(p => (
            <CSSTransition key={p.id} classNames="fade" timeout={500}>
              <PaletteInfo
                key={p.id}
                palette={p}
                show
                handleDeletePalette={handleAddPaletteToDelete}
                handleChangePath={handleChangePath}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};
export default PaletteList;
