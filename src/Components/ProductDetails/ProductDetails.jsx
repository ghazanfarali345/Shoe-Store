import React from "react";
import { useParams } from "react-router-dom";
import shoes from "../../shoe.json";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  paper: {
    maxWidth: "1000px",
    margin: "auto",
    textAlign: "center",
    justifyContent: "space-evenly",
    marginTop: "3%",
    padding: "2%",
    boxShadow: "0 0 10px lightgray",
  },
  card: {
    display: "flex",
    marginTop: "5%",
  },
  image: {
    width: "50%",
    objectFit: "contain",
  },
  info: {
    textAlign: "left",
    marginLeft: "2%",
  },
});

function ProductDetails(props) {
  const classes = styles();
  const { id } = useParams();
  const { name, image } = shoes[id];
  //   console.log(shoe);
  return (
    <div>
      <Paper style={classes.paper}>
        <h1>Product Details</h1>
        <div style={classes.card}>
          <img style={classes.image} src={image} alt={name} />
          <div style={classes.info}>
            <h2>Description</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default ProductDetails;
