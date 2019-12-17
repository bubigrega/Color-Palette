import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useForm from "react-hook-form";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
});

const SavePaletteDialog = props => {
  const classes = useStyles();
  const { onClose, handleOpen, open, handleSavePalette, palettes } = props;
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange"
  });

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="pick-color" open={open}>
      <DialogTitle id="pick-color">Name</DialogTitle>
      <form onSubmit={handleSubmit(handleSavePalette)}>
        <DialogContent>
          <DialogContentText>Pick palette name</DialogContentText>

          <TextField
            autoFocus
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
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SavePaletteDialog;
