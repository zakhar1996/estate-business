import React, { useState, useEffect } from "react";
import "@/components/modules/MainPage/Main/Testimonials/Testimonials.scss";
import Button from "@/components/Elements/Button/Button.jsx";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTEIndex, setCurrentTeIndex] = useState(0);
  const [itemsPerGroup, setPerGroup] = useState(3);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/testimonials.json")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setPerGroup(3);
      } else if (window.innerWidth <= 1130 && window.innerWidth >= 901) {
        setPerGroup(2);
      } else if (window.innerWidth <= 900) {
        setPerGroup(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPreviousGroup = () => {
    setCurrentTeIndex((prevIndex) => Math.max(prevIndex - itemsPerGroup, 0));
  };

  const goToNextGroup = () => {
    setCurrentTeIndex((prevIndex) => Math.min(prevIndex + 1));
  };

  const renderStars = (rating) => (
    <div className="star-rating--wrapper">
      {[...Array(5)].map((_, i) => (
        <div className="star-rating">
          <img
            key={i}
            src={process.env.PUBLIC_URL + "/imagesJson/star.svg"}
            alt={`star-${i}`}
            style={{
              width: "20px",
              height: "20px",
              opacity: i < rating ? 1 : 0.3,
            }}
          />
        </div>
      ))}
    </div>
  );

  if (!testimonials.length) return <p>Loading...</p>;

  const currentGroup = testimonials.slice(
    currentTEIndex,
    currentTEIndex + itemsPerGroup
  );

  return (
    <div className="parentContainer">
      <div className="container">
        <div className="testimonial">
          <div className="testimonial--header--logo">
            <img src="/images/testimonialsLogo.png" alt="Logo" />
          </div>
          <div className="testimonial--header--wrapper">
            <div className="testimonial--header">
              <h2 className="testimonial--header-title">
                What Our Clients Say
              </h2>
              <p className="testimonial--header-description">
                Read the success stories and heartfelt testimonials from our
                valued clients. Discover why they chose Estatein for their real
                estate needs.
              </p>
            </div>
            <div className="testimonial--header-button">
              <Button type="tertiary">View All Testimonials</Button>
            </div>
          </div>

          <div className="testimonials-list">
            {currentGroup.map((item) => (
              <div className="testimonial--card" key={item.id}>
                <div className="testimonial--card--star-rating">
                  {renderStars(item.rating)}
                </div>
                <div className="testimonial--card--text">
                  <h3 className="testimonial--card--text--title">
                    {item.title}
                  </h3>
                  <p className="testimonial--card--text--description">
                    {item.description}
                  </p>
                </div>
                <div className="testimonial--card--client-info">
                  <div className="testimonial--card--client-image--wrapper">
                    <img
                      className="testimonial--card--client-image"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="testimonial--card--client-details">
                    <strong className="testimonial--card--client-name">
                      {item.name}
                    </strong>
                    <p className="testimonial--card--client-location">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination--wrapper">
            <div className="pagination">
              <div className="pagination-info">
                {String(currentTEIndex + 1).padStart(2, "0")} of{" "}
                {String(testimonials.length).padStart(2, "0")}
              </div>

              <div className="pagination-buttons">
                <button
                  onClick={goToPreviousGroup}
                  disabled={currentTEIndex === 0}
                  className="pagination-button prev"
                >
                  <img
                    src="/images/arrowLeft.png"
                    alt="Previous"
                    className="arrow"
                  />
                </button>

                <button
                  onClick={goToNextGroup}
                  disabled={
                    (currentTEIndex + 1) * itemsPerGroup >= testimonials.length
                  }
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
  );
};

export default Testimonials;
