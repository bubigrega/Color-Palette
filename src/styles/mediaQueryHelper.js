export default {
  //   up: {},
  down(width) {
    const sizes = {
      xs: "600px",
      sm: "960px",
      md: "1280px",
      lg: "1960px"
    };

    return `@media (max-width: ${sizes[width]})`;
  }
};
