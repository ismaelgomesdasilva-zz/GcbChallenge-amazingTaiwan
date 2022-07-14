
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CardsDestination from "../CardsDestination";


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const items = [
  <div className="item" data-value="1"><CardsDestination/></div>,
  <div className="item" data-value="2"><CardsDestination/></div>,
  <div className="item" data-value="3"><CardsDestination/></div>,
  <div className="item" data-value="4"><CardsDestination/></div>,
  <div className="item" data-value="5"><CardsDestination/></div>,
  <div className="item" data-value="6"><CardsDestination/></div>,


];

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    paddingRight={0}
    paddingLeft={0}
  />
);
export default Carousel;
