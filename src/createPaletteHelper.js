import chroma from "chroma-js";

const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = palette => {
  let newPalette = {
    paletteName: palette.name,
    id: palette.id,
    emoji: palette.emoji,
    colors: {}
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of palette.colors) {
    let colorLevels = changeColors(color, levels.length);
    for (let index in colorLevels) {
      newPalette.colors[levels[index]].push({
        id: colorLevels[index].toLocaleLowerCase().replace(" ", "-"),
        hex: colorLevels[index],
        name: `${color.name} ${levels[index]}`,
        rgb: chroma(colorLevels[index]).css(),
        hsl: chroma(colorLevels[index]).css("hsl"),
        rgba: chroma(colorLevels[index]).css("rgba")
      });
    }
  }

  return newPalette;
};

const changeColors = (color, numofColors) => {
  return chroma
    .scale(["white", color.color, "black"])
    .mode("lab")
    .padding([0.4, 0.3])
    .correctLightness()
    .colors(numofColors);
};

export default generatePalette;
