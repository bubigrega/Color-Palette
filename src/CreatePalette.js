import React, { useState, useEffect } from "react";
import clsx from "clsx";
import arrayMove from "array-move";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import styles from "./styles/CreatePaletteStyles";

import CreatePaletteNav from "./CreatePaletteNav";
import DragableColorList from "./DragableColorList";
import ColorPickerForm from "./ColorPickerForm";

const useStyles = makeStyles(styles);

const CreatePalette = ({ maxColors = 20, palettes, addPalette, history }) => {
  const [open, setOpen] = useState(true);
  const [pickedColors, setPickedColors] = useState(
    () => JSON.parse(localStorage.getItem("picked")) || []
  );

  const classes = useStyles();
  useEffect(() => {
    localStorage.setItem("picked", JSON.stringify(pickedColors));
  }, [pickedColors]);

  let colorsAreFull = pickedColors.length >= maxColors;

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
    setPickedColors([]);
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
          distance={5}
          handleDeleteColor={handleDeleteColor}
          pickedColors={pickedColors}
        />
      </main>
    </div>
  );
};

export default CreatePalette;
