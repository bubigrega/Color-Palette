import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useForm from "react-hook-form";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const SavePaletteDialog = props => {
  const { palettes, handleSavePalette } = props;
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange"
  });
  const [open, setOpen] = useState("");
  const [data, setData] = useState({});

  const handleOpenName = () => {
    setOpen("name");
  };

  const handleCloseName = data => {
    console.log("caled");
    const paletteName = data.paletteName;
    setData({
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-")
    });
    setOpen("emoji");
  };

  const handleClose = () => {
    setOpen("");
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpenName}>
        Save Palette
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="pick-color"
        open={open === "name"}
      >
        <form onSubmit={handleSubmit(handleCloseName)}>
          <DialogTitle id="pick-color">Pick Palette Name</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Pick nice name for your beautiful palette
            </DialogContentText>

            <TextField
              fullWidth
              autoFocus
              spellCheck={false}
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
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Dialog open={open === "emoji"}>
        <Picker
          type="submit"
          native
          showPreview={false}
          ref={register}
          onClick={emoji => {
            handleSavePalette(data, emoji);
          }}
        />
      </Dialog>
    </div>
  );
};

export default SavePaletteDialog;
