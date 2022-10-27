import React from "react";
import Nataly from "../../image/Nataly.png";
import Sergei from "../../image/Sergei.png";
import Denis from "../../image/Denis.png";
import "../Carousel/Carousel.css";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemToShow: 1 },
  { width: 550, itemToShow: 2 },
  { width: 768, itemToShow: 3 },
  { width: 1200, itemToShow: 4 },
];

function CarouselContainer() {
  return (

    <div className='carousel'>
      <h1>Отзывы</h1>
      <div className='carousel-container'>
        <div className='carousel-wrapper'>

         Carousel
        </div>

      </div>
    </div>
  );
}

export default CarouselContainer;
