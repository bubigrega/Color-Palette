import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import SavePaletteDialog from "./SavePaletteDialog";

import { createStyles } from "./styles/CreatePaletteNavStyles";

const useStyles = makeStyles(createStyles);

const CreatePaletteNav = ({
  handleDrawerOpen,
  open,
  handleSavePalette,
  palettes
}) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.root}>
          <Typography variant="h5" noWrap>
            Create
          </Typography>
          <div className={classes.buttons}>
            <SavePaletteDialog
              palettes={palettes}
              handleSavePalette={handleSavePalette}
            />
            <Link to="/" className={classes.link}>
              <Button variant="contained">Back</Button>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default CreatePaletteNav;
