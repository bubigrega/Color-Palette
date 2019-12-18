import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ColorPickerForm from "./ColorPickerForm";
import arrayMove from "array-move";
import DragableColorList from "./DragableColorList";
import CreatePaletteNav from "./CreatePaletteNav";

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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const CreatePalette = ({ maxColors = 20, palettes, addPalette, history }) => {
  const [open, setOpen] = useState(true);
  const [pickedColors, setPickedColors] = useState(palettes[0].colors);
  //   [
  //   { color: "#0000ff", name: "Blue" },
  //   { color: "#ff0000", name: "Red" },
  //   { color: "#00ff00", name: "Green" }
  // ]);
  let colorsAreFull = pickedColors.length >= maxColors;
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

  const handleSavePalette = (data, emoji) => {
    const newPalette = {
      emoji: emoji.native,
      colors: pickedColors,
      ...data
    };
    addPalette(newPalette);
    history.push("/");
  };

  const handleClearPalette = () => setPickedColors([]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <CreatePaletteNav
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        classes={classes}
        handleSavePalette={handleSavePalette}
        palettes={palettes}
      />
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
          <Typography variant="h4" gutterBottom>
            Design Palette
          </Typography>
          <ColorPickerForm
            handelAddColor={handelAddColor}
            pickedColors={pickedColors}
            handleClearPalette={handleClearPalette}
            palettes={palettes}
            colorsAreFull={colorsAreFull}
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
