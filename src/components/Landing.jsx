import React from "react";
import UndrawBooks from "../assets/books-svgrepo-com.svg";
const Landing = () => {
  return (
    <section>
      <header id="ignoredHeader">
        <div className="header__container">
          <div className="header__description">
            <h1>Ethiopia's most awarded online library Platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library </span>
            </h2>
            <a href="#features">
              <button className="btn">Browse Books</button>
            </a>
          </div>

          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
