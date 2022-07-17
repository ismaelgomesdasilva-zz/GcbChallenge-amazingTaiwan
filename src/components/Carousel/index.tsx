import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {CardsDestination} from "../CardsDestination";


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const items = [
  <div className="item" data-value="1"><CardsDestination src="/destination1.svg" width={277} height={408} title='Taipei' traveling={56} starlength={5}/></div>,
  <div className="item" data-value="2"><CardsDestination src="/destination2.svg" width={277} height={408} title='Taichung' traveling={48} starlength={4.5} /></div>,
  <div className="item" data-value="3"><CardsDestination src="/destination3.svg" width={277} height={408} title='Keelung' traveling={24}  starlength={4.5}/></div>,
  <div className="item" data-value="4"><CardsDestination src="/destination4.svg" width={277} height={408} title='Kaohsiung' traveling={37} starlength={5} /></div>,
  <div className="item" data-value="5"><CardsDestination src="/destination5.svg" width={277} height={408} title='Taoko' traveling={120} starlength={3} /></div>,

];
export const Carousel = () => (

  <AliceCarousel
    mouseTracking={true}
    items={items}
    responsive={responsive}
    paddingRight={0}
    paddingLeft={0}
    infinite={false}
    ssrSilentMode={true} />
);

