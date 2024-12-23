import React, { useState, useEffect } from "react";
import "@/components/modules/MainPage/Main/Asked/Asked.scss";
import Button from "@/components/Elements/Button/Button.jsx";

const Asked = () => {
  const [askedData, setAskedData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/asked.json")
      .then((response) => response.json())
      .then((data) => setAskedData(data))
      .catch((error) => console.error("Error fetching asked data:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
                  Find answers to common questions about Estatein's services,
                  property listings, and the real estate process. We're here to
                  provide clarity and assist you every step of the way.
                </p>
              </div>
              <div className="asked-header--text--button">
                <Button type="tertiary">View All FAQ’s</Button>
              </div>
            </div>
            <div className="asked-content">
              {visibleItems.map((item, index) => (
                <div className="asked-card" key={index}>
                  <h3 className="asked-card--title">{item.title}</h3>
                  <p className="asked-card--description">{item.description}</p>
                  <Button type="tertiary">Read More</Button>
                </div>
              ))}
            </div>
            <div className="pagination--wrapper">
              <div className="pagination">
                <div className="pagination-info">
                  {String(currentIndex + 1).padStart(2, "0")} of{" "}
                  {String(askedData.length).padStart(2, "0")}
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
              <div className="pagination--button--mobile">
                <Button type="tertiary">View All Properties</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asked;
