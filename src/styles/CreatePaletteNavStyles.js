import { DRAWER_WIDTH, DRAWER_WIDTH_MEDIUM } from "../constants";
import sizes from "./mediaQueryHelper";

const drawerWidth = DRAWER_WIDTH;
const drawerWidthMedium = DRAWER_WIDTH_MEDIUM;

export const createStyles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    height: "64px"
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
    }),
    [sizes.down("sm")]: {
      width: `calc(100% - ${drawerWidthMedium}px)`,
      marginLeft: drawerWidthMedium
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  link: {
    textDecoration: "none"
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "5px"
  }
});
