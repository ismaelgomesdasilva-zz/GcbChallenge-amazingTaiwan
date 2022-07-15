
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
  <div className="item" data-value="1"><CardsDestination src="/towerCity.png" width={277} height={408} title='Taipei' traveling={56} initialValue={5}/></div>,
  <div className="item" data-value="2"><CardsDestination src="/taichung.png" width={277} height={408} title='Taichung' traveling={48} initialValue={4.5} /></div>,
  <div className="item" data-value="3"><CardsDestination src="/keelung.png" width={277} height={408} title='Keelung' traveling={24}  initialValue={4.5}/></div>,
  <div className="item" data-value="4"><CardsDestination src="/kaohsiung.png" width={277} height={408} title='Kaohsiung' traveling={37} initialValue={5} /></div>,
  <div className="item" data-value="5"><CardsDestination src="/sunMon.jpg" width={277} height={408} title='Taoko' traveling={120} initialValue={3} /></div>,

];
const Carousel = () => (

  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    paddingRight={0}
    paddingLeft={0}
    infinite={false}
    ssrSilentMode={true} />
);
export default Carousel;
