import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import cn from "classnames";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topBar: {
    paddingTop: "10px",
    marginBottom: "5px",
  },
  topBarLeft: {
    display: "flex",
    alignItems: "center",
  },
  topBarRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  paddingRight: {
    paddingRight: "20px",
  },
  paddingLeft: {
    paddingLeft: "10px",
  },
  p10: {
    paddingLeft: "5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Topbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.topBar}>
        <Grid item sm={6} className={cn(classes.topBarLeft)}>
          <Box className={classes.paddingLeft}>
            <GitHubIcon />
          </Box>
          <Link
            href="https://github.com/ghazanfarali345"
            className={classes.p10}
            target="_blank"
          >
            https://github.com/ghazanfarali345
          </Link>
          {/* <Typography variant="a"></Typography> */}
        </Grid>
        <Grid item sm={6} className={classes.topBarRight}>
          <Box component="span" className={classes.paddingRight}>
            Login
          </Box>
          <Box component="span" className={classes.paddingRight}>
            Help
          </Box>
          <Box className={classes.paddingRight}>
            <ShoppingCartIcon />
          </Box>
          <Box component="span" className={classes.paddingRight}>
            <LocationOnIcon />
            <span>Pakistan</span>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Topbar;
