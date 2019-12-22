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
import stylesFun from "./styles/CreatePaletteStyles";

const useStyles = makeStyles(stylesFun);

const CreatePalette = ({ maxColors = 20, palettes, addPalette, history }) => {
  const [open, setOpen] = useState(true);
  const [pickedColors, setPickedColors] = useState(palettes[0].colors);

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
