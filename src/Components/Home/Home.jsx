// import React, { useState, useEffect } from "react";
import Carousel from "../InfiniteCarousel/Carousel";
// import "./Home.css";

function Home(prop) {
  // const [text, setText] = useState("Welcome To My Shoe Store");
  // useEffect(() => {
  //   let index = 0;
  //   const autoWrite = () => {
  //     setText(text.slice(0, index));
  //     index++;
  //     if (index > text.length) {
  //       index = 0;
  //     }
  //   };
  //   let interval = setInterval(autoWrite, 200);

  //   // return clearInterval(interval);
  // }, [prop]);

  return (
    <div className="home">
      {/* <h1>{text}</h1> */}
      <Carousel />
    </div>
  );
}

export default Home;
