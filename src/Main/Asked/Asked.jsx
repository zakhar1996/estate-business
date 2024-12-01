import React, { useState, useEffect } from "react";
import "./Asked.scss";
import Button from "../../ReusableComponents/ReusableComponents";

const Asked = () => {
  const [askedData, setAskedData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 3; 

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/asked.json")
      .then((response) => response.json())
      .then((data) => setAskedData(data))
      .catch((error) => console.error("Error fetching asked data:", error));
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsToShow, askedData.length - itemsToShow)
    );
  };

  if (!askedData.length) return <p>Loading...</p>;

  const visibleItems = askedData.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    <div className="parentContainer">
      <div className="container">
        <div className="asked-container">
          <div className="asked">
            <div className="asked--header--logo">
              <img src="/images/testimonialsLogo.png" alt="Logo" />
            </div>
            <div className="asked-header">
              <div className="asked-header--description">
                <h2 className="asked-header--title">
                  Frequently Asked Questions
                </h2>
                <p className="asked-header--text">
                  Here are the most common questions we receive. Click on any
                  question to see the detailed answer.
                </p>
              </div>
            </div>
            <div className="asked-content">
              {visibleItems.map((item, index) => (
                <div className="asked-card" key={index}>
                  <h3 className="asked-card--title">{item.title}</h3>
                  <p className="asked-card--description">{item.description}</p>
                  <Button text="Read More" onClick={() => alert("Small")} />
                </div>
              ))}
            </div>
            <div className="asked-pagination">
              <div className="pagination-info">
              {currentIndex  + 1} of {askedData.length}
              </div>
              <div className="pagination-buttons">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="pagination-button prev"
                >
                  <img
                    src="/images/arrowLeft.png"
                    alt="Previous"
                    className="arrow"
                  />
                </button>
                <button
                  onClick={goToNext}
                  disabled={currentIndex + itemsToShow >= askedData.length}
                  className="pagination-button next"
                >
                  <img
                    src="/images/arrowRigth.png"
                    alt="Next"
                    className="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asked;
