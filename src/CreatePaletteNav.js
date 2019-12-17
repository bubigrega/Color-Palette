import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useForm from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      height: "64px"
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
  }
}));

const CreatePaletteNav = ({
  handleDrawerOpen,
  open,
  handleSavePalette,
  palettes
}) => {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar className={classes.root}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap>
          Create Palette
        </Typography>
        <form name="savePalette" onSubmit={handleSubmit(handleSavePalette)}>
          <TextField
            id="paletteName"
            name="paletteName"
            inputRef={register({
              required: "Name is required",
              validate: value =>
                palettes.every(p => p.paletteName !== value) ||
                "Palette name used"
            })}
            error={!!errors.paletteName}
            helperText={errors.paletteName && `${errors.paletteName.message}`}
          />
          <Button variant="contained" color="secondary" type="submit">
            Save
          </Button>
          <Link to="/" className={classes.link}>
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default CreatePaletteNav;
