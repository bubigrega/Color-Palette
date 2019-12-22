import { DRAWER_WIDTH, DRAWER_WIDTH_MEDIUM } from "../constants";
import sizes from "./mediaQueryHelper";

const drawerWidth = DRAWER_WIDTH;
const drawerWidthMedium = DRAWER_WIDTH_MEDIUM;

export default theme => ({
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
    }),
    [sizes.down("sm")]: {
      width: `calc(100% - ${drawerWidthMedium}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [sizes.down("sm")]: {
      width: drawerWidthMedium
    }
  },
  drawerPaper: {
    width: drawerWidth,
    [sizes.down("sm")]: {
      width: drawerWidthMedium
    }
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
    height: `calc(100vh - 64px)`,
    [sizes.down("sm")]: {
      marginLeft: -drawerWidthMedium
    }
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});
