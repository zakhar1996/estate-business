// CustomArrows.jsx
import React from "react";
import "@/components/modules/Pages/properties/SeasideSerenityVilla/CustomArrows.scss";

const PrevArrow = ({ onClick }) => (
  <button className="prev-button" onClick={onClick}>
    <img src="/images/arrowLeft.png" alt="prev" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="next-button" onClick={onClick}>
    <img src="/images/arrowRigth.png" alt="next" />
  </button>
);

const Dots = ({ activeIndex, length }) => {
  const indicators = 6; // Фіксована кількість індикаторів
  return (
    <div className="dots-container">
      {Array.from({ length: indicators }).map((_, index) => (
        <div
          key={index}
          className={`dot ${index === activeIndex ? "dot-active" : ""}`}
        />
      ))}
    </div>
  );
};

export { PrevArrow, NextArrow, Dots };
