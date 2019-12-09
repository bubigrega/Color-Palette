import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/FooterStyles.js";

const useStyles = makeStyles(styles);

const Footer = props => {
  const classes = useStyles();
  const { emoji, name, colorName } = props;
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.rightText}>
          {`${emoji} ${name}`}
          {colorName ? (
            <span className={classes.colorName}> {colorName}</span>
          ) : (
            ""
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
