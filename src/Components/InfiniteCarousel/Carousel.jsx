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
      image: {
        width: "100%",
        height: "88vh",
      },
    };
    const settings = {
      arrowsBlock: false,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div style={styles.container}>
        <Slider {...settings}>
          <div>
            <img
              style={styles.image}
              src="https://demo.codezeel.com/prestashop/PRS15/PRS150359/modules/cz_imageslider/views/img/sample-1.jpg"
              alt="image"
            />
          </div>
          <div>
            <img
              style={styles.image}
              src="https://demo.codezeel.com/prestashop/PRS15/PRS150359/modules/cz_imageslider/views/img/sample-2.jpg"
              alt="image"
            />
          </div>
          <div>
            <img
              style={styles.image}
              src="https://demo.codezeel.com/prestashop/PRS15/PRS150359/img/psblog/b/7/1105_709/b-blog-5.jpg"
              alt="image"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
