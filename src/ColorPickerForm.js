import React, { useRef } from "react";
import useForm from "react-hook-form";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import TextField from "@material-ui/core/TextField";
import { RHFInput } from "react-hook-form-input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  picker: {
    width: "90% !important",
    margin: "0.3rem auto"
  },
  buttons: {
    width: "100%"
  },
  topButton: {
    width: "50%"
  },
  button: {
    fontSize: "1.8rem"
  }
});

const ColorPickerForm = ({
  handelAddColor,
  handleClearPalette,
  pickedColors,
  palettes,
  colorsAreFull
}) => {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    reset,
    triggerValidation
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      chromePicker: { hex: "#0000ff" }
    }
  });

  const classes = useStyles();
  const colorNameRef = useRef();
  const clearColorPalette = () => {
    handleClearPalette();
    reset();
  };
  const onSubmit = data => {
    handelAddColor(data);
    reset();
  };
  const addRandomColor = () => {
    let allColors = palettes.map(p => p.colors).flat();
    let newColor = allColors[Math.floor(Math.random() * allColors.length)];
    setValue("chromePicker", { hex: newColor.color });
    setValue("colorName", newColor.name);
    colorNameRef.current.focus();
    triggerValidation();
  };

  return (
    <form
      className={classes.root}
      name="addColor"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={classes.buttons}>
        <Button
          className={classes.topButton}
          onClick={clearColorPalette}
          variant="contained"
          color="secondary"
        >
          Remove Colors
        </Button>
        <Button
          className={classes.topButton}
          disabled={colorsAreFull}
          onClick={addRandomColor}
          variant="contained"
          color="primary"
        >
          Pick Random
        </Button>
      </div>
      <RHFInput
        as={
          <ChromePicker
            className={classes.picker}
            color={watch("chromePicker")}
            onChangeComplete={value => setValue("chromePicker", value)}
            disableAlpha
          />
        }
        name="chromePicker"
        register={register({
          validate: value => {
            return (
              pickedColors.every(c => c.color !== value.hex) ||
              "Color already picked"
            );
          }
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
          (errors.colorName && errors.colorName.message) ||
          (errors.chromePicker && `${errors.chromePicker.message}`)
        }
        label="Color name"
        id="color-name"
        name="colorName"
        spellCheck={false}
        inputRef={e => {
          register(e, {
            required: "Color name is required",
            validate: value =>
              pickedColors.every(
                c => c.name.toLowerCase() !== value.toLowerCase()
              ) || "Color name taken"
          });
          colorNameRef.current = e;
        }}
      />
      <Button
        fullWidth
        disabled={colorsAreFull}
        className={classes.button}
        color="primary"
        type="submit"
        size="large"
        variant="contained"
        style={{
          backgroundColor: colorsAreFull ? "gray" : watch("chromePicker").hex
        }}
      >
        {colorsAreFull ? "Palette Full" : "Add Color"}
      </Button>
    </form>
  );
};

export default ColorPickerForm;
