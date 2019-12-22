import sizes from "./mediaQueryHelper";
export default {
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
    width: "50%",
    [sizes.down("sm")]: {
      width: "100%"
    }
  },
  button: {
    fontSize: "1.8rem"
  }
};
