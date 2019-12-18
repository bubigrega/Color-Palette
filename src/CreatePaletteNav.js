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

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    height: "64px"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
      // height: "64px"
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  link: {
    textDecoration: "none"
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

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
            Create Palette
          </Typography>
          <div className={classes.buttons}>
            <SavePaletteDialog
              palettes={palettes}
              handleSavePalette={handleSavePalette}
            />
            <Link to="/" className={classes.link}>
              <Button variant="contained">Go Back</Button>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default CreatePaletteNav;
