import React from "react";
import "../assets/styles/components/Search.scss";

const main_title = "¿Qué veremos hoy?";
const search_input_placeholder = "Search...";

const Search = () => {
  return (
    <section className="main">
      <h2 className="main__title">{main_title}</h2>
      <input
        type="text"
        className="input"
        placeholder={search_input_placeholder}
      ></input>
    </section>
  );
};

export default Search;
