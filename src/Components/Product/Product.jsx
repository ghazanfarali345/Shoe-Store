import React from "react";
import Card from "../Card/Card";
import Container from "@material-ui/core/Container";
import shoes from "../../shoe.json";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "2%",
  },
};

function Product() {
  return (
    <Container style={styles.container}>
      {Object.keys(shoes).map((keyNames, i) => {
        return (
          <Link key={i} to={`/products/${keyNames}`}>
            <Card keyNames={keyNames} values={shoes[keyNames]} />
          </Link>
        );
      })}
    </Container>
  );
}

export default Product;
