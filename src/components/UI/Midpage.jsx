import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
export const Midpage = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Uncover the rich history, vibrant cultures, and breathtaking beauty
            of every nation on Earth. Effortlessly explore, search, and filter
            through a world of countries to find the stories, facts, and
            insights that inspire you.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/world_png.png"
            alt="image"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
