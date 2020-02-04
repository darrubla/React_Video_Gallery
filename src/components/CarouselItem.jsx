import React from "react";
import PlayIcon from "../assets/images/play-icon.png";
import PlusIcon from "../assets/images/plus-icon.png";
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = img_id => {
  const img_source = `https://rickandmortyapi.com/api/character/avatar/${img_id.number}.jpeg`;
  console.log(img_source);

  return (
    <div className="carousel-item">
      <img src={img_source} alt="Item-img" className="carousel-item__img" />
      <div className="carousel-item__details">
        <div>
          <img
            src={PlayIcon}
            alt="Play Icon"
            className="carousel-item__details--img"
          />
          <img
            src={PlusIcon}
            alt="Plus Icon"
            className="carousel-item__details--img"
          />
        </div>
        <p className="carousel-item__details--title">Descriptive Title</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutes</p>
      </div>
    </div>
  );
};

export default CarouselItem;
