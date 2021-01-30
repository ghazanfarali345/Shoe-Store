import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    // margin: "2%",
    marginLeft: "10px",
    marginRight: "10px",

    // marginTop: "2%",
    boxShadow: "0 0 10px lightgray",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ keyNames, values, images }) {
  console.log(images, "images");
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {keyNames ? keyNames : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {values?.name}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={values?.image}
          title={values?.name}
        />
      </CardActionArea>
    </Card>
  );
}
