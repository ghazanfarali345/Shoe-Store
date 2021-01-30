import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Navbar: {
    display: "flex",
    alignItems: "center",
    border: "solid 1px lightgray",
    padding: ".5rem",
  },
  NavabarItems: {
    display: "flex",
  },
  m: {
    marginRight: "3rem",
    marginLeft: "2.5rem",
  },
}));

function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.Navbar}>
        <Grid item xs={5}>
          <Typography variant="h6">Shoes Store</Typography>
        </Grid>
        <Grid item xs={7} className={classes.NavabarItems}>
          <Link as={Typography} to="/" className={classes.m}>
            Home
          </Link>
          <Link as={Typography} to="/products">
            Product
          </Link>
        </Grid>
        {/* 
        <div className={classes.NavabarItems}>
         
        </div> */}
      </Grid>
    </div>
  );
}

export default Bar;
