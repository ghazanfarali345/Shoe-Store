import React, { Component } from "react";
import Slider from "infinite-react-carousel";

export default class CustomSlider extends Component {
  render() {
    const styles = {
      container: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      images: {
        width: "100%",
        height: "88vh",
      },
    };
    const settings = {
      arrowsBlock: false,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div style={styles.container}>
        <Slider {...settings}>
          <div>
            <img
              style={styles.images}
              src="https://demo.codezeel.com/prestashop/PRS15/PRS150359/modules/cz_imageslider/views/img/sample-1.jpg"
              alt="image1"
            />
          </div>
          <div>
            <img
              style={styles.images}
              src="https://demo.codezeel.com/prestashop/PRS15/PRS150359/modules/cz_imageslider/views/img/sample-2.jpg"
              alt="image2"
            />
          </div>
          <div>
            <img
              style={styles.images}
              src="https://demo.codezeel.com/prestashop/PRS15/PRS150359/img/psblog/b/7/1105_709/b-blog-5.jpg"
              alt="image3"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
