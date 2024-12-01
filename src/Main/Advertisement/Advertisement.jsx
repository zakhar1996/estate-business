import React, { useState, useEffect } from "react";
import "./Advertisement.scss";
import Button from "../../ReusableComponents/ReusableComponents";

const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const adsToShow = 3; 

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/advertisement.json")
      .then((response) => response.json())
      .then((data) => setAdvertisements(data))
      .catch((error) => console.error("Error fetching advertisements:", error));
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
            <Button
              text="View Property Details"
              onClick={() => alert("Small")}
            />
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
                  </p>
                </div>
                <div className="advertisement--card--logo">
                  <div className="advertisement--card--logo--item">
                    <img src="./imagesJson/advertisementlogo3.png" alt="" />
                    <p>4-Bedroom</p>
                  </div>
                  <div className="advertisement--card--logo--item">
                    <img src="./imagesJson/advertisementlogo3.png" alt="" />
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
                  <Button
                    text="View Property Details"
                    onClick={() => alert("Small")}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="advertisement-pagination">
            <div className="pagination-info">
            {currentAdIndex + 1} of {advertisements.length}
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
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
