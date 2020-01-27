import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Search />
      <Categories>
        <Carousel>
          <CarouselItem number="1" />
          <CarouselItem number="2" />
          <CarouselItem number="3" />
          <CarouselItem number="4" />
        </Carousel>
        <Carousel>
          <CarouselItem number="5" />
          <CarouselItem number="6" />
          <CarouselItem number="7" />
          <CarouselItem number="8" />
        </Carousel>
      </Categories>
    </React.Fragment>
  );
};

export default App;
