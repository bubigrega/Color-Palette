import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useForm from "react-hook-form";
import ColorPickerForm from "./ColorPickerForm";
import DragableColorList from "./DragableColorList";
import { arrayMove } from "array-move";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    height: `calc(100vh - 64px)`
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  drawerLayout: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const CreatePalette = props => {
  const [open, setOpen] = useState(true);
  const [pickedColors, setPickedColors] = useState(props.palettes[0].colors);
  //   [
  //   { color: "#0000ff", name: "Blue" },
  //   { color: "#ff0000", name: "Red" },
  //   { color: "#00ff00", name: "Green" }
  // ]);
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handelAddColor = data => {
    setPickedColors([
      ...pickedColors,
      {
        color: data.chromePicker.hex,
        name: data.colorName
      }
    ]);
  };
  const handleDeleteColor = name => {
    setPickedColors(pickedColors.filter(c => c.name !== name));
  };

  const handleSavePalette = data => {
    const paletteName = data.paletteName;
    const newPalette = {
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      colors: pickedColors
    };
    props.addPalette(newPalette);
    props.history.push("/");
  };

  const handleClearPalette = () => setPickedColors([]);

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <Typography variant="h6" noWrap>
            pick color
          </Typography>
          <form name="savePalette" onSubmit={handleSubmit(handleSavePalette)}>
            <TextField
              id="paletteName"
              name="paletteName"
              inputRef={register({
                required: "Name is required",
                validate: value =>
                  props.palettes.every(p => p.paletteName !== value) ||
                  "Palette name used"
              })}
              error={!!errors.paletteName}
              helperText={errors.paletteName && `${errors.paletteName.message}`}
            />
            <Button variant="contained" color="secondary" type="submit">
              Save Palette
            </Button>
          </form>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.drawerLayout}>
          <Typography variant="h4">Design Palette</Typography>
          <ColorPickerForm
            handelAddColor={handelAddColor}
            pickedColors={pickedColors}
            handleClearPalette={handleClearPalette}
            palettes={props.palettes}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DragableColorList
          onSortEnd={({ oldIndex, newIndex }) => {
            setPickedColors(arrayMove(pickedColors, oldIndex, newIndex));
          }}
          axis="xy"
          handleDeleteColor={handleDeleteColor}
          pickedColors={pickedColors}
        />
      </main>
    </div>
  );
};

export default CreatePalette;
