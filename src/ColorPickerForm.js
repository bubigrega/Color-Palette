import React from "react";
import useForm from "react-hook-form";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import TextField from "@material-ui/core/TextField";
import { RHFInput } from "react-hook-form-input";

const ColorPickerForm = ({
  handelAddColor,
  handleClearPalette,
  pickedColors,
  palettes
}) => {
  const { register, handleSubmit, errors, setValue, watch, reset } = useForm({
    mode: "onBlur",
    defaultValues: {
      chromePicker: { hex: "#0000ff" }
    }
  });

  const onSubmit = data => {
    handelAddColor(data);
    reset();
  };
  const addRandomColor = () => {
    let allColors = [];
    for (let palette of palettes) {
      let colors = palette.colors;
      for (let color of colors) {
        allColors.push(color);
      }
    }
    let newColor = allColors[Math.floor(Math.random() * allColors.length)];
    setValue("chromePicker", { hex: newColor.color });
  };
  return (
    <form name="addColor" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Button
          onClick={handleClearPalette}
          variant="contained"
          color="secondary"
        >
          Remove Colors
        </Button>
        <Button onClick={addRandomColor} variant="contained" color="primary">
          Pick Random Color
        </Button>
      </div>
      <RHFInput
        as={
          <ChromePicker
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
        inputRef={register({
          required: "Color name is required",
          validate: value =>
            pickedColors.every(
              c => c.name.toLowerCase() !== value.toLowerCase()
            ) || "Color name taken"
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
  );
};

export default ColorPickerForm;
