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
import { ChromePicker } from "react-color";
import DraggableColorBox from "./DraggableColorBox";
import TextField from "@material-ui/core/TextField";
import useForm from "react-hook-form";
import { RHFInput } from "react-hook-form-input";

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
    height: `calc(100vh - ${theme.spacing(3)}px)`
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
  },
  colorBoxes: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)"
  }
}));

const CreatePalette = props => {
  const [open, setOpen] = useState(true);
  const [pickedColors, setPickedColors] = useState([]);
  const { register, handleSubmit, errors, reset, setValue, watch } = useForm({
    mode: "onBlur",
    defaultValues: {
      chromePicker: "#00ff00"
    }
  });
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
        color: data.chromePicker,
        name: data.colorName
      }
    ]);
    reset();
  };

  const handleSavePalette = () => {
    const paletteName = "New Palette";
    const newPalette = {
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      colors: pickedColors
    };
    props.addPalette(newPalette);
    props.history.push("/");
  };
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
          <Button onClick={handleSavePalette}>Save Palette</Button>
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
          <div>
            <Button variant="contained" color="secondary">
              Remove Colors
            </Button>
            <Button variant="contained" color="primary">
              Pick Random Color
            </Button>
          </div>
          <form onSubmit={handleSubmit(handelAddColor)}>
            <RHFInput
              as={
                <ChromePicker
                  color={watch("chromePicker")}
                  onChangeComplete={value =>
                    setValue("chromePicker", value.hex)
                  }
                />
              }
              name="chromePicker"
              register={register({
                validate: value =>
                  pickedColors.find(c => c.color === value) === undefined ||
                  "Color already picked"
              })}
              setValue={setValue}
              mode={"onChange"}
            />
            <TextField
              variant="filled"
              fullWidth
              margin="none"
              error={!!errors.colorName || !!errors.chromePicker}
              helperText={
                (errors.colorName && `${errors.colorName.message}`) ||
                (errors.chromePicker && `${errors.chromePicker.message}`)
              }
              label="Color name"
              id="color-name"
              name="colorName"
              inputRef={register({
                required: "Color name is required",
                validate: value =>
                  pickedColors.find(
                    c => c.name.toLowerCase() === value.toLowerCase()
                  ) === undefined || "Color name taken"
              })}
            />
            <Button
              fullWidth
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              style={{ backgroundColor: watch("chromePicker") }}
            >
              Add Color
            </Button>
          </form>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.colorBoxes}>
          {pickedColors.map((c, i) => (
            <DraggableColorBox key={i} color={c.color} colorName={c.name} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CreatePalette;
