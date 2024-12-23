import React, { useEffect, useState } from "react";
import "@/components/modules/Pages/AboutUs/ClientsSection/ClientsSection.scss";
import Button from "@/components/Elements/Button/Button.jsx";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerGroup, setItemsPerGroup] = useState(2);

  useEffect(() => {
    fetch("/ClientsSection.json")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setItemsPerGroup(2);
      } else if (window.innerWidth <= 901) {
        setItemsPerGroup(1);
      } else if (window.innerWidth <= 900) {
        setItemsPerGroup(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPreviousGroup = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerGroup, 0));
  };

  const goToNextGroup = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerGroup, clients.length - itemsPerGroup)
    );
  };

  if (!clients.length) return <p>Loading...</p>;

  const currentGroup = clients.slice(currentIndex, currentIndex + itemsPerGroup);

  return (
    <div className="clients-wrapper">
      <div className="team-header--logo">
        <img src="/images/testimonialsLogo.png" alt="Logo" />
      </div>
      <div className="clients-header">
        <h2>Our Valued Clients</h2>
        <p>
          At Estatein, we have had the privilege of working with a diverse range
          of clients across various industries. Here are some of the clients
          we've had the pleasure of serving.
        </p>
      </div>

      <div className="clients-cards">
        {currentGroup.map((client, index) => (
          <div key={index} className="client-card">
            <div className="client-card-header">
              <div className="client-card-header--text">
                <span>{client.since}</span>
                <h3>{client.company}</h3>
              </div>
              <div className="clients--card--button">
                <Button type="tertiary"  fullWidth = {true}>Visit Website</Button>
              </div>
            </div>

            <div className="client-card-info">
              <div className="info-item">
                <div className="info-item--logo">
                  <img
                    src="/images/domain-icon.png"
                    alt="Domain Icon"
                    className="info-icon"
                  />
                </div>
                <div className="info-item--text">
                  <p>Domain</p>
                </div>
                <p className="info-item--category">{client.domain}</p>
              </div>
              <div className="info-item  info--borderd">
                <div className="info-item--logo">
                  <img
                    src="/images/category-icon.png"
                    alt="Category Icon"
                    className="info-icon"
                  />
                </div>
                <div className="info-item--text">
                  <p>Category</p>
                </div>
                <p className="info-item--category">{client.category}</p>
              </div>
            </div>
            <div className="client-testimonial">
              <span>What They Said 🤗</span>
              <p>{client.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    <div className="clients-pagination">
        <div className="clients-pagination__top">
          <div className="clients-pagination__info">
            {String(currentIndex + 1).padStart(2, "0")} of{" "}
            {String(clients.length).padStart(2, "0")}
          </div>
          <div className="clients-pagination__buttons">
            <button
              onClick={goToPreviousGroup}
              disabled={currentIndex === 0}
              className="clients-pagination__button prev"
            >
              <img
                src="/images/arrowLeft.png"
                alt="Previous"
                className="arrow"
              />
            </button>

            <button
              onClick={goToNextGroup}
              disabled={currentIndex + itemsPerGroup >= clients.length}
              className="clients-pagination__button next"
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
  );
};

export default ClientsSection;
