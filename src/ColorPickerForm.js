import React, { useRef } from "react";
import useForm from "react-hook-form";
import Button from "@material-ui/core/Button";
import chroma from "chroma-js";
import { ChromePicker } from "react-color";
import TextField from "@material-ui/core/TextField";
import { RHFInput } from "react-hook-form-input";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/ColorPickerFormStyles";

import htmlColors from "./htmlColors";

const ColorPickerForm = props => {
  const {
    handelAddColor,
    handleClearPalette,
    pickedColors,
    palettes,
    colorsAreFull,
    classes
  } = props;

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
    let allColors = palettes
      .map(p => p.colors)
      .flat()
      .concat(htmlColors);
    let newColor = allColors[Math.floor(Math.random() * allColors.length)];
    setValue("colorName", newColor.name);
    setValue("chromePicker", { hex: newColor.color });
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
        margin="normal"
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
          backgroundColor: colorsAreFull ? "gray" : watch("chromePicker").hex,
          color:
            chroma(watch("chromePicker").hex).luminance() >= 0.6
              ? "black"
              : "white"
        }}
      >
        {colorsAreFull ? "Palette Full" : "Add Color"}
      </Button>
    </form>
  );
};

export default withStyles(styles)(ColorPickerForm);
