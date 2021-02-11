import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import img1 from "../../assets/images/PngItem_1093417.png";
// import img2 from "../../assets/images/PngItem_1149746.png";
// import img3 from "../../assets/images/PngItem_2441597.png";

const img1 =
  "https://demo.codezeel.com/prestashop/PRS15/PRS150359/modules/cz_imageslider/views/img/sample-1.jpg";
const img2 =
  "https://demo.codezeel.com/prestashop/PRS15/PRS150359/modules/cz_imageslider/views/img/sample-2.jpg";
const img3 =
  "https://demo.codezeel.com/prestashop/PRS15/PRS150359/img/psblog/b/7/1105_709/b-blog-5.jpg";

const images = [img1, img2, img3];
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%", height: "85vh" }}
            src={each}
            alt={index}
          />
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
