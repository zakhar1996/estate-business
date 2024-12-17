import React, { useState, useEffect } from "react";
import "@/components/modules/MainPage/Main/Advertisement/Advertisement.scss";
import Button from "@/components/Elements/Button/Button.jsx";

const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [adsToShow, setAdsToShow] = useState(3);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/advertisement.json")
      .then((response) => response.json())
      .then((data) => setAdvertisements(data))
      .catch((error) => console.error("Error fetching advertisements:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setAdsToShow(3);
      } else if (window.innerWidth <= 1130 && window.innerWidth >= 901) {
        setAdsToShow(2);
      }
      else if (window.innerWidth <= 900) {
        setAdsToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize); // Додаємо слухача подій для зміни розміру екрану

    // Очищаємо обробник події при демонтажі компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPreviousAd = () => {
    setCurrentAdIndex((prevIndex) => Math.max(prevIndex - adsToShow, 0));
  };

  const goToNextAd = () => {
    setCurrentAdIndex((prevIndex) =>
      Math.min(prevIndex + adsToShow, advertisements.length - adsToShow)
    );
  };

  if (!advertisements.length) return <p>Loading...</p>;

  const visibleAds = advertisements.slice(
    currentAdIndex,
    currentAdIndex + adsToShow
  );

  return (
    <div className="parentContainer">
      <div className="container">
        <div className="advertisement">
          <div className="advertisement--header--logo">
            <img src="/images/testimonialsLogo.png" alt="Logo" />
          </div>
          <div className="advertisement-header">
            <div className="advertisement-header--description">
              <h2 className="advertisement-header--description--title">
                Featured Properties
              </h2>
              <p className="advertisement-header--description--text">
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available through Estatein. Click "View Details" for more
                information.
              </p>
            </div>
            <div className="advertisement-header--button">
            <Button type="tertiary">View All Properties</Button>
            </div>
          </div>
          <div className="advertisement-content">
            {visibleAds.map((ad, index) => (
              <div className="advertisement--card" key={index}>
                <div className="advertisement--card--image--wrapper">
                  <img
                    className="advertisement--card--image"
                    src={ad.image}
                    alt={ad.title}
                  />
                </div>
                <div className="advertisement--card--text">
                  <h3 className="advertisement--card--text--title">
                    {ad.title}
                  </h3>
                  <p className="advertisement--card--text--description">
                    {ad.description}
                    <span className="advertisement--card--text--description--span">
                      Read More
                    </span>
                  </p>
                </div>
                <div className="advertisement--card--logo">
                  <div className="advertisement--card--logo--item">
                    <div className="advertisement--card--logo--item--images">
                      <img src="./imagesJson/advertisementlogo1.png" alt="" />
                    </div>
                    <p>4-Bedroom</p>
                  </div>
                  <div className="advertisement--card--logo--item">
                    <div className="advertisement--card--logo--item--images">
                      <img src="./imagesJson/advertisementlogo2.png" alt="" />
                    </div>
                    <p>3-Bathroom</p>
                  </div>

                  <div className="advertisement--card--logo--item">
                    <div className="advertisement--card--logo--item--images">
                      <img src="./imagesJson/advertisementlogo3.png" alt="" />
                    </div>
                    <p>Villa</p>
                  </div>
                </div>
                <div className="advertisement--card--footer">
                  <div className="advertisement--card--text--price">
                    <p className="advertisement--card--text--price--text">
                      Price
                    </p>
                    <p className="advertisement--card--text--price--number">
                      {ad.price}
                    </p>
                  </div>
                  <Button type="secondary" fullWidth={true}>View All Properties</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination--wrapper">
            <div className="pagination">
              <div className="pagination-info">
                {String(currentAdIndex + 1).padStart(2, "0")} of{" "}
                {String(advertisements.length).padStart(2, "0")}
              </div>
              <div className="pagination-buttons">
                <button
                  onClick={goToPreviousAd}
                  disabled={currentAdIndex === 0}
                  className="pagination-button prev"
                >
                  <img
                    src="/images/arrowLeft.png"
                    alt="Previous"
                    className="arrow"
                  />
                </button>
                <button
                  onClick={goToNextAd}
                  disabled={currentAdIndex + adsToShow >= advertisements.length}
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
              <Button type="secondary">View All Properties</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
