import React from "react";
import "../assets/styles/components/Search.scss";

const main_title = "¿Qué veremos hoy?";
const search_input_placeholder = "Search...";

const Search = () => {
  return (
    <section className="main">
      <h1 className="main__title">{main_title}</h1>
      <input
        type="text"
        className="input"
        placeholder={search_input_placeholder}
      ></input>
    </section>
  );
};

export default Search;
