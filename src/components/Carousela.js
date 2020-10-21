import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousela = ({ children }) => {
  return (
    <Carousel
      removeArrowOnDeviceType={["tablet", "mobile"]}
      autoPlay
      autoPlaySpeed={10000}
      infinite
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
    >
      {children}
    </Carousel>
  );
};

export default Carousela;
